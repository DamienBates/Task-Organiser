import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

export default function NavBar() {
  return (
    <Box>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Grid container justifyContent='flex-start'>
            <Typography variant="h6" noWrap component="div">
              <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>Task Organiser</Link>
            </Typography>
          </Grid>
          <Grid container justifyContent='flex-end'>
            <Button
              endIcon={<DirectionsRunIcon />}
              href='./CreateTask'
              variant="contained"
            >
              Create Task
            </Button>
            <Grid sx={{ ml: '2vh' }}>
              <Button
                endIcon={<ListAltIcon />}
                href='./ReadTask'
                variant="contained"
              >
                Task List
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box >
  );
}
