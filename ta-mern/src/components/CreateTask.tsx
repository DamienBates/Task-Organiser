import { useState } from 'react'
import { TextField, Typography, FormControl, Grid, RadioGroup, FormLabel, FormControlLabel, Radio } from '@mui/material'
import { Button } from '@mui/material'
import axios from 'axios'
import SendIcon from '@mui/icons-material/Send'

export default function CreateTaskFunc() {
    const [task, setTask] = useState<{} | string>({ task: '' })
    const [comments, setComments] = useState<{} | string>({ comments: '' })
    const [priority, setPriority] = useState<{} | string>({ priority: '' })

    const handleTasksChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value)
    };

    const handleCommentsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComments(e.target.value)
    };

    const handlePriorityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPriority(e.target.value)
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        const newTask = { task, comments, priority };
        e.preventDefault();
        try {
            await axios
                .post(`${process.env.REACT_APP_PUBLIC_URL}/add-task`, newTask)
        } catch (error) {
            console.error(error)
        }

        alert('Added to Task List!');

        location.reload();
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