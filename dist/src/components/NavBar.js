"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Box_1 = __importDefault(require("@mui/material/Box"));
const AppBar_1 = __importDefault(require("@mui/material/AppBar"));
const CssBaseline_1 = __importDefault(require("@mui/material/CssBaseline"));
const Toolbar_1 = __importDefault(require("@mui/material/Toolbar"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const material_1 = require("@mui/material");
const react_router_dom_1 = require("react-router-dom");
const ListAlt_1 = __importDefault(require("@mui/icons-material/ListAlt"));
const Create_1 = __importDefault(require("@mui/icons-material/Create"));
function NavBar() {
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { children: [(0, jsx_runtime_1.jsx)(CssBaseline_1.default, {}, void 0), (0, jsx_runtime_1.jsx)(AppBar_1.default, Object.assign({ position: 'fixed', style: { padding: '0.6rem' } }, { children: (0, jsx_runtime_1.jsxs)(material_1.Grid, Object.assign({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }, { children: [(0, jsx_runtime_1.jsx)(Typography_1.default, Object.assign({ noWrap: true, component: 'div' }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: '/', style: { textDecoration: 'none', color: 'white', fontSize: '18px', paddingLeft: '10px' } }, { children: "Task Organiser" }), void 0) }), void 0), (0, jsx_runtime_1.jsxs)(Box_1.default, Object.assign({ display: 'inline-flex', justifyContent: 'flex-end' }, { children: [(0, jsx_runtime_1.jsx)(material_1.Button, Object.assign({ endIcon: (0, jsx_runtime_1.jsx)(Create_1.default, {}, void 0), href: '/CreateTask', variant: 'contained' }, { children: (0, jsx_runtime_1.jsx)(Typography_1.default, Object.assign({ sx: { display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex' } }, variant: 'body2' }, { children: "Create Task" }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Button, Object.assign({ endIcon: (0, jsx_runtime_1.jsx)(ListAlt_1.default, {}, void 0), href: '/TaskList', variant: 'contained', style: { marginLeft: '0.5rem' } }, { children: (0, jsx_runtime_1.jsx)(Typography_1.default, Object.assign({ sx: { display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex' } }, variant: 'body2' }, { children: "Task List" }), void 0) }), void 0)] }), void 0)] }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(Toolbar_1.default, {}, void 0)] }, void 0));
}
exports.default = NavBar;
