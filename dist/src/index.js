"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const react_router_dom_1 = require("react-router-dom");
const react_router_1 = require("react-router");
const NavBar_1 = __importDefault(require("./components/NavBar"));
const HomePage_1 = __importDefault(require("./components/HomePage"));
const CreateTask_1 = __importDefault(require("./components/CreateTask"));
const TaskList_1 = __importDefault(require("./components/TaskList"));
const material_1 = require("@mui/material");
const material_2 = require("@mui/material");
const CustomTheme_1 = __importDefault(require("./CustomTheme"));
const App = () => {
    return ((0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ style: { padding: '1rem' } }, { children: (0, jsx_runtime_1.jsxs)(material_2.ThemeProvider, Object.assign({ theme: CustomTheme_1.default }, { children: [(0, jsx_runtime_1.jsx)(NavBar_1.default, {}, void 0), (0, jsx_runtime_1.jsxs)(react_router_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_1.Route, { path: '/', element: (0, jsx_runtime_1.jsx)(HomePage_1.default, {}, void 0) }, void 0), (0, jsx_runtime_1.jsx)(react_router_1.Route, { path: '/CreateTask', element: (0, jsx_runtime_1.jsx)(CreateTask_1.default, {}, void 0) }, void 0), (0, jsx_runtime_1.jsx)(react_router_1.Route, { path: '/TaskList', element: (0, jsx_runtime_1.jsx)(TaskList_1.default, {}, void 0) }, void 0)] }, void 0)] }), void 0) }), void 0));
};
react_dom_1.default.render((0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsx)(App, {}, void 0) }, void 0) }, void 0), document.getElementById('root'));
