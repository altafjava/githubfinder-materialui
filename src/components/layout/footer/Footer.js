import { Button, Divider, Grid, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { makeStyles, useTheme } from '@material-ui/styles';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// import MuiSocialIcon from './MuiSocialIcon';
import FaSocialIcon from './FaSocialIcon';

const styles = makeStyles((theme) => ({
  footer: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.black23,
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
    // Recommended to use % not px
    maxWidth: '320px',
  },
}));

const Footer = () => {
  const theme = useTheme();
  const classes = styles();

  return (
    <footer className={classes.footer}>
      <Grid container direction='column' className={classes.gridContainer}>
        {/* Footer Content & Links Main Item*/}
        <Grid item className={classes.gridMainItem}>
          {/* Footer Content & Links Main Container*/}
          <Grid container justify='space-evenly' alignItems='flex-start'>
            {/* Footer Content Item*/}
            <Grid item>
              {/* Footer Content Container*/}
              <Grid container direction='column' spacing={1}>
                <Grid item>
                  <Typography variant='h6'>FOOTER CONTENT</Typography>
                </Grid>
                <Grid item>
                  <Typography variant='body2' className={classes.footerContentData}>
                    Here you can use rows and columns to organize your footer content. Here you can use rows and columns to organize your footer
                    content. Here you can use rows and columns to organize your footer content.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
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
          </Grid>
        </Grid>
        <Divider />
        {/* Signup Item */}
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
        <Divider />
        {/* Social Icon Item */}
        <FaSocialIcon />
        {/* Copyright Item */}
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
      </Grid>
    </footer>
  );
};

export default Footer;
