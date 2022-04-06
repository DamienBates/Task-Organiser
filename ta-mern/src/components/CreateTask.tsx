import { useState } from 'react'
import { TextField, FormControl, RadioGroup, FormLabel, FormControlLabel } from '@mui/material'
import { Button, Typography, Grid, Radio } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import axios from 'axios'
import SendIcon from '@mui/icons-material/Send'

export default function CreateTaskFunc() {
    const [task, setTask] = useState<{} | string>({ task: '' })
    const [comments, setComments] = useState<{} | string>({ comments: '' })
    const [priority, setPriority] = useState<{} | string>({ priority: '' })
    const [submitted, setSubmitted] = useState<boolean>(false)

    function handleTasksChange(e: React.ChangeEvent<HTMLInputElement>) {
        setTask(e.target.value)
    };

    function handleCommentsChange(e: React.ChangeEvent<HTMLInputElement>) {
        setComments(e.target.value)
    };

    function handlePriorityChange(e: React.ChangeEvent<HTMLInputElement>) {
        setPriority(e.target.value)
    };

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setSubmitted(true) // Disables button to prevent multiple submissions

        const payload = { task, comments, priority }

        try {
            await axios
                .post(`${process.env.REACT_APP_PUBLIC_URL}/add-task`, payload)
                .then(() => { alert('Added to Task List!') })
                .then(() => { location.reload() })
        } catch (error) {
            console.error(error)
        }

    };

    return (
        <form onSubmit={onSubmit}>
            <Grid container justifyContent='center' padding='0.8rem'>
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
                        {submitted ? // ternary operator to replace button with LoadingButton onSubmit (preventing multiple submits)
                            <LoadingButton
                                loading
                                loadingPosition="end"
                                variant='contained'
                                sx={{
                                    mt: '40px',
                                    pl: '1rem',
                                    pr: '2.5rem'
                                }}
                                disabled
                            >
                                Saving
                            </LoadingButton>
                            :
                            <Button sx={{ mt: '40px' }} variant='contained' endIcon={<SendIcon />} type='submit'>
                                Submit
                            </Button>
                        }
                    </Grid>
                </FormControl>
            </Grid>
        </form>
    )
};