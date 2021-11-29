import React from 'react'
import { Box, Typography } from '@material-ui/core'


export const Home = () => {
    return (
        <Box sx={{
            width: 'auto'
        }}>
            <Typography paragraph>
                Hello, you are on the homepage
            </Typography>
        </Box>
    )
}

export default Home