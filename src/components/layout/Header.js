import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import React, { useState } from 'react';
import GithubIcon from '@material-ui/icons/GitHub';
import { Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  tabs: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 100,
  },
}));
const Header = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <GithubIcon />
            <Typography variant='h6' style={{ paddingLeft: '0.5rem' }}>
              Github Finder
            </Typography>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='simple tabs example'
              className={classes.tabs}
            >
              <Tab label='Home' className={classes.tab} />
              <Tab label='About Us' className={classes.tab} />
              <Tab label='Contact Us' className={classes.tab} />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
};

export default Header;
