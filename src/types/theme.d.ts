/* eslint-disable */

import { ButtonProps } from '@mui/material/Button';
import { CSSObject } from '@mui/system';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    quiz: true;
  }
}

declare module '@mui/material/styles' {
  interface Components<Theme = unknown> {
    MuiButton?: {
      defaultProps?: Partial<ButtonProps>;
      styleOverrides?: {
        root?: CSSObject;
      };
      variants?: Array<{
        props: Partial<ButtonProps>;
        style: CSSObject;
      }>;
    };
  }
}
