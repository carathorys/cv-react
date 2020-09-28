import {blue, blueGrey, teal} from '@material-ui/core/colors'
import {createMuiTheme} from '@material-ui/core'

export const theme = (prefersDarkTheme: boolean) => createMuiTheme({
    palette: {
        primary: {
            main: blue[900]
        },
        secondary: {
            main: teal[700]
        },
        type: prefersDarkTheme ? 'dark' : 'light'
    }
})
