import { Grid } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const styles = makeStyles((theme) => ({
  gridMainItem: {
    ...theme.shape.gridMainItem,
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
  return (
    <Grid item className={[classes.gridMainItem, classes.socialIconContainer].join(' ')}>
      <Grid container justify='center' spacing={3} alignItems='center'>
        <Grid item>
          <Link href='https://www.facebook.com/' color='inherit' target='_blank' rel='noopener noreferrer'>
            <div className={[classes.socialIcon, classes.facebookColor].join(' ')}>
              <i className='fab fa-facebook-f' style={{ fontSize: '1.3rem' }} />
            </div>
          </Link>
        </Grid>
        <Grid item>
          <Link href='https://www.instagram.com/' color='inherit' target='_blank' rel='noopener noreferrer'>
            <div className={[classes.socialIcon, classes.instagramColorCode].join(' ')}>
              <i className='fab fa-instagram' style={{ fontSize: '1.3rem' }} />
            </div>
          </Link>
        </Grid>
        <Grid item>
          <Link href='https://myaccount.google.com/profile' color='inherit' target='_blank' rel='noopener noreferrer'>
            <div className={[classes.socialIcon, classes.googlePlusColor].join(' ')}>
              <i className='fab fa-google-plus-g' style={{ fontSize: '1.3rem' }} />
            </div>
          </Link>
        </Grid>
        <Grid item>
          <Link href='https://www.youtube.com' color='inherit' target='_blank' rel='noopener noreferrer'>
            <div className={[classes.socialIcon, classes.youtubeColor].join(' ')}>
              <i className='fab fa-youtube' style={{ fontSize: '1.3rem' }} />
            </div>
          </Link>
        </Grid>
        <Grid item>
          <Link href='https://www.linkedin.com/' color='inherit' target='_blank' rel='noopener noreferrer'>
            <div className={[classes.socialIcon, classes.linkedInColor].join(' ')}>
              <i className='fab fa-linkedin-in' style={{ fontSize: '1.3rem' }} />
            </div>
          </Link>
        </Grid>
        <Grid item>
          <Link href='https://twitter.com/' color='inherit' target='_blank' rel='noopener noreferrer'>
            <div className={[classes.socialIcon, classes.twitterColor].join(' ')}>
              <i className='fab fa-twitter' style={{ fontSize: '1.3rem' }} />
            </div>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FaSocialIcon;
