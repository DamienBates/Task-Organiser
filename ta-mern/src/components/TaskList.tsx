import { DataGrid, GridActionsCellItem, GridColumns } from "@mui/x-data-grid";
import { useState, useEffect, useContext } from "react";
import { Box, Typography } from "@mui/material";
import { TaskContext } from "../TaskContext";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import CustomTheme from "../CustomTheme";

interface TaskProps {
  task: string,
  comments: string,
  priority: string,
};

export default function ReadTask() {
  const [loading, setLoading] = useState<boolean>(false);
  const [deleting, setDeleting] = useState<boolean>(false);

  // Global state
  const {
    globalTasks,
    setGlobalTasks,
    submitted,
    setSubmitted
  } = useContext(TaskContext);


  // Get task list
  async function fetchTasks() {
    setLoading(true);

    try {
      await axios
        .get(`${process.env.REACT_APP_PUBLIC_URL}`)
        .then((response) => {
          setGlobalTasks(response.data)
          setLoading(false);
        })
    } catch (error) {
      console.error(error)
      setLoading(false);
    }
  }

  // Retrieve task list once on page load
  useEffect(() => {
    fetchTasks();
  }, [submitted, deleting]);

  // Retrieve task list once on page load
  useEffect(() => {
    fetchTasks();
  }, []);

  interface DeleteProps {
    id: {},
  };

  // Destructure Mongo ObjectID into URL and delete
  async function deleteTask({ id }: DeleteProps) {
    try {
      await axios
        .delete(`${process.env.REACT_APP_PUBLIC_URL}/delete-task/${id}`)
        .then(() => {
          setDeleting(true);
        })
        .then(() => {
          setDeleting(false);
        })
    } catch (error) {
      console.error(error)
    }
  };

  const columns: GridColumns = [
    { field: 'id', headerName: 'ID', width: 5, hide: true },
    { field: 'taskName', headerName: 'Task', width: 180, editable: true },
    { field: 'commentName', headerName: 'Comment', width: 200, editable: true },
    { field: 'priority', headerName: 'Priority', width: 100, editable: true },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      getActions: (userID) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          type="button"
          label='Delete'
          disabled={deleting === false ? false : true}
          onClick={() => deleteTask(userID)}
        />
      ]
    },
  ];

  return (
    <Box>
      <Box style={{
        height: 530,
        width: '90vw',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <DataGrid
          rows={parseArray(globalTasks)}
          columns={columns}
          components={{
            // Change the text if no tasks are found, as per Mui docs:
            NoRowsOverlay: () => {
              return (
                <Box style={{
                  display: 'grid',
                  justifyContent: 'center',
                  alignContent: 'center',
                  height: '100%',
                  opacity: '0.8',
                  padding: '1rem'
                }}>
                  <Typography>Sorry! No tasks found 😔</Typography>
                </Box>
              )
            }
          }}
          sx={{
            backgroundColor: CustomTheme.palette.secondary.dark,
          }}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
          loading={loading}
        />
      </Box>
    </Box>
  )
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