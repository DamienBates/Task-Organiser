import { DataGrid, GridColumns, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'

const TasksReturned = (props: any) => {
    const columns2: GridColumns = [
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
        }
    ]

    const rows2 = [
        { id: 1, taskName: 'Too many napkins', commentName: 'Jon', priority: 'High' },
        { id: 2, taskName: 'Lannister', commentName: 'Cersei', priority: 'High' }
    ]

    return (
        <>
            <div style={{ height: 600, width: '180vh' }}>
                <DataGrid
                    rows={rows2}
                    columns={columns2}
                    sx={{ backgroundColor: '#1a0130', mt: '3.3vh' }}
                    pageSize={10}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick />
                <table>
                    <tbody>
                        <td>
                        </td>
                    </tbody>
                </table>
            </div>
        </>
    )
};

export default TasksReturned
