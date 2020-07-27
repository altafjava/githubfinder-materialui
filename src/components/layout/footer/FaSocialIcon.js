import { Grid, useMediaQuery } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/styles';
import React, { Fragment } from 'react';

const styles = makeStyles((theme) => ({
  gridMainItem: {
    ...theme.shape.gridMainItem,
  },
  gridMainItemForSocialIconUpper: {
    paddingTop: '2em',
    paddingBottom: '1em',
  },
  gridMainItemForSocialIconLower: {
    paddingTop: '1em',
    paddingBottom: '2em',
  },
  facebookColor: {
    backgroundColor: '#3b5998',
  },
  twitterColor: {
    backgroundColor: '#00aced',
  },
  linkedInColor: {
    backgroundColor: '#007bb6',
  },
  googlePlusColor: {
    backgroundColor: '#dd4b39',
  },
  youtubeColor: {
    backgroundColor: '#cc181e',
  },
  instagramColorCode: {
    backgroundColor: '#bc2a8d',
  },
  socialIcon: {
    width: '50px',
    height: '50px',
    float: 'left',
    borderRadius: '50%',
    lineHeight: '55px',
    textAlign: 'center',
    boxShadow: '0 5px 11px 0 rgba(0,0,0,0.18),0 4px 15px 0 rgba(0,0,0,0.15)',
  },
}));

const FaSocialIcon = () => {
  const classes = styles();
  const isScreenLessThan500 = useMediaQuery('(max-width:500px)');

  const facebookItem = (
    <Grid item>
      <Link href='https://www.facebook.com/' color='inherit' target='_blank' rel='noopener noreferrer'>
        <div className={[classes.socialIcon, classes.facebookColor].join(' ')}>
          <i className='fab fa-facebook-f' style={{ fontSize: '1.3rem' }} />
        </div>
      </Link>
    </Grid>
  );
  const instagramItem = (
    <Grid item>
      <Link href='https://www.instagram.com/' color='inherit' target='_blank' rel='noopener noreferrer'>
        <div className={[classes.socialIcon, classes.instagramColorCode].join(' ')}>
          <i className='fab fa-instagram' style={{ fontSize: '1.3rem' }} />
        </div>
      </Link>
    </Grid>
  );
  const googlePlusItem = (
    <Grid item>
      <Link href='https://myaccount.google.com/profile' color='inherit' target='_blank' rel='noopener noreferrer'>
        <div className={[classes.socialIcon, classes.googlePlusColor].join(' ')}>
          <i className='fab fa-google-plus-g' style={{ fontSize: '1.3rem' }} />
        </div>
      </Link>
    </Grid>
  );
  const youtubeItem = (
    <Grid item>
      <Link href='https://www.youtube.com' color='inherit' target='_blank' rel='noopener noreferrer'>
        <div className={[classes.socialIcon, classes.youtubeColor].join(' ')}>
          <i className='fab fa-youtube' style={{ fontSize: '1.3rem' }} />
        </div>
      </Link>
    </Grid>
  );
  const linkedInItem = (
    <Grid item>
      <Link href='https://www.linkedin.com/' color='inherit' target='_blank' rel='noopener noreferrer'>
        <div className={[classes.socialIcon, classes.linkedInColor].join(' ')}>
          <i className='fab fa-linkedin-in' style={{ fontSize: '1.3rem' }} />
        </div>
      </Link>
    </Grid>
  );
  const twitterItem = (
    <Grid item>
      <Link href='https://twitter.com/' color='inherit' target='_blank' rel='noopener noreferrer'>
        <div className={[classes.socialIcon, classes.twitterColor].join(' ')}>
          <i className='fab fa-twitter' style={{ fontSize: '1.3rem' }} />
        </div>
      </Link>
    </Grid>
  );
  const iconsForDesktop = (
    <Grid item className={[classes.gridMainItem, classes.socialIconContainer].join(' ')}>
      <Grid container justify='center' spacing={4} alignItems='center'>
        {facebookItem}
        {instagramItem}
        {googlePlusItem}
        {youtubeItem}
        {linkedInItem}
        {twitterItem}
      </Grid>
    </Grid>
  );
  const iconsForMobile = (
    <Fragment>
      <Grid item>
        <Grid container direction='column'>
          <Grid item className={[classes.gridMainItemForSocialIconUpper, classes.socialIconContainer].join(' ')}>
            <Grid container justify='center' spacing={4} alignItems='center'>
              {facebookItem}
              {instagramItem}
              {googlePlusItem}
            </Grid>
          </Grid>
          <Grid item className={[classes.gridMainItemForSocialIconLower, classes.socialIconContainer].join(' ')}>
            <Grid container justify='center' spacing={4} alignItems='center'>
              {youtubeItem}
              {linkedInItem}
              {twitterItem}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
  return (
    <Grid item>
      <Grid container justify='center'>
        {isScreenLessThan500 ? iconsForMobile : iconsForDesktop}
      </Grid>
    </Grid>
  );
};

export default FaSocialIcon;
