import { Typography } from "@mui/material"
import { Box } from "@mui/system"

export default function Home() {
    return (
        <Box
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "95vh",
            }}>
            <Typography>
                Feel free to add, organise, edit and sort tasks to your liking.
            </Typography>
        </Box>
    )
}