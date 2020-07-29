import { Button, CircularProgress, Grid, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import SomethingWentWrong from '../error/SomethingWentWrong';
import Users from '../users/Users';
import Alert from '../error/Alert';

const styles = makeStyles((theme) => ({
  textField: {
    width: 1000,
  },
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
const Home = () => {
  const classes = styles();
  const [inputText, setInputText] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    setLoading(true);
    Axios.get('https://api.github.com/users')
      .then((response) => {
        setLoading(false);
        setUsers(response.data);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  const handleButtonClick = (e) => {
    setError(false);
    setLoading(true);
    if (inputText === '') {
      setLoading(false);
      showAlert();
    } else {
      Axios.get(`https://api.github.com/search/users?q=${inputText}`)
        .then((response) => {
          setLoading(false);
          setUsers(response.data.items);
        })
        .catch(() => {
          setError(true);
        });
    }
  };
  const onTextChange = (e) => {
    setInputText(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleButtonClick();
  };

  const showAlert = () => {
    setAlert(true);
    setTimeout(() => setAlert(false), 5000);
  };
  return (
    <Fragment>
      <Grid container justify='center'>
        <Grid item>
          <Grid container justify='center' direction='column' alignItems='center' spacing={9}>
            <Grid item>
              <TextField
                variant='outlined'
                placeholder='Search User...'
                className={classes.textField}
                onChange={onTextChange}
                onKeyPress={handleKeyPress}
              />
            </Grid>
            {alert === true && (
              <Grid item>
                <Alert />
              </Grid>
            )}
            <Grid item>
              <Button variant='contained' color='primary' size='large' onClick={handleButtonClick} style={{ marginRight: '2em' }}>
                Search
              </Button>
              <Button variant='contained' color='secondary' size='large' onClick={handleButtonClick} style={{ marginLeft: '2em' }}>
                Clear
              </Button>
            </Grid>
            <Grid item>{error ? <SomethingWentWrong /> : loading ? <CircularProgress size={100} /> : <Users users={users} />}</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Home;
