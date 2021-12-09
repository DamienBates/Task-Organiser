import { Component } from 'react';
import axios from 'axios';
import { TextField, Typography, FormControl, Grid, RadioGroup, FormLabel, FormControlLabel, Radio } from "@mui/material";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

export default class CreateTask extends Component {
    constructor(props) {
        super(props);

        this.onChangeTask = this.onChangeTask.bind(this);
        this.onChangeComment = this.onChangeComment.bind(this);
        this.onChangePriority = this.onChangePriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            task: "",
            comment: "",
            priority: "",
        };
    }


    // componentDidMount() {
    //     axios
    //         .get("http://localhost:5000/add-comment/" + this.state.id)
    //         .then((response) => {
    //             this.setState({
    //                 task: response.data.task,
    //                 comment: response.data.comment,
    //                 priority: response.data.priority,
    //             });
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }

    onChangeTask(e) {
        this.setState({
            task: e.target.value,
        });
    }

    onChangeComment(e) {
        this.setState({
            comment: e.target.value,
        });
    }

    onChangePriority(e) {
        this.setState({
            priority: e.target.value,
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const newtask = {
            task: this.state.task,
            comment: this.state.comment,
            priority: this.state.priority,
        };

        axios
            .post("http://localhost:5000/add-comment", newtask)
            .then((res) => console.log(res.data));

        this.setState({
            task: "",
            comment: "",
            priority: "",
        });
    }

    render() {
        return (
            <>
                <Typography
                    sx={{ mt: '20px', mb: '20px', fontWeight: 'bold' }}
                    variant="h6"
                >
                    Create New Comment
                </Typography>
                <FormControl onSubmit={this.onSubmit}>
                    <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
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
                                value={this.state.comment}
                                onChange={this.onChangeComment}
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
                        <Button sx={{ mt: '40px' }} variant="contained" endIcon={<SendIcon />} type='submit' onClick={this.onSubmit}>
                            Submit
                        </Button>
                    </Grid>
                </FormControl>
            </>
        );
    }
}