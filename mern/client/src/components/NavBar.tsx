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
      <AppBar position='fixed' style={{ padding: '0.6rem' }}>
        <Grid display='flex' justifyContent='space-between' alignItems='center'>
          <Typography noWrap component='div'>
            <Link
              to='/'
              style={{ textDecoration: 'none', color: 'white', fontSize: '18px', paddingLeft: '10px' }}
            >
              Task Organiser
            </Link>
          </Typography>
          <Box display='inline-flex' justifyContent='flex-end'>
            <Button
              endIcon={<CreateIcon />}
              href='/CreateTask'
              variant='contained'
            >
              <Typography sx={{ display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex' } }}
                variant='body2'>
                Create Task
              </Typography>
            </Button>
            <Button
              endIcon={<ListAltIcon />}
              href='/TaskList'
              variant='contained'
              style={{ marginLeft: '0.5rem' }}
            >
              <Typography sx={{ display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex' } }}
                variant='body2'>
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
