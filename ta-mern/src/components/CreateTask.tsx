import { ChangeEvent, useState } from 'react'
import { TextField, FormControl, RadioGroup, FormLabel, FormControlLabel, Box } from '@mui/material'
import { Button, Typography, Grid, Radio } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import axios from 'axios'
import SendIcon from '@mui/icons-material/Send'

export default function CreateTaskFunc() {
    const [task, setTask] = useState<{} | string>({ task: '' })
    const [comments, setComments] = useState<{} | string>({ comments: '' })
    const [priority, setPriority] = useState<{} | string>({ priority: '' })
    const [submitted, setSubmitted] = useState<boolean>(false)

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setSubmitted(true) // Disables button to prevent multiple submissions

        const payload = { task, comments, priority }

        try {
            await axios
                .post(`${process.env.REACT_APP_PUBLIC_URL}/add-task`, payload)
                .then(() => {
                    alert('Added to Task List!')
                })
                .then(() => {
                    setSubmitted(false)
                    location.reload()
                })
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <Grid container justifyContent='center' padding='0.8rem'>
                <FormControl>
                    <Grid paddingTop="2rem">
                        <Box>
                            <Grid item>
                                <TextField
                                    required
                                    id='outlined-basic'
                                    label='Task'
                                    variant='filled'
                                    color='secondary'
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                        return setTask(e.target.value)
                                    }}
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
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                        return setComments(e.target.value)
                                    }}
                                >
                                </TextField>
                            </Grid>
                        </Box>
                        <Box>
                            <Grid item sx={{ mt: '40px' }}>
                                <FormLabel component='legend' color='secondary' sx={{ mb: '8px' }}>Priority:</FormLabel>
                                <RadioGroup
                                    aria-required={true}
                                    aria-label='Experience'
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                        return setPriority(e.target.value)
                                    }}

                                >
                                    <FormControlLabel value='Low' control={<Radio />} label='Low' />
                                    <FormControlLabel value='Medium' control={<Radio />} label='Medium' />
                                    <FormControlLabel value='High' control={<Radio />} label='High' />
                                </RadioGroup>
                            </Grid>
                        </Box>
                        {submitted ? // ternary operator prevents multiple submits
                            <LoadingButton
                                sx={{ mt: '20px' }}
                                loading
                                loadingPosition="end"
                                endIcon={<SendIcon />}
                                variant='contained'
                                disabled
                            >
                                Saving
                            </LoadingButton>
                            :
                            <Button
                                sx={{ mt: '20px' }}
                                variant='contained'
                                endIcon={<SendIcon />}
                                type='submit'
                            >
                                Submit
                            </Button>
                        }
                    </Grid>
                </FormControl>
            </Grid>
        </form>
    )
};