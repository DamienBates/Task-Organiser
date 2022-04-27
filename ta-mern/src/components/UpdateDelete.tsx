import { useContext, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { TaskContext } from "../TaskContext";
import { GridColumns, DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

export default function ReadTask() {
  const [id, setId] = useState<string>("")
  const { apiReturn, loading, fetchTasks, edited, setEdited } = useContext(TaskContext);

  // CRUD (Edit, Delete) Operations:
  type CrudProps = {
    id: Object;
  }

  // Destructure Mongo ObjectID into URL and delete
  async function deleteTask({ id }: CrudProps) {
    await axios
      .delete(`${process.env.REACT_APP_PUBLIC_URL}/delete-task/${id}`, { timeout: 5000 })
      .then(() => {
        fetchTasks();
      })
      .catch((error) => {
        console.log("Deleting didn't work, please try again")
      })
  };

  async function updateTask(id: string, task: string, comments: string, priority: string) {
    await axios
      .post(`${process.env.REACT_APP_PUBLIC_URL}/edit-task/${id}/${task}/${comments}/${priority}`, { timeout: 5000 })
      .then(() => {
        fetchTasks();
      })
      .catch((error) => {
        console.log("Couldn't update task, please try again!")
      })
  }

  useEffect((() => {
    // Post when all fields are filled
    if (edited.task !== "" && edited.comments && "" || edited.priority !== "") {
      updateTask(id, edited.task, edited.comments, edited.priority)
      fetchTasks();
    }
  }), [edited]);

  const columns: GridColumns = [
    { field: "id", headerName: "ID", width: 5, hide: true },
    { field: "taskName", headerName: "Task", width: 220, editable: true },
    { field: "commentName", headerName: "Comment", width: 220, editable: true },
    { field: "priority", headerName: "Priority", width: 150, editable: true },
    {
      field: "actions", type: "actions", headerName: "Actions", width: 100,
      getActions: (userID) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          type="button"
          label="Delete"
          disabled={loading === false ? false : true}
          onClick={() => deleteTask(userID)}
        />
      ]
    },
  ];

  return (
    <Box>
      <Box style={{
        height: 500,
        maxWidth: "70vw",
        padding: "0.2rem 30px 8px 20px",
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

            switch (returned.field) {
              case 'taskName':
                setEdited({
                  ...edited,
                  task: returned.value,
                  comments: returned.row.commentName,
                  priority: returned.row.priority
                })
                break;
              case 'commentName':
                setEdited({
                  ...edited,
                  task: returned.row.taskName,
                  comments: returned.value,
                  priority: returned.row.priority
                })
                break;
              case 'priority':
                setEdited({
                  ...edited,
                  task: returned.row.taskName,
                  comments: returned.row.commentName,
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