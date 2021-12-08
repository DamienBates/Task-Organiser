import { Component } from 'react';
import axios from 'axios';
import { TextField, Typography, FormControl, Grid, RadioGroup, FormLabel, FormControlLabel, Radio } from "@mui/material";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

export default class CreateNewRecord extends Component {
    constructor(props) {
        super(props);

        this.onChangeHandle = this.onChangeHandle.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            handle: "",
            content: "",
            date: "",
        };
    }

    onChangeHandle(e) {
        this.setState({
            handle: e.target.value,
        });
    }

    onChangeContent(e) {
        this.setState({
            content: e.target.value,
        });
    }

    onChangeDate(e) {
        this.setState({
            date: e.target.value,
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const newperson = {
            handle: this.state.handle,
            content: this.state.content,
            date: this.state.date,
        };

        axios
            .post("http://localhost:5000/add-comment", newperson)
            .then((res) => console.log(res.data));

        this.setState({
            person_name: "",
            person_position: "",
            person_level: "",
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
                                value={this.state.handle}
                                onChange={this.onChangeHandle}
                            >
                            </TextField>
                        </Grid>
                        <Grid item sx={{ mt: '20px' }}>
                            <TextField
                                id="outlined-basic"
                                label="Comments"
                                variant="filled"
                                color='secondary'
                                value={this.state.content}
                                onChange={this.onChangeContent}
                            >
                            </TextField>
                        </Grid>
                        <Grid item sx={{ mt: '40px' }}>
                            <FormLabel component="legend" color='secondary' sx={{ mb: '8px' }}>Priority:</FormLabel>
                            <RadioGroup
                                aria-label="Experience"
                                value={this.state.date}
                                onChange={this.onChangeDate}
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