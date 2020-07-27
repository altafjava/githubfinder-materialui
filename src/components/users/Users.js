import { GridList, GridListTile, makeStyles } from '@material-ui/core';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserItem from './UserItem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  },
  gridList: {
    width: 1200,
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
    <div className={classes.root}>
      <GridList spacing={15} cols={4} cellHeight={320} className={classes.gridList}>
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
