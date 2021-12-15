import { DataGrid, GridActionsCellItem, GridColumns } from '@mui/x-data-grid';
import { Component } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
import axios from 'axios'

interface MyProps { }
interface MyState {
  edit: Array<string>,
}

export default class ReadTask extends Component<MyProps, MyState> {
  constructor(props: any) {
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

  deleteTask(id: string) {
    axios
      .delete(`http://localhost:5000/delete-task/${id}`)
      .then((response) => {
        console.log(response.data.id);
      })
      .catch((error: string) => {
        console.log(error)
      })
  }

  parseArray(arr: any) {
    return arr.map((el: any, index: number) => {
      return ({ id: index + 1, taskName: el.task, commentName: el.comments, priority: el.priority })
    })
  }

  columns2: GridColumns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'taskName', headerName: 'Task', width: 250, editable: true },
    { field: 'commentName', headerName: 'Comment', width: 300, editable: true },
    { field: 'priority', headerName: 'Priority', width: 100, editable: true },
    {
      field: 'actions',
      type: 'actions',
      width: 100,
      getActions: () => [
        <GridActionsCellItem icon={<EditIcon />} label='Edit' />,
        <GridActionsCellItem icon={<DeleteIcon />} label='Delete' onClick={() => this.deleteTask} />
      ]
    },
  ];

  render() {
    return (
      <section>
        <div style={{ height: 600, width: '100%' }}>
          <DataGrid
            rows={this.parseArray(this.state.edit)}
            columns={this.columns2}
            sx={{ backgroundColor: '#1a0130', mt: '3.3vh' }}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </section>
    );
  };
};