import React, { useState, useEffect } from 'react'
import { GridColumns, GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
import axios from 'axios'

const ReadTaskFunctional = () => {
    const [tasks, setTasks] = useState([]);

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

    useEffect(() => {
        axios
            .get("http://localhost:5000")
            .then
    })

    return (
        <div>

        </div>
    )
}

export default ReadTaskFunctional
