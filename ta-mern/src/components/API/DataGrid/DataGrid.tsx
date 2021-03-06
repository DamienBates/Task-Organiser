import { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography"
import { TaskContext } from "../../../TaskContext";
import { DataGrid, GridColumns, GridActionsCellItem, GridCellEditCommitParams } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

export default function UpdateDelete() {
  const [deleting, setDeleting] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  const {
    todo,
    setTodo,
    apiReturn,
    loading,
    fetchTasks } = useContext(TaskContext);

  // Delete
  async function deleteTask({ id }: CrudProps) {
    setDeleting(true);

    await axios
      .delete(`${process.env.REACT_APP_PUBLIC_URL}`, { data: { id: `${id}` }, timeout: 5000 })
      .then(() => {
        fetchTasks();
        setDeleting(false);
      })
      .catch(() => {
        console.log("Deleting didn't work, please try again")
        setDeleting(false);
      })
  };

  // Update
  async function updateTask(id: string, task: string, comments: string, priority: string) {
    await axios
      .patch(`${process.env.REACT_APP_PUBLIC_URL}`,
        {
          data: {
            id: `${id}`,
            task: `${task}`,
            comments: `${comments}`,
            priority: `${priority}`
          },
          timeout: 5000
        })
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
        deleting === false ?
          <GridActionsCellItem
            icon={<DeleteIcon />}
            type="button"
            label="Delete"
            disabled={false}
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
    if (id !== "" && todo.task !== "" && todo.comments !== "" && todo.priority !== "") {
      updateTask(id, todo.task, todo.comments, todo.priority);
    }
  }), [todo])

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
          rows={
            apiReturn?.map((el: MapProps) =>
              ({ id: el._id, taskName: el.task, commentName: el.comments, priority: el.priority })
            )}
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
                    setTodo({
                      ...todo,
                      task: cell.value,
                      comments: apiReturn[i].comments,
                      priority: apiReturn[i].priority
                    })
                    break;
                  case "commentName":
                    setTodo({
                      ...todo,
                      task: apiReturn[i].task,
                      comments: cell.value,
                      priority: apiReturn[i].priority
                    })
                    break;
                  case "priority":
                    setTodo({
                      ...todo,
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
                  <Typography>No tasks found, feel free to add some!</Typography>
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