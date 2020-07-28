import { Button, Card, CardContent, Grid, GridList, GridListTile, makeStyles, Typography, CircularProgress } from '@material-ui/core';
import { ArrowBack, Cancel, CheckCircle } from '@material-ui/icons';
import Axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SomethingWentWrong from '../error/SomethingWentWrong';

const styles = makeStyles((theme) => ({
  backToSearchButton: {
    backgroundColor: theme.palette.common.pink45,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.common.pink40,
    },
  },
  visitProfileButton: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.common.black15,
    },
  },
  cancelIcon: {
    ...theme.shape.icon,
    color: theme.palette.common.danger,
  },
  checkIcon: {
    ...theme.shape.icon,
    color: theme.palette.common.success,
  },
  arrowBackIcon: {
    ...theme.shape.icon,
  },
  card: {
    ...theme.shape.card,
  },
  img: {
    width: '180px',
    borderRadius: '50%',
  },
  a: {
    textDecoration: 'none',
  },
  badgeBlue: {
    ...theme.shape.badge,
    backgroundColor: theme.palette.common.blue,
  },
  badgePink: {
    ...theme.shape.badge,
    backgroundColor: theme.palette.common.pink,
  },
  badgePurple: {
    ...theme.shape.badge,
    backgroundColor: theme.palette.common.purple,
  },
  badgeOrange: {
    ...theme.shape.badge,
    backgroundColor: theme.palette.common.orange,
  },
}));

const User = ({ match }) => {
  const classes = styles();
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [hasError, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Axios.get(`https://api.github.com/users/${match.params.login}`)
      .then((response) => {
        setLoading(false);
        setUser(response.data);
      })
      .catch(() => {
        setError(true);
      });
    Axios.get(`https://api.github.com/users/${match.params.login}/repos`)
      .then((response) => {
        setRepos(response.data);
      })
      .catch(() => {
        setError(true);
      });
    //eslint-disable-next-line
  }, []);

  const {
    login,
    avatar_url,
    html_url,
    name,
    location,
    hireable,
    bio,
    company,
    email,
    blog,
    public_repos,
    public_gists,
    followers,
    following,
    created_at,
  } = user;

  return (
    <Fragment>
      <Grid container justify='center'>
        <Grid item>
          {hasError ? (
            <SomethingWentWrong />
          ) : loading ? (
            <CircularProgress size={100} />
          ) : (
            <Grid container justify='center' direction='column' spacing={2} alignItems='flex-start'>
              <Grid item>
                <Grid container justify='flex-start' spacing={2} alignItems='center'>
                  <Grid item>
                    <Link to='/' className={classes.a}>
                      <Button variant='contained' className={classes.backToSearchButton}>
                        <ArrowBack className={classes.arrowBackIcon} />
                        Back to Search
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Typography display='inline' variant='body1'>
                      Hireable :{' '}
                    </Typography>
                    {hireable ? <CheckCircle className={classes.checkIcon} /> : <Cancel className={classes.cancelIcon} />}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Card className={classes.card} variant='outlined'>
                  <CardContent>
                    <Grid container justify='center' spacing={10}>
                      <Grid item xs={6}>
                        <Grid container justify='center' direction='column' spacing={1} alignItems='center'>
                          <Grid item>
                            <img src={avatar_url} alt='avatar' className={classes.img} />
                          </Grid>
                          <Grid item>
                            <Typography variant='h4'>{name}</Typography>
                          </Grid>
                          {location && (
                            <Grid item>
                              <b>Location : </b>
                              {location}
                            </Grid>
                          )}
                        </Grid>
                      </Grid>
                      <Grid item xs={6}>
                        <Grid container justify='center' direction='column' spacing={1} alignItems='flex-start'>
                          {bio && (
                            <Grid item>
                              <Typography variant='h6'>Bio</Typography>
                              {bio}
                            </Grid>
                          )}
                          <Grid item>
                            <a href={html_url} target='_blank' rel='noopener noreferrer' className={classes.a}>
                              <Button variant='contained' className={classes.visitProfileButton}>
                                Visit Github Profile
                              </Button>
                            </a>
                          </Grid>
                          <Grid item>
                            <b>Login : </b>
                            {login}
                          </Grid>
                          {email && (
                            <Grid item>
                              <b>Email : </b>
                              {email}
                            </Grid>
                          )}
                          {company && (
                            <Grid item>
                              <b>Company : </b>
                              {company}
                            </Grid>
                          )}
                          {blog && (
                            <Grid item>
                              <b>Website : </b>
                              <a
                                href={blog.startsWith('http') ? blog : 'http://' + blog}
                                className={classes.a}
                                target='_blank'
                                rel='noopener noreferrer'
                              >
                                {blog.startsWith('http') ? blog : 'http://' + blog}
                              </a>
                            </Grid>
                          )}
                          {created_at && (
                            <Grid item>
                              <b>Created At : </b>
                              {created_at.substring(0, created_at.indexOf('T'))}
                            </Grid>
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card className={classes.card} variant='outlined'>
                  <CardContent>
                    <Grid container spacing={2} justify='center'>
                      <Grid item>
                        <div className={classes.badgeBlue}>Followers : {followers}</div>
                      </Grid>
                      <Grid item>
                        <div className={classes.badgePink}>Following : {following}</div>
                      </Grid>
                      <Grid item>
                        <div className={classes.badgePurple}>Public Repos : {public_repos}</div>
                      </Grid>
                      <Grid item>
                        <div className={classes.badgeOrange}>Public Gists : {public_gists}</div>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Grid container justify='flex-start' direction='row'>
                  <Grid item>
                    <Typography variant='h6' color='secondary'>
                      Latest Repositories
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Card className={classes.card} variant='outlined'>
                  <CardContent>
                    <Grid container justify='center'>
                      <Grid item>
                        <GridList cols={3} cellHeight={40}>
                          {repos.map((repo) => (
                            <GridListTile key={repo.id} cols={1}>
                              <a href={repo.html_url} target='_blank' rel='noopener noreferrer' className={classes.a}>
                                {repo.name}
                              </a>
                            </GridListTile>
                          ))}
                        </GridList>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default User;
