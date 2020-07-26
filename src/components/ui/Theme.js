import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    common: {
      blue: '#007bff',
      indigo: '#6610f2',
      purple: '#6f42c1',
      pink: '#e83e8c',
      darkPink: '#dc004e',
      red: '#dc3545',
      orange: '#fd7e14',
      yellow: '#ffc107',
      green: '#28a745',
      teal: '#20c997',
      cyan: '#17a2b8',
      gray: '#6c757d',
      white: '#ffffff',
      black: '#000000',
      black23: '#343a40',
      black15: '#1f292e',
      success: '#28a745',
      info: '#17a2b8',
      warning: '#ffc107',
      danger: '#dc3545',
      light: '#f8f9fa',
    },
  },
  typography: {
    footerContentData: {
      fontFamily: 'Roboto',
      fontSize: '0.9rem',
      fontWeight: 300,
      textAlign: 'justify',
    },
    link: {
      fontFamily: 'Roboto',
      fontSize: '0.9rem',
      fontWeight: 300,
      color: 'white',
      textDecoration: 'none',
    },
    copyrightContainer: {
      fontFamily: 'Roboto',
      fontSize: '0.8rem',
      fontWeight: 300,
    },
    button: {
      fontSize: '0.9rem',
      fontWeight: 300,
    },
  },
  shape: {
    gridMainItem: {
      padding: '2em',
    },
  },
});
