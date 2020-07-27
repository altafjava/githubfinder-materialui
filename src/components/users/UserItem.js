import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';
import { makeStyles } from '@material-ui/styles';

const styles = makeStyles((theme) => ({
  card: {
    minWidth: 275,
  },
  img: {
    width: '180px',
    borderRadius: '50%',
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
