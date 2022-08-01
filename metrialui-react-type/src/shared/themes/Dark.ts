import  {createTheme} from '@mui/material';
import { cyan, pink } from '@mui/material/colors';

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: pink[600],
      dark: pink[700],
      light: pink[500],
      contrastText: '#fffff',
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: '#fffff',
    },
    background: {
      paper: '#303134',
      default: '#202124',
    }
  }
});