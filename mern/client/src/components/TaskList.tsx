import { DataGrid, GridActionsCellItem, GridColDef, GridColumns } from '@mui/x-data-grid';
import { Button } from '@material-ui/core';
import { Component } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'

const renderEditButton = () => {
  return (
    <Button
      variant="contained"
      size="small"
      color="secondary"
    >
      Edit
    </Button>
  )
}

const renderDeleteButton = () => {
  return (
    <Button
      variant="contained"
      size="small"
      color="secondary"
    >
      Delete
    </Button>
  )
}

const columns: GridColumns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'taskName', headerName: 'Task', width: 200, editable: true },
  { field: 'priority', headerName: 'Priority', width: 100, editable: true },
  { field: 'commentName', headerName: 'Comment', width: 300, editable: true },
  {
    field: 'actions',
    type: 'actions',
    width: 100,
    getActions: () => [
      <GridActionsCellItem icon={<EditIcon />} label='Edit' />,
      <GridActionsCellItem icon={<DeleteIcon />} label='Delete' />
    ]
  },
];

const rows = [
  { id: 1, taskName: 'Too many napkins', commentName: 'Jon', priority: 'High' },
  { id: 2, taskName: 'Lannister', commentName: 'Cersei', priority: 'High' },
  { id: 3, taskName: 'Lannister', commentName: 'Jaime', priority: 'High' },
  { id: 4, taskName: 'Stark', commentName: 'Arya', priority: 'High' },
  { id: 5, taskName: 'Targaryen', commentName: 'Daenerys', priority: 'Medium' },
  { id: 6, taskName: 'Melisandre', commentName: 'Top', priority: 'Medium' },
  { id: 7, taskName: 'Clifford', commentName: 'Ferrara', priority: 'Medium' },
  { id: 8, taskName: 'Frances', commentName: 'Rossini', priority: 'Medium' },
  { id: 9, taskName: 'Roxie', commentName: 'Harvey', priority: 'Low' },
];

export default class TaskList extends Component {
  render() {

    return (
      <div style={{ height: 750, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          sx={{ backgroundColor: '#1a0130', mt: '3.3vh' }}
          pageSize={20}
          rowsPerPageOptions={[20]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    );
  };
};