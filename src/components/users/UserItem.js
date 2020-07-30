import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const styles = makeStyles((theme) => ({
  card: {
    minWidth: 280,
    [theme.breakpoints.down('md')]: {
      minWidth: 220,
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: 220,
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: 160,
    },
  },
  img: {
    width: '162px',
    borderRadius: '50%',
    [theme.breakpoints.down('lg')]: {
      width: '144px',
    },
    [theme.breakpoints.down('md')]: {
      width: '126px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '108px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '72px',
    },
  },
  cardContent: {
    textAlign: 'center',
  },
  link: {
    cursor: 'pointer',
    backgroundColor: 'black',
    color: 'white',
    padding: '0.3rem 1rem',
    textDecoration: 'none',
  },
}));
const UserItem = (props) => {
  const classes = styles();
  const { login, avatar_url } = props.user;
  return (
    <Card className={classes.card} variant='outlined'>
      <CardContent className={classes.cardContent}>
        <img alt='avatar' src={avatar_url} className={classes.img} />
        <h3>{login}</h3>
        <Link to={`/user/${login}`} className={classes.link}>
          More
        </Link>
      </CardContent>
    </Card>
  );
};

export default UserItem;
