import { Box, Typography } from '@material-ui/core'

export const Home = () => {
    return (
        <Box>
            <Typography paragraph style={{ paddingLeft: '1rem', paddingTop: '0.8rem' }}>
                Create your task using the 'Create Task' button at the top right. Indicate urgency
                and then select 'Task List' to see your tasks.
            </Typography>
        </Box>
    )
}

export default Home