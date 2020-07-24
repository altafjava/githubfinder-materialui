import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import theme from '../components/ui/Theme';
import Main from './Main';

const Container = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
};

export default Container;
