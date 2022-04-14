import { DataGrid, GridActionsCellItem, GridColumns } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

export default function ReadTask() {
  const [retrievedTask, setRetrievedTask] = useState<[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  interface TaskProps {
    task: string,
    comments: string,
    priority: string,
  };

  // Get task list
  async function fetchTasks() {
    try {
      await axios
        .get(`${process.env.REACT_APP_PUBLIC_URL}`)
        .then((response) => {
          setRetrievedTask(response.data)
        })
        .then(() => {
          setLoading(false)
        })
    } catch (error) {
      console.error(error)
    }
  }

  // Retrieve task list once on page load
  useEffect(() => {
    fetchTasks();
  }, []);

  interface DeleteProps {
    id: string | {},
  };

  // Destructure Mongo ObjectID into URL and delete
  async function deleteTask({ id }: DeleteProps) {
    try {
      await axios
        .delete(`${process.env.REACT_APP_PUBLIC_URL}/delete-task/${id}`)
    } catch (error) {
      alert("There was an error, try again!")
    }

    location.reload();
  };

  const columns: GridColumns = [
    { field: 'id', headerName: 'ID', width: 5, hide: true },
    { field: 'taskName', headerName: 'Task', width: 240, editable: true },
    { field: 'commentName', headerName: 'Comment', width: 250, editable: true },
    { field: 'priority', headerName: 'Priority', width: 150, editable: true },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      getActions: (userID) => [
        <GridActionsCellItem icon={<DeleteIcon />} type="button" label='Delete' onClick={() => deleteTask(userID)} />
      ]
    },
  ];

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

  return (
    <Box>
      <Box style={{
        height: 530,
        width: '100%',
        paddingLeft: '1.2rem',
        paddingRight: '1.2rem',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <DataGrid
          rows={parseArray(retrievedTask)}
          columns={columns}
          components={{
            // Change the text if no tasks are found, as per Mui docs:
            NoRowsOverlay: () => {
              return (
                <Box style={{ display: 'grid', justifyContent: 'center', alignContent: 'center', height: '100vh', opacity: '0.9', padding: '1rem' }}>
                  <Typography>Sorry! No tasks found 😔</Typography>
                </Box>
              )
            }
          }}
          sx={{
            backgroundColor: '#290a0a', mt: '1vh'
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