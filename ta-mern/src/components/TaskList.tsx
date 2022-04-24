import { DataGrid, GridActionsCellItem, GridColumns } from '@mui/x-data-grid';
import { useState, useEffect, useContext, Key } from 'react';
import { Box, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import CreateTask from './CreateTask';
import { TaskContext } from '../TaskContext';

export default function ReadTask() {
  const [loading, setLoading] = useState<boolean>(false);
  const [deleting, setDeleting] = useState<boolean>(false);

  // Global state
  const { globalTasks, setGlobalTasks } = useContext(TaskContext)

  interface TaskProps {
    task: string,
    comments: string,
    priority: string,
  };

  // Get task list
  async function fetchTasks() {
    setLoading(true);

    try {
      await axios
        .get(`${process.env.REACT_APP_PUBLIC_URL}`)
        .then((response) => {
          setGlobalTasks(response.data)
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
    if (globalTasks.length === 0) {
      fetchTasks();
    }
  }, []);

  interface DeleteProps {
    id: string | {},
  };

  // Destructure Mongo ObjectID into URL and delete
  async function deleteTask({ id }: DeleteProps) {
    setDeleting(true);

    try {
      await axios
        .delete(`${process.env.REACT_APP_PUBLIC_URL}/delete-task/${id}`)
        .then(() => {
          setDeleting(false);
          location.reload();
        })
    } catch (error) {
      console.error(error)
    }
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
                  opacity: '0.9',
                  padding: '1rem'
                }}>
                  <Typography>Sorry! No tasks found 😔</Typography>
                </Box>
              )
            }
          }}
          sx={{
            backgroundColor: '#290a0a',
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