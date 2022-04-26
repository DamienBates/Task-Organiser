import { Typography } from "@mui/material"
import { Box } from "@mui/system"

export default function Home() {
    return (
        <Box style={{
            display: "flex",
            alignItems: "center",
        }}>
            <Typography
                paragraph
                style={{
                    padding: "1rem"
                }}
            >
                Welcome to my task organiser, hope you enjoy your stay.
            </Typography>
        </Box>
    )
}