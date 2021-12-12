import { DataGrid, GridActionsCellItem, GridColumns } from '@mui/x-data-grid';
import { TableContainer, Table, TableRow, TableCell, TableBody } from '@material-ui/core';
import { Component } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
import axios from 'axios'

const TasksReturned = (props: any) => {
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

  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>{props.task.task}</TableCell>
            <TableCell align="right">{props.task.comments}</TableCell>
            <TableCell align="right">{props.task.priority}</TableCell>
            <TableCell align="right"><a href="/ReadTask" onClick={() => { props.deleteTask(props.task._id) }}>Delete</a></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer >
  )
};

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

function taskCreated(id: any, taskName: any, commentName: any, priority: any) {
  return { id, taskName, commentName, priority }
}

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

export default class ReadTask extends Component<any, any> {
  constructor(props: Array<any>) {
    super(props);
    this.deleteTask = this.deleteTask.bind(this);
    this.state = { edit: [] }
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/")
      .then((response) => {
        this.setState({ edit: response.data })
      })
      .catch((error: string) => {
        console.log(error)
      })
  }

  deleteTask(id: any) {
    axios
      .delete(`http://localhost:5000/delete-task/${id}`)
      .then((res) => {
        console.log(res.data.id);
      })
      .catch((error: any) => {
        console.log(error)
      })
  }

  taskList() {
    return this.state.edit.map((currentTask: any, index: any) => {
      return <TasksReturned task={currentTask} deleteTask={this.deleteTask} key={index} />;
    })
  }

  render() {
    return (
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          sx={{ backgroundColor: '#1a0130', mt: '3.3vh' }}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick />
        <div>
          <table>
            <tbody></tbody>
            <tbody>{this.taskList()}</tbody>
          </table>
        </div>
      </div >
    );
  };
};