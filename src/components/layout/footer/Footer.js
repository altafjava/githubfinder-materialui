import { Button, Divider, Grid, Typography, useMediaQuery } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { makeStyles, useTheme } from '@material-ui/styles';
import React, { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import FaSocialIcon from './FaSocialIcon';
import MuiSocialIcon from './MuiSocialIcon';

const styles = makeStyles((theme) => ({
  footer: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.black25,
  },
  gridMainItem: {
    ...theme.shape.gridMainItem,
  },
  copyrightContainer: {
    ...theme.typography.copyrightContainer,
    backgroundColor: theme.palette.common.black15,
  },
  link: {
    ...theme.typography.link,
  },
  button: {
    ...theme.typography.button,
    borderRadius: 50,
    backgroundColor: theme.palette.common.darkPink,
    height: '45px',
  },
  footerContentData: {
    ...theme.typography.footerContentData,
    lineHeight: 1.5,
  },
  dividerColor: {
    backgroundColor: theme.palette.common.black20,
  },
}));

const Footer = () => {
  const theme = useTheme();
  const classes = styles();
  const isScreenBiggerThanSm = useMediaQuery(theme.breakpoints.up('sm'));

  const linksItem = (
    <Fragment>
      {/* Links Item1*/}
      <Grid item>
        <Grid container direction='column' spacing={1}>
          <Grid item>
            <Typography variant='h6'>LINKS</Typography>
          </Grid>
          <Grid item component={RouterLink} to='#' className={classes.link}>
            Link1
          </Grid>
          <Grid item component={RouterLink} to='#' className={classes.link}>
            Link2
          </Grid>
          <Grid item component={RouterLink} to='#' className={classes.link}>
            Link3
          </Grid>
          <Grid item component={RouterLink} to='#' className={classes.link}>
            Link4
          </Grid>
        </Grid>
      </Grid>
      {/* Links Item2*/}
      <Grid item>
        <Grid container direction='column' spacing={1}>
          <Grid item>
            <Typography variant='h6'>LINKS</Typography>
          </Grid>
          <Grid item component={RouterLink} to='#' className={classes.link}>
            Link1
          </Grid>
          <Grid item component={RouterLink} to='#' className={classes.link}>
            Link2
          </Grid>
          <Grid item component={RouterLink} to='#' className={classes.link}>
            Link3
          </Grid>
          <Grid item component={RouterLink} to='#' className={classes.link}>
            Link4
          </Grid>
        </Grid>
      </Grid>
      {/* Links Item3*/}
      <Grid item>
        <Grid container direction='column' spacing={1}>
          <Grid item>
            <Typography variant='h6'>LINKS</Typography>
          </Grid>
          <Grid item component={RouterLink} to='#' className={classes.link}>
            Link1
          </Grid>
          <Grid item component={RouterLink} to='#' className={classes.link}>
            Link2
          </Grid>
          <Grid item component={RouterLink} to='#' className={classes.link}>
            Link3
          </Grid>
          <Grid item component={RouterLink} to='#' className={classes.link}>
            Link4
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
  const footerItem = (
    <Fragment>
      <Grid item sm={4} xs={10}>
        <Grid container direction='column' spacing={1}>
          <Grid item>
            <Typography variant='h6'>FOOTER CONTENT</Typography>
          </Grid>
          <Grid item>
            <Typography variant='body2' className={classes.footerContentData}>
              Here you can use rows and columns to organize your footer content. Here you can use rows and columns to organize your footer content.
              Here you can use rows and columns to organize your footer content.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
  const footerContentAndLinksForDesktop = (
    <Grid item className={classes.gridMainItem}>
      <Grid container justify='space-evenly'>
        {footerItem}
        {linksItem}
      </Grid>
    </Grid>
  );
  const footerContentAndLinksForMobile = (
    <Fragment>
      <Grid item className={classes.gridMainItem}>
        <Grid container justify='space-evenly'>
          {footerItem}
        </Grid>
      </Grid>
      <Divider classes={{ root: classes.dividerColor }} />
      <Grid item className={classes.gridMainItem}>
        <Grid container justify='space-evenly'>
          {linksItem}
        </Grid>
      </Grid>
    </Fragment>
  );
  const signupItem = (
    <Grid item>
      <Grid container justify='center'>
        <Grid item className={classes.gridMainItem}>
          <Grid container justify='center' spacing={2} alignItems='center'>
            <Grid item>
              <Typography variant='body1'>Register for free</Typography>
            </Grid>
            <Grid item>
              <Button variant='contained' color='secondary' size='large' className={classes.button}>
                Sign up
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
  const copyrightItem = (
    <Grid item className={[classes.gridMainItem, classes.copyrightContainer].join(' ')}>
      <Grid container justify='center' alignItems='center'>
        <Grid item>
          © 2020 Copyright :
          <Link to='/' className={classes.link} style={{ marginLeft: '2pt', color: theme.palette.common.darkPink }}>
            Github Finder
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
  return (
    <footer className={classes.footer}>
      <Grid container direction='column'>
        {/* Footer Content & Links */}
        {isScreenBiggerThanSm ? footerContentAndLinksForDesktop : footerContentAndLinksForMobile}
        <Divider classes={{ root: classes.dividerColor }} />
        {/* Signup Item */}
        {signupItem}
        <Divider classes={{ root: classes.dividerColor }} />
        {/* Social Icon Item */}
        <MuiSocialIcon />
        <Divider classes={{ root: classes.dividerColor }} />
        <FaSocialIcon />
        {/* Copyright Item */}
        {copyrightItem}
      </Grid>
    </footer>
  );
};

export default Footer;
