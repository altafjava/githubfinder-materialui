import { Button, CircularProgress, Grid, makeStyles, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import Alert from '../error/Alert';
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
      width: window.innerWidth - 40,
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

  let spacing = 0;
  const currentWindowWidth = window.innerWidth;
  const [sm, md] = [600, 960, 1280];
  if (currentWindowWidth < sm) {
    spacing = 3;
  } else if (currentWindowWidth < md) {
    spacing = 6;
  } else {
    spacing = 9;
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
    setError(null);
    setAlert(false);
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
                <CircularProgress size={100} />
              </Grid>
            ) : users.length > 0 ? (
              <Grid item>
                <Users users={users} />
              </Grid>
            ) : (
              <Fragment>
                <Grid item>
                  <Grid container direction='column' alignItems='center' spacing={2}>
                    <Grid item>
                      <img src='assets/no-record-found.svg' alt='No Record Found' />
                    </Grid>
                    <Grid item>
                      <Typography variant='h6'>No Record Found</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Fragment>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );

  // const homeForDesktop = (
  //   <Grid container justify='center' direction='column' alignItems='center' spacing={9}>
  //     <Grid item>
  //       <TextField
  //         variant='outlined'
  //         placeholder='Search User...'
  //         className={classes.textField}
  //         onChange={onTextChange}
  //         onKeyPress={handleKeyPress}
  //       />
  //     </Grid>
  //     {alert === true && (
  //       <Grid item>
  //         <Alert message='Please Enter Something' />
  //       </Grid>
  //     )}
  //     <Grid item>
  //       <Button variant='contained' color='primary' size='large' onClick={handleSearchButtonClick} style={{ marginRight: '2em' }}>
  //         Search
  //       </Button>
  //       <Button variant='contained' color='secondary' size='large' onClick={handleClearButtonClick} style={{ marginLeft: '2em' }}>
  //         Clear
  //       </Button>
  //     </Grid>
  //     {error ? (
  //       <Grid item>
  //         <Alert message={error} />
  //       </Grid>
  //     ) : loading ? (
  //       <Grid item>
  //         <CircularProgress size={100} />
  //       </Grid>
  //     ) : users.length > 0 ? (
  //       <Grid item>
  //         <Users users={users} />
  //       </Grid>
  //     ) : (
  //       <Fragment>
  //         <Grid item>
  //           <Grid container direction='column' alignItems='center' spacing={2}>
  //             <Grid item>
  //               <img src='assets/no-record-found.svg' alt='No Record Found' />
  //             </Grid>
  //             <Grid item>
  //               <Typography variant='h6'>No Record Found</Typography>
  //             </Grid>
  //           </Grid>
  //         </Grid>
  //       </Fragment>
  //     )}
  //   </Grid>
  // );

  // const homeForMobile = (
  //   <Grid container justify='center' direction='column' alignItems='center' spacing={3}>
  //     <Grid item>
  //       <TextField
  //         variant='outlined'
  //         placeholder='Search User...'
  //         className={classes.textField}
  //         onChange={onTextChange}
  //         onKeyPress={handleKeyPress}
  //       />
  //     </Grid>
  //     {alert === true && (
  //       <Grid item>
  //         <Alert message='Please Enter Something' />
  //       </Grid>
  //     )}
  //     <Grid item>
  //       <Button variant='contained' color='primary' size='large' onClick={handleSearchButtonClick} style={{ marginRight: '1em' }}>
  //         Search
  //       </Button>
  //       <Button variant='contained' color='secondary' size='large' onClick={handleClearButtonClick} style={{ marginLeft: '1em' }}>
  //         Clear
  //       </Button>
  //     </Grid>
  //     {error ? (
  //       <Grid item>
  //         <Alert message={error} />
  //       </Grid>
  //     ) : loading ? (
  //       <Grid item>
  //         <CircularProgress />
  //       </Grid>
  //     ) : users.length > 0 ? (
  //       <Grid item>
  //         <Users users={users} />
  //       </Grid>
  //     ) : (
  //       <Fragment>
  //         <Grid item>
  //           <Grid container direction='column' alignItems='center' spacing={2}>
  //             <Grid item>
  //               <img src='assets/no-record-found.svg' alt='No Record Found' />
  //             </Grid>
  //             <Grid item>
  //               <Typography variant='h6'>No Record Found</Typography>
  //             </Grid>
  //           </Grid>
  //         </Grid>
  //       </Fragment>
  //     )}
  //   </Grid>
  // );
};

export default Home;
