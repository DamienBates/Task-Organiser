import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid, Button } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LoginIcon from '@mui/icons-material/Login';
import UseListItem from './UseListItem';

const drawerWidth = 180;

export default function ClippedDrawer() {
  return (
    <Box>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Grid container justifyContent='flex-start'>
            <Typography variant="h6" noWrap component="div">
              News Aggregator
            </Typography>
          </Grid>
          <Grid container justifyContent='flex-end'>
            <Button
              endIcon={<LoginIcon />}
              href='./Login'
              onClick={() => {
                return (alert('Hi, stop clicking me'));
              }}
              variant="contained"
            >
              Login
            </Button>
          </Grid>
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
        <Box
          mt={0.41}
          sx={{ overflow: 'auto' }}>
          {<UseListItem
            link=''
            name='Home'
            icon={<MailIcon />}
          />}
          {<UseListItem
            link="Trending"
            name="Trending"
            icon={<InboxIcon />}
          />}
          {<UseListItem
            link='Inbox'
            name='Inbox'
            icon={<MailIcon />}
          />}
        </Box>
      </Drawer>
      <Toolbar />
    </Box >
  );
}
