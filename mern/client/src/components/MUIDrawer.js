import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom'

const drawerWidth = 200;

export default function ClippedDrawer() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        News Aggregator
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <Link to="/Inbox">
                        <List>
                            {['Inbox'].map((text) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        <MailIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </Link>
                    <List>
                        {['Starred'].map((text) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <List>
                        {['Send email'].map((text) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    <MailIcon />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <List>
                        {['Drafts'].map((text) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    );
}