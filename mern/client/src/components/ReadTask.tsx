import { DataGrid, GridActionsCellItem, GridColumns } from '@mui/x-data-grid';
import { Component } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
import axios from 'axios'

interface MyProps { }
interface MyState {
  edit: any,
}

export default class ReadTask extends Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = { edit: [] }
    this.deleteTask = this.deleteTask.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/")
      .then((response) => {
        this.setState({
          edit: response.data
        })
      })
      .catch((error: any) => {
        console.log(error)
      })
  }


  deleteTask({ id }: any) {
    console.log(id)
    axios
      .delete(`http://localhost:5000/delete-task/` + id)
      .then((response) => {
        console.log(response);
      })
      .catch((error: any) => {
        console.log(error)
      })

  }

  parseArray(arr: any) {
    return arr.map((el: any, index: number) => {
      return ({ id: el._id, taskName: el.task, commentName: el.comments, priority: el.priority })
    })
  }

  columns2: GridColumns = [
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
        <GridActionsCellItem icon={<DeleteIcon />} label='Delete' onClick={() => this.deleteTask(userID)} />
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
};