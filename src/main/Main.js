import React, { Fragment } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/footer/Footer';
import Home from '../components/layout/Home';

const Main = () => {
  return (
    <Fragment>
      <Header />
      <Home />
      <Footer />
    </Fragment>
  );
};

export default Main;
