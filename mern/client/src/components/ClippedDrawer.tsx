import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid, Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import UseListItem from './UseListItem';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

const drawerWidth = 170;

export default function ClippedDrawer() {
  return (
    <Box>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Grid container justifyContent='flex-start'>
            <Typography variant="h6" noWrap component="div">
              Task Aggregator
            </Typography>
          </Grid>
          <Grid container justifyContent='flex-end'>
            <Button
              endIcon={<LoginIcon />}
              href='./CreateTask'
              variant="contained"
            >
              Create Task
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
          mt='10px'
          ml='10px'
          sx={{ overflow: 'auto' }}>
          <UseListItem
            link=''
            name='Home'
            icon={<HomeIcon />}
          />
          <UseListItem
            link='TaskList'
            name='Tasks'
            icon={<DirectionsRunIcon />}
          />
        </Box>
      </Drawer >
      <Toolbar />
    </Box >
  );
}
