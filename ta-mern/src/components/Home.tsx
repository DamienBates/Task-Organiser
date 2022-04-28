import { Typography } from "@mui/material"
import { Box } from "@mui/system"

export default function Home() {
    return (
        <Box style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "93vh"
        }}>
            <Typography style={{ paddingBottom: '45px' }}>
                Welcome to my task organiser, I hope you enjoy your stay.
            </Typography>
            <Typography>
                Feel free to add, organise, edit and sort tasks to your liking.
            </Typography>
        </Box>
    )
}