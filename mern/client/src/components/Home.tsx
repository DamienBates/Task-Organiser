import { Box, Typography } from '@material-ui/core'

export const Home = () => {
    return (
        <Box>
            <Typography paragraph>
                Create your task using the "Create Task" button at the top right. Indicate urgency
                and it'll sort with highest priority being at the top.
            </Typography>
        </Box>
    )
}

export default Home