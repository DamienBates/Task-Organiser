import { Box, Typography } from '@material-ui/core'

export default function Home() {
    return (
        <Box>
            <Typography paragraph style={{ padding: '1rem' }}>
                Create your task using the 'Create Task' button at the top right. Indicate urgency
                and then select 'Task List' to see your tasks.
            </Typography>
        </Box>
    )
}