import { GridList, GridListTile, makeStyles } from '@material-ui/core';
import React from 'react';
import UserItem from './UserItem';

const useStyles = makeStyles((theme) => ({
  divDisplayFlex: {
    ...theme.shape.divDisplayFlex,
  },
  gridListWidth: {
    ...theme.shape.gridListWidth,
  },
}));

const Users = ({ users }) => {
  const classes = useStyles();

  return (
    <div className={classes.divDisplayFlex}>
      <GridList spacing={15} cols={5} cellHeight={320} className={classes.gridListWidth}>
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
