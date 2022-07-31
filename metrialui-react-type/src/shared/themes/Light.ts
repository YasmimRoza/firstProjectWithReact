import  {createTheme} from '@mui/material'
import { cyan, pink } from '@mui/material/colors'

export const LightTheme = createTheme({
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
            paper: '#fffff',
            default: '#f7f6f3',
        }
    }
})