import { DataGrid, GridActionsCellItem, GridColumns } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios'

const localURL = 'http://localhost:5000/';

export default function ReadTask() {
  const [edit, editSetter] = useState([])

  //Get task list
  useEffect(() => {
    axios
      .get(localURL)
      .catch((err) => { console.error(err) })
      .then((res: any) => {
        editSetter(res.data)
      });
  }, [])

  //Destructure Mongo ObjectID into URL and delete
  const deleteTask = ({ id }: any) => {
    console.log(id)
    axios
      .delete(`${localURL}delete-task/${id}`)
      .then((response) => { console.log(response) })
      .catch((error: string) => { console.log(error) })
  }

  //Columns array with getActions delete
  const columns: GridColumns = [
    { field: 'id', headerName: 'ID', width: 50, hide: true },
    { field: 'taskName', headerName: 'Task', width: 320, editable: true },
    { field: 'commentName', headerName: 'Comment', width: 400, editable: true },
    { field: 'priority', headerName: 'Priority', width: 150, editable: true },
    {
      field: 'actions',
      type: 'actions',
      width: 100,
      getActions: (userID) => [
        <GridActionsCellItem icon={<DeleteIcon />} label='Delete' onClick={() => deleteTask(userID)} href="/ReadTask" />
      ]
    },
  ];

  // Maps the array so that we can embed the rows of the DataGrid
  const parseArray = (arr: any) => {
    return arr.map((el: any, index: number) => {
      return ({ id: el._id, taskName: el.task, commentName: el.comments, priority: el.priority })
    })
  }

  return (
    <section>
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={parseArray(edit)}
          columns={columns}
          sx={{
            backgroundColor: '#290a0a', mt: '3.5vh'
          }}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </section>
  );
};