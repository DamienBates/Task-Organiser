import { Box, Typography } from '@material-ui/core'

export const Home = () => {
    return (
        <Box>
            <Typography paragraph>
                Create your task using the "Create Task" button at the top right. Indicate urgency
                and then select 'Task List' to see your required tasks.
            </Typography>
        </Box>
    )
}

export default Home