import { useContext, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { TaskContext } from "../TaskContext";
import { GridColumns, DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { GridColumns, DataGrid, GridActionsCellItem, GridCellEditCommitParams } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import LoadingButton from "@mui/lab/LoadingButton";

export default function ReadTask() {
export default function UpdateDelete() {
  // Local
  const [deleting, setDeleting] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  // Global
  const { apiReturn, loading, fetchTasks, edited, setEdited } = useContext(TaskContext);

  // CRUD (Edit, Delete) Operations:
  type CrudProps = {
    id: Object;
  }

  // Destructure Mongo ObjectID into URL and delete
  async function deleteTask({ id }: CrudProps) {
    setDeleting(true);

    await axios
      .delete(`${process.env.REACT_APP_PUBLIC_URL}/delete-task/${id}`, { timeout: 5000 })
      .then(() => {
        setDeleting(false);
      })
      .then(() => {
        fetchTasks();
      })
      .catch(() => {
        console.log("Deleting didn't work, please try again")
      })
  };

  async function updateTask(id: string, task: string, comments: string, priority: string) {
    // Fetch on submission, which will update with POST request
    await axios
      .post(`${process.env.REACT_APP_PUBLIC_URL}/edit-task/${id}/${task}/${comments}/${priority}`,
        { timeout: 5000 })
      .then(() => {
        fetchTasks();
      })
      .catch(() => {
        console.log("Couldn't update task, please try again!")
      })
  }

  const columns: GridColumns = [
    { field: "id", headerName: "ID", width: 5, hide: true },
    { field: "taskName", headerName: "Task", width: 220, editable: true },
    { field: "commentName", headerName: "Comment", width: 220, editable: true },
    { field: "priority", headerName: "Priority", width: 150, editable: true },
    { field: "priority", headerName: "Priority", width: 120, editable: true },
    {
      field: "actions", type: "actions", headerName: "Actions", width: 100,
      getActions: (userID) => [
        loading === deleting ?
          <GridActionsCellItem
            icon={<DeleteIcon />}
            type="button"
            label="Delete"
            disabled={deleting === false ? false : true}
            onClick={() => deleteTask(userID)}
          />
          :
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            disabled
          />
      ]
    },
  ];

  useEffect((() => {
    (function (next) {
      // Check edited tasks on client, and if ready, submit to server
      if (edited.task !== "", edited.comments !== "", edited.priority !== "") {
        updateTask(id, edited.task, edited.comments, edited.priority)
      } next();
    // Check all values !== ""
    if (Object.values(edited).every(value => value !== "")) {
      // Update the task if all non-empty
      updateTask(id, edited.task, edited.comments, edited.priority);
    }
      // Once submitted, update task list
      (function () {
        fetchTasks();
      }))
  }), [edited])

  return (
    <Box>
      <Box style={{
        height: 500,
        maxWidth: "70vw",
        padding: "0.2rem 30px 8px 20px",
        padding: "20px 10px 8px 20px",
        display: "flex",
        justifyContent: "center"
      }}>
        <DataGrid
          rows={parseArray(apiReturn)}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
          onCellEditCommit={(returned: any) => {
            setId(returned.id);

            const taskEdit = apiReturn[0].task
            const commentEdit = apiReturn[0].comments
            const priorityEdit = apiReturn[0].priority

            switch (returned.field) {
              case 'taskName':
                setEdited({
                  ...edited,
                  task: returned.value,
                  comments: commentEdit,
                  priority: priorityEdit
                })
                break;
              case 'commentName':
                setEdited({
                  ...edited,
                  task: taskEdit,
                  comments: returned.value,
                  priority: priorityEdit
                })
                break;
              case 'priority':
                setEdited({
                  ...edited,
                  task: taskEdit,
                  comments: commentEdit,
                  priority: returned.value
                })
                break;
              default: "None matches that name"
            }
          }}
          loading={loading}
          components={{
            // Change the text if no tasks are found, as per Mui docs:
            NoRowsOverlay: () => {
              return (
                <Box style={{
                  display: "grid",
                  justifyContent: "center",
                  alignContent: "center",
                  height: "100%",
                  opacity: "0.8",
                  padding: "1rem"
                }}>
                  <Typography>Sorry! No tasks found 😔</Typography>
                </Box>
              )
            }
          }}
        />
      </Box>
    </Box>
  )
};

interface TaskProps {
  task: string,
  comments: string,
  priority: string,
};

interface MapProps extends TaskProps {
  _id: number,
  el: string,
  id: number,
  taskName: string,
  commentName: string,
};

function parseArray(arr: []) {
  return (
    arr.map((el: MapProps) =>
      ({ id: el._id, taskName: el.task, commentName: el.comments, priority: el.priority })
    ))
};