import { DataGrid, GridActionsCellItem, GridColumns } from '@mui/x-data-grid'
import { useState, useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import axios from 'axios'
import { Box, Typography } from '@mui/material'

export default function ReadTask() {
  const [task, setTask] = useState<[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  // Loading is defined to tell spinner when it is allowed to stop

  interface TaskProps {
    task: string,
    comments: string,
    priority: string,
  };

  // Retrieve task list
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_PUBLIC_URL}`)
      .then((response) => {
        setTask(response.data)
      })
      .then(() => {
        setLoading(false)
      })
      .catch((err) => { console.error(err) })
  }, []);

  interface DeleteProps {
    id: string | {},
  };

  // Destructure Mongo ObjectID into URL and delete
  const deleteTask = async ({ id }: DeleteProps) => {
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

  const parseArray = (arr: any) => (
    arr.map((el: MapProps) =>
      ({ id: el._id, taskName: el.task, commentName: el.comments, priority: el.priority })
    )
  );

  return (
    <Box>
      <Box style={{ height: 500, width: 'auto', padding: '0.8rem' }}>
        <DataGrid
          rows={parseArray(task)}
          columns={columns}
          components={{
            // Change the text if no tasks found, as per Mui docs:
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