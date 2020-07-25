import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import theme from './components/ui/Theme';
import Container from './main/Container';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Container />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
