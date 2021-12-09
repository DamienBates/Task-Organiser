import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'taskName',
    headerName: 'Task',
    width: 100,
    editable: true,
  },
  {
    field: 'priority',
    headerName: 'Priority',
    width: 100,
    editable: true,
  },
  {
    field: 'commentName',
    headerName: 'Comment',
    width: 300,
    editable: true,
  },
];

const rows = [
  { id: 1, taskName: 'Snow', commentName: 'Jon', priority: 'High' },
  { id: 2, taskName: 'Lannister', commentName: 'Cersei', priority: 'High' },
  { id: 3, taskName: 'Lannister', commentName: 'Jaime', priority: 'High' },
  { id: 4, taskName: 'Stark', commentName: 'Arya', priority: 'High' },
  { id: 5, taskName: 'Targaryen', commentName: 'Daenerys', priority: 'Medium' },
  { id: 6, taskName: 'Melisandre', commentName: 'Top', priority: 'Medium' },
  { id: 7, taskName: 'Clifford', commentName: 'Ferrara', priority: 'Medium' },
  { id: 8, taskName: 'Frances', commentName: 'Rossini', priority: 'Medium' },
  { id: 9, taskName: 'Roxie', commentName: 'Harvey', priority: 'Low' },
];

export default function TaskList() {
  return (
    <div style={{ height: 800, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        sx={{ backgroundColor: '#1a0130' }}
        pageSize={20}
        rowsPerPageOptions={[20]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}