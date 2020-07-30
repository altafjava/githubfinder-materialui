import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    common: {
      blue: '#007bff',
      indigo: '#6610f2',
      purple: '#6f42c1',
      pink: '#e83e8c',
      pink40: '#cc0047',
      pink45: '#e60050',
      pink50: '#ff0059',
      red: '#dc3545',
      orange: '#fd7e14',
      yellow: '#ffc107',
      green: '#28a745',
      teal: '#20c997',
      cyan: '#17a2b8',
      gray: '#6c757d',
      white: '#ffffff',
      black: '#000000',
      black25: '#394046',
      black20: '#29363d',
      black15: '#1f292e',
      success: '#28a745',
      info: '#17a2b8',
      warning: '#ffc107',
      warning35: '#b38600',
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
    tab: {
      fontFamily: 'Roboto',
      fontSize: '1rem',
      fontWeight: 500,
    },
  },
  shape: {
    footerGridItem: {
      paddingTop: '2em',
      paddingBottom: '2em',
    },
    icon: {
      verticalAlign: 'top',
    },
    badge: {
      display: 'inline-block',
      padding: '0.8rem',
      textAlign: 'center',
      borderRadius: 5,
      color: 'white',
    },
    divDisplayFlex: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-end',
    },
    gridListWidth: {
      width: window.innerWidth - 80,
    },
    card: {
      minWidth: 1200,
      maxWidth: 1200,
      alignItems: 'center',
    },
  },
});
