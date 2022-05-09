import Typography from "@mui/material/Typography";
import React from "react";
import Box from "@mui/system/Box";

export default function Home() {
    return (
        <Box
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "94vh",
                paddingRight: "1rem",
                paddingLeft: "1rem"
            }}>
            <Typography>
                Feel free to add, organise, edit and sort tasks to your liking.
            </Typography>
        </Box>
    )
}