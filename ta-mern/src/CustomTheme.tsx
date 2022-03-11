import { createTheme } from '@material-ui/core/styles';

const CustomTheme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            light: '#fff',
            main: '#610a0a',
            dark: '#750404',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#fff',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

export default CustomTheme
