"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const material_1 = require("@mui/material");
const material_2 = require("@mui/material");
const axios_1 = __importDefault(require("axios"));
const Send_1 = __importDefault(require("@mui/icons-material/Send"));
function CreateTaskFunc() {
    const [task, taskSetter] = (0, react_1.useState)({ task: '' });
    const [comments, commentsSetter] = (0, react_1.useState)({ comments: '' });
    const [priority, prioritySetter] = (0, react_1.useState)({ priority: '' });
    const handleTasksChange = (e) => {
        taskSetter(e.target.value);
    };
    const handleCommentsChange = (e) => {
        commentsSetter(e.target.value);
    };
    const handlePriorityChange = (e) => {
        prioritySetter(e.target.value);
    };
    const onSubmit = () => {
        const newTask = { task, comments, priority };
        axios_1.default
            .post('http://localhost:5000/add-task', newTask)
            .then((response) => {
            console.log(response.data);
        })
            .catch((error) => { console.error(error); });
        alert('Added to Task List!');
    };
    return ((0, jsx_runtime_1.jsx)("form", Object.assign({ onSubmit: onSubmit }, { children: (0, jsx_runtime_1.jsx)(material_1.Grid, Object.assign({ container: true, justifyContent: 'center' }, { children: (0, jsx_runtime_1.jsxs)(material_1.FormControl, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ sx: { mt: '2vh', mb: '3vh', fontWeight: 'bold' }, variant: 'h6' }, { children: "Create New Task" }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Grid, { children: [(0, jsx_runtime_1.jsx)(material_1.Grid, Object.assign({ item: true }, { children: (0, jsx_runtime_1.jsx)(material_1.TextField, { required: true, id: 'outlined-basic', label: 'Task', variant: 'filled', color: 'secondary', onChange: handleTasksChange }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Grid, Object.assign({ item: true, sx: { mt: '20px' } }, { children: (0, jsx_runtime_1.jsx)(material_1.TextField, { required: true, id: 'outlined-basic', label: 'Comments', variant: 'filled', color: 'secondary', onChange: handleCommentsChange }, void 0) }), void 0), (0, jsx_runtime_1.jsxs)(material_1.Grid, Object.assign({ item: true, sx: { mt: '40px' } }, { children: [(0, jsx_runtime_1.jsx)(material_1.FormLabel, Object.assign({ component: 'legend', color: 'secondary', sx: { mb: '8px' } }, { children: "Priority:" }), void 0), (0, jsx_runtime_1.jsxs)(material_1.RadioGroup, Object.assign({ "aria-label": 'Experience', onChange: handlePriorityChange }, { children: [(0, jsx_runtime_1.jsx)(material_1.FormControlLabel, { value: 'Low', control: (0, jsx_runtime_1.jsx)(material_1.Radio, {}, void 0), label: 'Low' }, void 0), (0, jsx_runtime_1.jsx)(material_1.FormControlLabel, { value: 'Medium', control: (0, jsx_runtime_1.jsx)(material_1.Radio, {}, void 0), label: 'Medium' }, void 0), (0, jsx_runtime_1.jsx)(material_1.FormControlLabel, { value: 'High', control: (0, jsx_runtime_1.jsx)(material_1.Radio, {}, void 0), label: 'High' }, void 0)] }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(material_2.Button, Object.assign({ sx: { mt: '40px' }, variant: 'contained', endIcon: (0, jsx_runtime_1.jsx)(Send_1.default, {}, void 0), type: 'submit' }, { children: "Submit" }), void 0)] }, void 0)] }, void 0) }), void 0) }), void 0));
}
exports.default = CreateTaskFunc;
