import { ChangeEvent, useContext, useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { TaskContext } from "../../../TaskContext";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button"
import LoadingButton from "@mui/lab/LoadingButton"
import UpdateDelete from "../DataGrid/DataGrid";
import axios from "axios"

export default function FormHandler() {
    // Local
    const [loading, setLoading] = useState<boolean>(false); // Local Loading to prevent TaskList spinner

    // Global
    const { todo, setTodo, fetchTasks } = useContext(TaskContext);

    async function onSubmit(e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        try {
            await axios
                .post(`${process.env.REACT_APP_PUBLIC_URL}`, todo)
                .then(() => {
                    setLoading(false);
                })
                .then(() => {
                    fetchTasks();
                    e.target.reset();
                })
        } catch (error) {
            console.log("Something went wrong retrieving tasks")
        }
    };

    return (
        <section style={{
            display: "flex",
            justifyContent: "center"
        }}>
            <form onSubmit={onSubmit}>
                <Grid
                    container
                    display="inline-flex"
                    paddingTop="2rem"
                    paddingLeft="10px"
                >
                    <Grid item ml="20px" pt="15px">
                        <TextField
                            label="What needs to be done?"
                            variant="standard"
                            color="secondary"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                return setTodo({ ...todo, task: e.target.value })
                            }}
                        />
                    </Grid>
                    <Grid item ml="20px" pt="15px">
                        <TextField
                            label="Any notes?"
                            variant="standard"
                            color="secondary"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                return setTodo({ ...todo, comments: e.target.value })
                            }}
                        />
                    </Grid>
                    <Grid item ml="20px" pt="15px">
                        <FormControl variant="standard" sx={{ minWidth: 195 }}>
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
                                variant="contained"
                                sx={{ mt: "28px", ml: "25px" }}
                            >
                                Add
                            </LoadingButton>
                            :
                            <Button
                                disabled={Object.values(todo).every(value => value !== "") ? false : true}
                                variant="outlined"
                                type="submit"
                                sx={{ mt: "28px", ml: "25px" }}
                            >
                                Add
                            </Button>
                        }
                    </Grid>
                </Grid>
                <Box>
                    <UpdateDelete />
                    <Typography
                        fontSize={"10px"}
                        padding={"10px 0 5px 30px"}
                        style={{ opacity: "0.8" }}>
                        Note: Cells can be edited.
                    </Typography>
                </Box>
            </form >
        </section>
    )
};