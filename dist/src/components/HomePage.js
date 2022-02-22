"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@material-ui/core");
const Home = () => {
    return ((0, jsx_runtime_1.jsx)(core_1.Box, { children: (0, jsx_runtime_1.jsx)(core_1.Typography, Object.assign({ paragraph: true }, { children: "Create your task using the 'Create Task' button at the top right. Indicate urgency and then select 'Task List' to see your tasks." }), void 0) }, void 0));
};
exports.Home = Home;
exports.default = exports.Home;
