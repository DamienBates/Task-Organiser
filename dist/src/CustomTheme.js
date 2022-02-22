"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("@material-ui/core/styles");
const CustomTheme = (0, styles_1.createTheme)({
    palette: {
        type: 'dark',
        primary: {
            light: '#fff',
            main: '#802020',
            dark: '#002884',
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
exports.default = CustomTheme;
