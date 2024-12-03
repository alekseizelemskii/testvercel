import { createTheme, ThemeOptions } from '@mui/material/styles';
import { CSSObject } from '@mui/system';

const themeOptions = {
  palette: {
    primary: {
      main: '#72baf2',
    },
    secondary: {
      main: '#DDF0FF',
      light: '#ECEFFF',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: '53px',
          boxShadow: 'none !important',
          fontFamily: 'Avenir, sans-serif',
          borderRadius: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '400px',
          textTransform: 'none',
          color: '#FFF',
          fontSize: '18px',
          fontWeight: 800,
          lineHeight: 'normal',
          '&.Mui-disabled': {
            backgroundColor: '#C0DFFA',
            color: '#FFFFFF',
          },
        },
      },
      variants: [
        {
          props: { variant: 'quiz' },
          style: {
            height: '48px',
            backgroundColor: '#ECEFFF',
            color: '#282B56',
            borderRadius: '16px',
            fontWeight: 500,
            padding: '8px 16px',
            '&:hover, &:focus': {
              backgroundColor: '#5B71E1',
              color: '#FFF',
              fontWeight: 800,
            },
          } as CSSObject,
        },
      ],
    },
  },
} as ThemeOptions;

const theme = createTheme(themeOptions);

export default theme;
