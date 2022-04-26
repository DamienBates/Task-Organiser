import { ChangeEvent, useContext, useState } from "react";
import { TextField, Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { TaskContext } from "../TaskContext";
import SendIcon from "@mui/icons-material/Send";
import TaskList from "./TaskList";
import axios from "axios"

export default function CreateTask() {
    const [loading, setLoading] = useState<boolean>(false);
    const [todo, setTodo] = useState<{ task: string, comments: string, priority: string }>({
        task: '',
        comments: '',
        priority: ''
    })

    const { setSubmitted } = useContext(TaskContext);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        try {
            await axios
                .post(`${process.env.REACT_APP_PUBLIC_URL}/add-task`, todo)
                .then(() => {
                    setLoading(false);
                    setSubmitted(true);
                })
                .then(() => {
                    setSubmitted(false);
                })
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <Box
                display="inline-flex"
                justifyContent="center"
                padding="0.8rem">
                <TextField
                    id="input-with-sx"
                    label="Task"
                    variant="standard"
                    required
                    color="secondary"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        return setTodo({ ...todo, task: e.target.value })
                    }}
                />
                <TextField
                    required
                    label="Comments"
                    variant="standard"
                    color="secondary"
                    style={{
                        marginLeft: "20px"
                    }}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        return setTodo({ ...todo, comments: e.target.value })
                    }}
                />
                <FormControl variant="standard" sx={{ ml: "20px", minWidth: 120 }}>
                    <InputLabel>
                        Priority
                    </InputLabel>
                    <Select
                        id="demo-simple-select-standard"
                        label="Priority"
                        value={todo.priority}
                        onChange={(e: SelectChangeEvent<string>) => {
                            return setTodo({ ...todo, priority: e.target.value })
                        }}
                    >
                        <MenuItem value="Low" style={{ color: "#109e03" }}>Low</MenuItem>
                        <MenuItem value="Medium" style={{ color: "#de7607" }}>Medium</MenuItem>
                        <MenuItem value="High" style={{ color: "#c70808" }}>High</MenuItem>
                    </Select>
                </FormControl>
                {loading ? // ternary operator prevents multiple submits
                    <LoadingButton
                        sx={{ mt: "15px", ml: "20px" }}
                        loading
                        loadingPosition="end"
                        endIcon={<SendIcon />}
                        variant="contained"
                        disabled
                    >
                        Add
                    </LoadingButton>
                    :
                    <Button
                        sx={{ mt: "15px", ml: "20px" }}
                        variant="outlined"
                        type="submit"
                    >
                        Add
                    </Button>
                }
            </Box>
            <TaskList />
        </form>
    )
};