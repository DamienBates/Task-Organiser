import { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography"
import { TaskContext } from "../TaskContext";
import { DataGrid, GridColumns, GridActionsCellItem, GridCellEditCommitParams } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

export default function UpdateDelete() {
  const [deleting, setDeleting] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  const { apiReturn, loading, fetchTasks, edited, setEdited } = useContext(TaskContext);

  // Delete request
  async function deleteTask({ id }: CrudProps) {
    setDeleting(true);

    await axios
      .delete(`${process.env.REACT_APP_PUBLIC_URL}/delete-task/${id}`, { timeout: 5000 })
      .then(() => {
        setDeleting(false);
        fetchTasks();
      })
      .catch(() => {
        console.log("Deleting didn't work, please try again")
      })
  };

  // Post request
  async function updateTask(id: string, task: string, comments: string, priority: string) {
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
    { field: "id", headerName: "ID", width: 250, hide: true },
    { field: "taskName", headerName: "Task", width: 180, editable: true },
    { field: "commentName", headerName: "Comment", width: 200, editable: true },
    { field: "priority", headerName: "Priority", width: 100, editable: true },
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
    // Check all values !== ""
    if (Object.values(edited).every(value => value !== "")) {
      // Update the task if all non-empty
      updateTask(id, edited.task, edited.comments, edited.priority);
    }
  }), [edited])

  return (
    <Box style={{
      marginTop: "2.5rem"
    }}>
      <Box style={{
        height: "70vh",
        maxHeight: "700px",
        marginLeft: "25px",
        width: "62vw",
        maxWidth: "720px"
      }}>
        <DataGrid
          rows={parseArray(apiReturn)}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
          onCellEditCommit={(cell: GridCellEditCommitParams) => {
            setId(String(cell.id));

            for (let i = 0; i < apiReturn.length; i++) {
              // If cell ID and api fetch match, continue with the shallow copy
              if (cell.id === apiReturn[i]._id) {
                switch (cell.field) {
                  case "taskName":
                    setEdited({
                      ...edited,
                      task: cell.value,
                      comments: apiReturn[i].comments,
                      priority: apiReturn[i].priority
                    })
                    break;
                  case "commentName":
                    setEdited({
                      ...edited,
                      task: apiReturn[i].task,
                      comments: cell.value,
                      priority: apiReturn[i].priority
                    })
                    break;
                  case "priority":
                    setEdited({
                      ...edited,
                      task: apiReturn[i].task,
                      comments: apiReturn[i].comments,
                      priority: cell.value
                    })
                    break;
                  default: "None matches that name"
                }
              }
            }

          }}
          loading={loading}
          components={{
            // Change the overlay if no tasks are found, as per Mui docs:
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

type CrudProps = {
  id: Object;
}

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
      ({ id: el._id, taskName: el.task, commentName: el.comments, priority: el.priority })))
};