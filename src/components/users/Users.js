import { GridList, GridListTile, makeStyles } from '@material-ui/core';
import React from 'react';
import UserItem from './UserItem';

const useStyles = makeStyles((theme) => ({
  divDisplayFlex: {
    ...theme.shape.divDisplayFlex,
  },
  gridListWidth: {
    ...theme.shape.gridListWidth,
    [theme.breakpoints.down('md')]: {
      width: window.innerWidth - 80,
    },
    [theme.breakpoints.down('sm')]: {
      width: window.innerWidth - 72,
    },
    [theme.breakpoints.down('xs')]: {
      width: window.innerWidth - 20,
    },
  },
}));

const Users = ({ users }) => {
  const classes = useStyles();

  const currentWindowWidth = window.innerWidth;
  const [sm, md, lg] = [600, 960, 1280];

  let divider = 0;
  let ident = 0;
  let cellHeight = 0;
  if (currentWindowWidth < sm) {
    divider = 160;
    ident = 40;
    cellHeight = 200;
  } else if (currentWindowWidth < md) {
    divider = 220;
    ident = 80;
    cellHeight = 240;
  } else if (currentWindowWidth < lg) {
    divider = 280;
    ident = 120;
    cellHeight = 256;
  } else {
    divider = 340;
    ident = 160;
    cellHeight = 276;
  }

  const quotient = Math.trunc(currentWindowWidth / divider);
  const remainder = currentWindowWidth % divider;
  let cols = remainder >= ident ? quotient : quotient - 1;
  if (currentWindowWidth < sm) {
    cols = cols > 2 ? 2 : cols;
  } else if (currentWindowWidth < md) {
    cols = cols > 3 ? 3 : cols;
  } else if (currentWindowWidth < lg) {
    cols = cols > 4 ? 4 : cols;
  } else {
    cols = cols > 5 ? 5 : cols;
  }
  console.log(currentWindowWidth, '  divider=', divider, '  quo=', quotient, '  rem=', remainder, '  cols=', cols);

  return (
    <div className={classes.divDisplayFlex}>
      <GridList spacing={8} cols={cols} cellHeight={cellHeight} className={classes.gridListWidth}>
        {users.map((user) => (
          <GridListTile key={user.id} cols={1}>
            <UserItem user={user} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default Users;
