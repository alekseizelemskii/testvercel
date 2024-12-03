import { createTheme } from '@mui/material/styles';

const wellbeingTestTheme = createTheme({
  palette: {
    primary: {
      main: 'rgb(85, 204, 153)',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: '53px',
          boxShadow: 'none',
          fontFamily: 'Avenir, sans-serif',
          borderRadius: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          textTransform: 'none',
          color: '#FFF',
          fontSize: '18px',
          fontWeight: 800,
          lineHeight: 'normal',
        },
      },
    },
  },
});

export default wellbeingTestTheme;
