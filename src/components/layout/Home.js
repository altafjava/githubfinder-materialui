import { Button, Grid, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import React, { Fragment, useState } from 'react';
import Users from '../users/Users';

const styles = makeStyles((theme) => ({
  textField: {
    width: 600,
  },
}));
const Home = () => {
  const classes = styles();
  const [inputText, setInputText] = useState('');

  const handleButtonClick = () => {
    console.log('button clicked', inputText);
    // Axios.get(`https://api.github.com/search/users?q=${inputText}`).then((response) => {
    //   setUsers(response.data.items);
    // });
  };
  const onTextChange = (e) => {
    setInputText(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleButtonClick();
  };
  return (
    <Fragment>
      <Grid container justify='center'>
        <Grid item>
          <Grid container justify='center' direction='column' alignItems='center' spacing={4}>
            <Grid item>
              <TextField
                variant='outlined'
                placeholder='Search User...'
                className={classes.textField}
                onChange={onTextChange}
                onKeyPress={handleKeyPress}
              />
            </Grid>
            <Grid item>
              <Button variant='contained' color='secondary' size='large' onClick={handleButtonClick}>
                Search
              </Button>
            </Grid>
            <Grid item>
              <Users />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Home;
