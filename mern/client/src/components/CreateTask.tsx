import { ChangeEvent, Component } from 'react';
import axios from 'axios'
import { TextField, Typography, FormControl, Grid, RadioGroup, FormLabel, FormControlLabel, Radio } from "@mui/material";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';


interface MyProps { }
interface MyState {
    task: string,
    comments: string,
    priority: string
}

export default class CreateTask extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);

        this.onChangeTask = this.onChangeTask.bind(this);
        this.onChangeComments = this.onChangeComments.bind(this);
        this.onChangePriority = this.onChangePriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            task: "",
            comments: "",
            priority: "",
        };
    }

    onChangeTask(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            task: e.target.value,
        });
    }

    onChangeComments(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            comments: e.target.value,
        });
    }

    onChangePriority(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            priority: e.target.value,
        });
    }

    onSubmit(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault();

        const newtask = {
            task: this.state.task,
            comments: this.state.comments,
            priority: this.state.priority,
        };

        axios
            .post("http://localhost:5000/add-task", newtask)
            .then((response) => console.log(response.data));

        this.setState({
            task: "",
            comments: "",
            priority: "",
        })
    }

    render() {
        return (
            <>
                <Grid container justifyContent='center'>
                    <FormControl onSubmit={this.onSubmit}>
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
                                    value={this.state.task}
                                    onChange={this.onChangeTask}
                                >
                                </TextField>
                            </Grid>
                            <Grid item sx={{ mt: '20px' }}>
                                <TextField
                                    id="outlined-basic"
                                    label="Comments"
                                    variant="filled"
                                    color='secondary'
                                    value={this.state.comments}
                                    onChange={this.onChangeComments}
                                >
                                </TextField>
                            </Grid>
                            <Grid item sx={{ mt: '40px' }}>
                                <FormLabel component="legend" color='secondary' sx={{ mb: '8px' }}>Priority:</FormLabel>
                                <RadioGroup
                                    aria-label="Experience"
                                    value={this.state.priority}
                                    onChange={this.onChangePriority}
                                >
                                    <FormControlLabel value='Low' control={<Radio />} label="Low" />
                                    <FormControlLabel value='Medium' control={<Radio />} label="Medium" />
                                    <FormControlLabel value='High' control={<Radio />} label="High" />
                                </RadioGroup>
                            </Grid>
                            <Button sx={{ mt: '40px' }} variant="contained" endIcon={<SendIcon />} type='submit' onClick={() => this.onSubmit}>
                                Submit
                            </Button>
                        </Grid>
                    </FormControl>
                </Grid>
            </>
        );
    }
}