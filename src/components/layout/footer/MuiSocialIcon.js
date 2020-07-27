import React from 'react';
import { Grid } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/styles';
import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@material-ui/icons/';

const styles = makeStyles((theme) => ({
  gridItem: {
    ...theme.shape.footerGridItem,
  },
}));

const MuiSocialIcon = () => {
  const classes = styles();
  return (
    <Grid item>
      <Grid container justify='center'>
        <Grid item className={classes.gridItem}>
          <Grid container justify='center' spacing={3}>
            <Grid item>
              <Link href='https://www.facebook.com/' color='inherit' target='_blank' rel='noopener noreferrer'>
                <Facebook fontSize='large' />
              </Link>
            </Grid>
            <Grid item>
              <Link href='https://twitter.com/' color='inherit' target='_blank' rel='noopener noreferrer'>
                <Twitter fontSize='large' />
              </Link>
            </Grid>
            <Grid item>
              <Link href='https://www.youtube.com/' color='inherit' target='_blank' rel='noopener noreferrer'>
                <YouTube fontSize='large' />
              </Link>
            </Grid>
            <Grid item>
              <Link href='https://www.linkedin.com/' color='inherit' target='_blank' rel='noopener noreferrer'>
                <LinkedIn fontSize='large' />
              </Link>
            </Grid>
            <Grid item>
              <Link href='https://www.instagram.com/' color='inherit' target='_blank' rel='noopener noreferrer'>
                <Instagram fontSize='large' />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MuiSocialIcon;
