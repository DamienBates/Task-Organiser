import { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { TextField, Typography, FormControl, Grid, RadioGroup, FormLabel, FormControlLabel, Radio } from "@mui/material";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

export default class CreateNewRecord extends Component<{}, any> {
    // This is the constructor that stores the data.
    constructor(props: { value: any; }) {
        super(props);

        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangePersonPosition = this.onChangePersonPosition.bind(this);
        this.onChangePersonLevel = this.onChangePersonLevel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            person_name: "",
            person_position: "",
            person_level: "",
        };
    }

    // These methods will update the state properties.
    onChangePersonName(e: { target: { value: any; }; }) {
        this.setState({
            person_name: e.target.value,
        });
    }

    onChangePersonPosition(e: { target: { value: any; }; }) {
        this.setState({
            person_position: e.target.value,
        });
    }

    onChangePersonLevel(e: { target: { value: any; }; }) {
        this.setState({
            person_level: e.target.value,
        });
    }

    // This function will handle the submission.
    onSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();

        // When post request is sent to the create url, axios will add a new record(newperson) to the database.
        const newperson = {
            person_name: this.state.person_name,
            person_position: this.state.person_position,
            person_level: this.state.person_level,
        };

        axios
            .post("http://localhost:5000/record/add", newperson)
            .then((res) => console.log(res.data));

        // We will empty the state after posting the data to the database
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
                    Create New User
                </Typography>
                <FormControl onSubmit={this.onSubmit}>
                    <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Grid item>
                            <TextField
                                id="outlined-basic"
                                label="Name"
                                variant="filled"
                                color='secondary'
                                value={this.state.person_name}
                                onChange={this.onChangePersonName}
                            >
                            </TextField>
                        </Grid>
                        <Grid item sx={{ mt: '20px' }}>
                            <TextField
                                id="outlined-basic"
                                label="Position"
                                variant="filled"
                                color='secondary'
                                value={this.state.person_position}
                                onChange={this.onChangePersonPosition}
                            >
                            </TextField>
                        </Grid>
                        <Grid item sx={{ mt: '30px' }}>
                            <FormLabel component="legend" color='secondary' sx={{ mb: '8px' }}>Experience Level:</FormLabel>
                            <RadioGroup
                                aria-label="Experience"
                                value={this.state.person_level}
                                onChange={this.onChangePersonLevel}
                            >
                                <FormControlLabel value='Intern' control={<Radio />} label="Intern" />
                                <FormControlLabel value='Junior' control={<Radio />} label="Junior" />
                                <FormControlLabel value='Senior' control={<Radio />} label="Senior" />
                            </RadioGroup>
                        </Grid>
                        <Button sx={{ mt: '20px' }} variant="contained" endIcon={<SendIcon />} type='submit' onSubmit={this.onSubmit}>
                            Submit
                        </Button>
                    </Grid>
                </FormControl>
            </>
        );
    }
}