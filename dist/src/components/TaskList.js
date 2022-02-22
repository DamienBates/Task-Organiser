"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const x_data_grid_1 = require("@mui/x-data-grid");
const react_1 = require("react");
const Delete_1 = __importDefault(require("@mui/icons-material/Delete"));
const axios_1 = __importDefault(require("axios"));
const material_1 = require("@mui/material");
const localURL = 'http://localhost:5000/';
function ReadTask() {
    const [task, setTask] = (0, react_1.useState)([]);
    //Get task list
    (0, react_1.useEffect)(() => {
        axios_1.default
            .get(localURL)
            .then((response) => {
            setTask(response.data);
        })
            .catch((err) => { console.error(err); });
    }, []);
    //Destructure Mongo ObjectID into URL and delete
    const deleteTask = ({ id }) => {
        console.log(id);
        axios_1.default
            .delete(`${localURL}delete-task/${id}`)
            .then((response) => { console.log(response); })
            .catch((error) => { console.log(error); });
    };
    const columns = [
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
                (0, jsx_runtime_1.jsx)(x_data_grid_1.GridActionsCellItem, { icon: (0, jsx_runtime_1.jsx)(Delete_1.default, {}, void 0), label: 'Delete', onClick: () => deleteTask(userID), href: "/TaskList" }, void 0)
            ]
        },
    ];
    ;
    const parseArray = (arr) => (arr.map((el) => ({ id: el._id, taskName: el.task, commentName: el.comments, priority: el.priority })));
    return ((0, jsx_runtime_1.jsx)(material_1.Box, { children: (0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ style: { height: 500, width: 'auto' } }, { children: (0, jsx_runtime_1.jsx)(x_data_grid_1.DataGrid, { rows: parseArray(task), columns: columns, sx: {
                    backgroundColor: '#290a0a', mt: '1vh'
                }, pageSize: 10, rowsPerPageOptions: [10], checkboxSelection: true, disableSelectionOnClick: true }, void 0) }), void 0) }, void 0));
}
exports.default = ReadTask;
;
