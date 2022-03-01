import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CreateIcon from '@mui/icons-material/Create';

export default function NavBar() {
  return (
    <Box>
      <CssBaseline />
      <AppBar position='fixed' style={{ padding: '0.5rem' }}>
        <Grid display='flex' justifyContent='space-between' alignItems='center'>
          <Typography noWrap component='div'>
            <Link
              to='/'
              style={{
                textDecoration: 'none',
                color: 'white',
                paddingLeft: '6px',
              }}

            >
              Task Organiser
            </Link>
          </Typography>
          <Box display='flex' justifyContent='end'>
            <Button
              endIcon={<CreateIcon />}
              href='/CreateTask'
              variant='contained'
              style={{ display: 'inline-flex', justifyContent: 'initial', marginLeft: '0.5rem' }}
            >
              <Typography variant='body2' sx={{ fontSize: { sm: 14, xs: 0 } }}>
                Add Task
              </Typography>
            </Button>
            <Button
              endIcon={<ListAltIcon />}
              href='/TaskList'
              variant='contained'
              style={{ display: 'inline-flex', justifyContent: 'initial', marginLeft: '0.5rem' }}
            >
              <Typography variant='body2' sx={{ fontSize: { sm: 14, xs: 0 } }}>
                Task List
              </Typography>
            </Button>
          </Box>
        </Grid>
      </AppBar >
      <Toolbar />
    </Box >
  );
}
