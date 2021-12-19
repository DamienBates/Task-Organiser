import { DataGrid, GridActionsCellItem, GridColumns } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
import axios from 'axios'

const URL = 'http://localhost:5000/';

export default function ReadTask() {
  const [edit, editSetter] = useState([])

  //Get task list
  useEffect(() => {
    axios
      .get(URL)
      .catch((err) => { console.error(err) })
      .then((res: any) => {
        editSetter(res.data)
      });
  }, [])

  //Destructure return id into URL - API endpoint delete
  const deleteTask = ({ id }: any) => {
    console.log(id)
    axios
      .delete(`${URL}delete-task/${id}`)
      .then((response) => { console.log(response) })
      .catch((error: any) => { console.log(error) })
  }

  //Columns array with getActions
  const columns2: GridColumns = [
    { field: 'id', headerName: 'ID', width: 50, hide: true },
    { field: 'taskName', headerName: 'Task', width: 250, editable: true },
    { field: 'commentName', headerName: 'Comment', width: 300, editable: true },
    { field: 'priority', headerName: 'Priority', width: 100, editable: true },
    {
      field: 'actions',
      type: 'actions',
      width: 100,
      getActions: (userID) => [
        <GridActionsCellItem icon={<EditIcon />} label='Edit' />,
        <GridActionsCellItem icon={<DeleteIcon />} label='Delete' onClick={() => deleteTask(userID)} href="/ReadTask" />
      ]
    },
  ];

  // Maps the array so that we can embed it in the DataGrid row
  const parseArray = (arr: any) => {
    return arr.map((el: any, index: number) => {
      return ({ id: el._id, taskName: el.task, commentName: el.comments, priority: el.priority })
    })
  }

  return (
    <section>
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={parseArray(edit)}
          columns={columns2}
          sx={{ backgroundColor: '#290a0a', mt: '3.3vh' }}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </section>
  );
};