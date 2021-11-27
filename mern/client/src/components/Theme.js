import { createTheme } from '@material-ui/core'

const customTheme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#1b1b1b',
            primary: '#1b1b1b',
            light: '#6d6d6d',
        },
        neutral: {
            main: '#64748B',
            primary: '#64748B',
            contrastText: '#fff',
        },
        secondary: {
            main: '#c7c7c7',
            light: '#ffffff',
        },
    },
});

export default customTheme
