import { ListItemText, SwipeableDrawer, Tab, Tabs, useMediaQuery } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import GithubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import React, { Fragment, useState } from 'react';

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
  iconButton: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  menuIcon: {
    width: '30px',
    height: '30px',
  },
  swipeableDrawer: {
    backgroundColor: theme.palette.primary.main,
  },
  list: {
    color: theme.palette.common.white,
  },
  homeMargin: {
    marginBottom: '6em',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '4em',
    },
  },
  drawerMenuMargin: {
    marginBottom: '3em',
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));
const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [tabValue, setTabValue] = useState(0);
  const [listItemSelectedIndex, setListItemSelectedIndex] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);
  const isScreenForDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const onTabChange = (e, newValue) => {
    setTabValue(newValue);
  };

  const tabs = (
    <Tabs value={tabValue} onChange={onTabChange} aria-label='simple tabs example' className={classes.tabs}>
      <Tab label='Home' className={classes.tab} />
      <Tab label='About Us' className={classes.tab} />
      <Tab label='Contact Us' className={classes.tab} />
    </Tabs>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.swipeableDrawer }}
      >
        <div className={classes.drawerMenuMargin} />
        <List className={classes.list}>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setListItemSelectedIndex(0);
            }}
            selected={listItemSelectedIndex === 0}
            divider
            button
          >
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setListItemSelectedIndex(1);
            }}
            selected={listItemSelectedIndex === 1}
            divider
            button
          >
            <ListItemText>About Us</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setListItemSelectedIndex(2);
            }}
            selected={listItemSelectedIndex === 2}
            divider
            button
          >
            <ListItemText>Contact Us</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.iconButton}>
        <MenuIcon className={classes.menuIcon}></MenuIcon>
      </IconButton>
    </Fragment>
  );
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <GithubIcon />
            <Typography variant='h6' style={{ paddingLeft: '0.5rem' }}>
              Github Finder
            </Typography>
            {isScreenForDesktop ? tabs : drawer}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.homeMargin} />
    </React.Fragment>
  );
};

export default Header;
