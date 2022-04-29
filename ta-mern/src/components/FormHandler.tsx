import { ChangeEvent, useContext, useState } from "react";
import { TextField, Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Grid, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { TaskContext } from "../TaskContext";
import SendIcon from "@mui/icons-material/Send";
import TaskList from "./UpdateDelete";
import axios from "axios"

export default function FormHandler() {
    // Local
    const [loading, setLoading] = useState<boolean>(false); // Local Loading to prevent TaskList spinner

    // Global
    const { todo, setTodo, fetchTasks } = useContext(TaskContext);


    // OnSubmit retrieval of tasks on Mongo database
    async function onSubmit(e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        try {
            await axios
                .post(`${process.env.REACT_APP_PUBLIC_URL}/add-task`, todo)
                .then(() => {
                    setLoading(false);
                })
                .then(() => {
                    fetchTasks();
                    e.target.reset();
                    setTodo({
                        ...todo,
                        task: "",
                        comments: "",
                        priority: "_"
                    })
                })
        } catch (error) {
            console.log("Something went wrong retrieving tasks")
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <Grid container
                display="inline-flex"
                padding="2vh 4vw 1.5vw 0"
            >
                <Grid item pb="10px" ml="25px">
                    <TextField
                        required
                        label="What needs to be done?"
                        variant="standard"
                        color="secondary"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            return setTodo({ ...todo, task: e.target.value })
                        }}
                    />
                </Grid>
                <Grid item pb="10px" ml="25px">
                    <TextField
                        required
                        label="Any notes?"
                        variant="standard"
                        color="secondary"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            return setTodo({ ...todo, comments: e.target.value })
                        }}
                    />
                </Grid>
                <Grid item pb="10px" ml="25px">
                    <FormControl variant="standard" sx={{ minWidth: 150 }}>
                        <InputLabel>
                            How urgent?
                        </InputLabel>
                        <Select
                            label="Priority"
                            value={todo.priority}
                            onChange={(e: SelectChangeEvent<string>) => {
                                return setTodo({ ...todo, priority: e.target.value })
                            }}>
                            <MenuItem value="Low">Not very</MenuItem>
                            <MenuItem value="Medium">So so</MenuItem>
                            <MenuItem value="High" >Extremely</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    {loading ? // If loading === true, prevent submission and display loading spinner
                        <LoadingButton
                            loading
                            disabled
                            loadingPosition="end"
                            endIcon={<SendIcon />}
                            variant="contained"
                            sx={{ mt: "15px", ml: "25px" }}
                        >
                            Add
                        </LoadingButton>
                        :
                        <Button
                            sx={{ mt: "15px", ml: "25px" }}
                            variant="outlined"
                            type="submit"
                        >
                            Add
                        </Button>
                    }
                </Grid>
            </Grid>
            <Box>
                <TaskList />
                <Typography fontSize={"10px"} pl="20px" pb="5px"
                    style={{ opacity: "0.8" }}>
                    Note: Cells can be edited.
                </Typography>
            </Box>
        </form >
    )
};