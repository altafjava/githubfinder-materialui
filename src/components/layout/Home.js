import { Button, CircularProgress, Grid, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import Alert from '../error/Alert';
import NoRecordFound from '../error/NoRecordFound';
import Users from '../users/Users';

const styles = makeStyles((theme) => ({
  textField: {
    width: window.innerWidth - 200,
    [theme.breakpoints.down('md')]: {
      width: window.innerWidth - 120,
    },
    [theme.breakpoints.down('sm')]: {
      width: window.innerWidth - 80,
    },
    [theme.breakpoints.down('xs')]: {
      width: window.innerWidth - 20,
    },
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
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState(false);
  const [recordNotFound, setRecordNotFound] = useState(false);

  let spacing = 9;
  let spinnerSize = 90;
  const currentWindowWidth = window.innerWidth;
  const [sm, md, lg] = [600, 960, 1280];
  if (currentWindowWidth < sm) {
    spinnerSize = 40;
    spacing = 3;
  } else if (currentWindowWidth < md) {
    spinnerSize = 60;
    spacing = 6;
  } else if (currentWindowWidth < lg) {
    spinnerSize = 76;
    spacing = 8;
  }
  useEffect(() => {
    setLoading(true);
    Axios.get('https://api.github.com/users')
      .then((response) => {
        setLoading(false);
        setUsers(response.data);
      })
      .catch((error) => {
        if (!error.response) {
          showSomethingWentWrong('Please check your Internet Connection');
        } else {
          showSomethingWentWrong('Something went wrong');
        }
      });
  }, []);

  const handleClearButtonClick = () => {
    setUsers([]);
  };
  const handleSearchButtonClick = () => {
    setRecordNotFound(false);
    setError(null);
    setAlert(false);
    setLoading(true);
    if (inputText === '') {
      setLoading(false);
      showAlert();
    } else {
      Axios.get(`https://api.github.com/search/users?q=${inputText}`)
        .then((response) => {
          if (response.data.items.length === 0) setRecordNotFound(true);
          setLoading(false);
          setUsers(response.data.items);
        })
        .catch((error) => {
          if (!error.response) {
            showSomethingWentWrong('Please check your Internet Connection');
          } else {
            showSomethingWentWrong('Something went wrong');
          }
        });
    }
  };
  const onTextChange = (e) => setInputText(e.target.value);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearchButtonClick();
  };

  const showAlert = () => {
    setAlert(true);
    setTimeout(() => setAlert(false), 5000);
  };
  const showSomethingWentWrong = (message) => {
    setLoading(false);
    setError(message);
    setTimeout(() => setError(null), 5000);
  };

  return (
    <Fragment>
      <Grid container justify='center'>
        <Grid item>
          {/* {isScreenForDesktop ? homeForDesktop : homeForMobile} */}
          <Grid container justify='center' direction='column' alignItems='center' spacing={spacing}>
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
                <Alert message='Please Enter Something' />
              </Grid>
            )}
            <Grid item>
              <Button variant='contained' color='primary' size='large' onClick={handleSearchButtonClick} style={{ marginRight: '2em' }}>
                Search
              </Button>
              <Button variant='contained' color='secondary' size='large' onClick={handleClearButtonClick} style={{ marginLeft: '2em' }}>
                Clear
              </Button>
            </Grid>
            {error ? (
              <Grid item>
                <Alert message={error} />
              </Grid>
            ) : loading ? (
              <Grid item>
                <CircularProgress size={spinnerSize} />
              </Grid>
            ) : recordNotFound ? (
              <NoRecordFound />
            ) : (
              <Grid item>
                <Users users={users} />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Home;
