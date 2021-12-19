import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { TextField, Typography, FormControl, Grid, RadioGroup, FormLabel, FormControlLabel, Radio } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { Button } from "@mui/material";

// interface MyProps { }
// interface MyState {
//     id: string,
//     task: string,
//     comments: string,
//     priority: string
// }

export default function CreateTaskFunc() {
    const [task, tasksSetter] = useState({ task: '' })
    const [comments, commentsSetter] = useState({ comments: '' })
    const [priority, prioritySetter] = useState({ priority: '' })
    const { register, handleSubmit, reset } = useForm();

    const handleTasksChange = (e: any) => {
        tasksSetter(e.target.value)
    }

    const handleCommentsChange = (e: any) => {
        commentsSetter(e.target.value)
    }

    const handlePriorityChange = (e: any) => {
        prioritySetter(e.target.value)
    }


    const onSubmit = (e: any) => {
        e.preventDefault();
        const payload = { task, comments, priority };

        if (payload) {
            axios
                .post('http://localhost:5000/add-task', payload)
                .then((response) => {
                    console.log(response.data)
                })
                .catch((error) => { console.log(error) })
        }
        else {
            console.log('No task information added, sorry!')
        }

    }




    return (
        <>
            <Grid container justifyContent='center'>
                <FormControl onSubmit={onSubmit}>
                    <Typography
                        sx={{ mt: '4vh', mb: '3vh', fontWeight: 'bold' }}
                        variant="h6"
                    >
                        Create New Comment
                    </Typography>
                    <Grid>
                        <Grid item>
                            <TextField
                                id="outlined-basic"
                                label="Task"
                                variant="filled"
                                color='secondary'
                                defaultValue=''
                                onChange={handleTasksChange}
                            >
                            </TextField>
                        </Grid>
                        <Grid item sx={{ mt: '20px' }}>
                            <TextField
                                id="outlined-basic"
                                label="Comments"
                                variant="filled"
                                color='secondary'
                                onChange={handleCommentsChange}
                            >
                            </TextField>
                        </Grid>
                        <Grid item sx={{ mt: '40px' }}>
                            <FormLabel component="legend" color='secondary' sx={{ mb: '8px' }}>Priority:</FormLabel>
                            <RadioGroup
                                aria-label="Experience"
                                onChange={handlePriorityChange}
                            >
                                <FormControlLabel value='Low' control={<Radio />} label="Low" />
                                <FormControlLabel value='Medium' control={<Radio />} label="Medium" />
                                <FormControlLabel value='High' control={<Radio />} label="High" />
                            </RadioGroup>
                        </Grid>
                        <Button sx={{ mt: '40px' }} variant="contained" endIcon={<SendIcon />} type='submit' onClick={onSubmit}>
                            Submit
                        </Button>
                    </Grid>
                </FormControl>
            </Grid>
        </>
    );
}