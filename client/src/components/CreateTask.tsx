import { useState } from 'react'
import { TextField, Typography, FormControl, Grid, RadioGroup, FormLabel, FormControlLabel, Radio } from '@mui/material'
import { Button } from '@mui/material'
import axios from 'axios'
import SendIcon from '@mui/icons-material/Send'

export default function CreateTaskFunc() {
    const [task, taskSetter] = useState<{} | string>({ task: '' })
    const [comments, commentsSetter] = useState<{} | string>({ comments: '' })
    const [priority, prioritySetter] = useState<{} | string>({ priority: '' })

    const handleTasksChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        taskSetter(e.target.value)
    };

    const handleCommentsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        commentsSetter(e.target.value)
    };

    const handlePriorityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        prioritySetter(e.target.value)
    };

    const onSubmit = () => {
        const newTask = { task, comments, priority };
        axios
            .post('http://localhost:5000/add-task', newTask)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => { console.error(error) })
        alert('Added to Task List!')
    }

    return (
        <form onSubmit={onSubmit}>
            <Grid container justifyContent='center'>
                <FormControl>
                    <Typography
                        sx={{ mt: '2vh', mb: '3vh', fontWeight: 'bold' }}
                        variant='h6'
                    >
                        Create New Task
                    </Typography>
                    <Grid>
                        <Grid item>
                            <TextField
                                required
                                id='outlined-basic'
                                label='Task'
                                variant='filled'
                                color='secondary'
                                onChange={handleTasksChange}
                            >
                            </TextField>
                        </Grid>
                        <Grid item sx={{ mt: '20px' }}>
                            <TextField
                                required
                                id='outlined-basic'
                                label='Comments'
                                variant='filled'
                                color='secondary'
                                onChange={handleCommentsChange}
                            >
                            </TextField>
                        </Grid>
                        <Grid item sx={{ mt: '40px' }}>
                            <FormLabel component='legend' color='secondary' sx={{ mb: '8px' }}>Priority:</FormLabel>
                            <RadioGroup
                                aria-label='Experience'
                                onChange={handlePriorityChange}

                            >
                                <FormControlLabel value='Low' control={<Radio />} label='Low' />
                                <FormControlLabel value='Medium' control={<Radio />} label='Medium' />
                                <FormControlLabel value='High' control={<Radio />} label='High' />
                            </RadioGroup>
                        </Grid>
                        <Button sx={{ mt: '40px' }} variant='contained' endIcon={<SendIcon />} type='submit' >
                            Submit
                        </Button>
                    </Grid>
                </FormControl>
            </Grid>
        </form>
    );
}