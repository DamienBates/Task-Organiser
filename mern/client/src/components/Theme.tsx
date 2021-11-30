import { createTheme, PaletteOptions, SimplePaletteColorOptions } from "@mui/material";

declare module "@mui/material/styles" {
    interface PaletteColor {
        lightest?: string;
        lighter?: string;
        darker?: string;
    }

    interface PaletteOptions {
        slate: any;
    }
}

declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        slate: true;
    }
}

declare module "@mui/material/Chip" {
    interface ChipPropsColorOverrides {
        slate: true;
    }
}

interface DefaultPaletteOptions extends PaletteOptions {
    primary?: SimplePaletteColorOptions;
}

const Theme = createTheme({
    palette: {
        slate: {
            darker: '#1b1b1b',
            dark: '#1b1b1b',
            main: '#1b1b1b',
            light: '#6d6d6d',
            lighter: '#B4B9BD',
            lightest: '#F7F7F8',
            contrastText: '#ffffff',
        },
    },
});

export default Theme
