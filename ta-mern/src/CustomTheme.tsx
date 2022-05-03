import { createTheme } from "@mui/material";

const CustomTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            light: "#fff",
            main: "#fff", // Initial button colour
            dark: "#fff", // onHover
            contrastText: "#fff",
        },
        secondary: {
            light: "#ff7961",
            main: "#fff",
            dark: "#000",
            contrastText: "#000",
        },
    },
});

export default CustomTheme
