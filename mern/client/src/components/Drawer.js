import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
// import { Grid } from '@mui/material';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LoginIcon from '@mui/icons-material/Login';
import UseListItem from './UseListItem';
import Login from './Login';

const drawerWidth = 200;

export default function ClippedDrawer() {
    return (
        <Box>
        <CssBaseline />
        < AppBar position = "fixed" sx = {{ zIndex: (theme) => theme.zIndex.drawer + 1 }
}>
    <Toolbar>
    <Typography variant="h6" noWrap component = "div" >
        News Aggregator
            < /Typography>
            < Button endIcon = {< LoginIcon />} href = './Login'
onClick = {() => {
    return (alert(Login));
}}
variant = "contained"
    >
    Login
    < /Button>
    < /Toolbar>
    < /AppBar>
    < Drawer
variant = "permanent"
sx = {{
    width: drawerWidth,
        flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
}}
            >
    <Toolbar />
    < Box
mt = { 0.4}
sx = {{ overflow: 'auto' }}>
    <UseListItem
                        link='Inbox'
name = 'Home'
icon = {< MailIcon />}
/>
    < UseListItem
link = "Trending"
name = "Trending"
icon = {< InboxIcon />}
/>
    < /Box>
    < /Drawer>
    < Box component = "main" sx = {{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        < /Box>
        < /Box>
    );
}