import { makeStyles, Typography } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import React from 'react';

const styles = makeStyles((theme) => ({
  warningBadge: {
    ...theme.shape.badge,
    backgroundColor: theme.palette.common.warning,
    color: theme.palette.common.warning35,
  },
  warningIcon: {
    ...theme.shape.icon,
    marginRight: '0.4em',
  },
}));

const Alert = ({ message }) => {
  const classes = styles();
  return (
    <div className={classes.warningBadge}>
      <WarningIcon className={classes.warningIcon} />
      <Typography display='inline' variant='body1'>
        {message}
      </Typography>
    </div>
  );
};

export default Alert;
