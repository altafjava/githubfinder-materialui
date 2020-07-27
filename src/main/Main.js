import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../components/layout/footer/Footer';
import Header from '../components/layout/Header';
import Home from '../components/layout/Home';
import User from '../components/users/User';

const Main = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/user/:login' component={User} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Main;
