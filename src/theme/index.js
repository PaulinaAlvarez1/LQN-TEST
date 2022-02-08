import { createTheme } from '@mui/material/styles';

export const COLORS = {
    primary: '#e6d21e',
    secondary: '#fff',
    info: '#40415f',
};

export const theme = createTheme({
  palette: {
      primary: {
        main: COLORS.primary,
      },
      secondary: {
        main: COLORS.secondary, 
      },
      info: {
        main: COLORS.info,
      }
    },
  });
