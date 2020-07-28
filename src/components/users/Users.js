import { GridList, GridListTile, makeStyles } from '@material-ui/core';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserItem from './UserItem';

const useStyles = makeStyles((theme) => ({
  divDisplayFlex: {
    ...theme.shape.divDisplayFlex,
  },
  gridListWidth: {
    ...theme.shape.gridListWidth,
  },
}));

const Users = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get('https://api.github.com/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className={classes.divDisplayFlex}>
      <GridList spacing={15} cols={4} cellHeight={320} className={classes.gridListWidth}>
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
