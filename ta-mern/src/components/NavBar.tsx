import { Grid, Button, Box, AppBar, CssBaseline, Toolbar, Typography } from '@mui/material';
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
              <Typography variant='body2' sx={{ display: { xs: 'none', sm: 'flex' } }}>
                Add Task
              </Typography>
            </Button>
            <Button
              endIcon={<ListAltIcon />}
              href='/TaskList'
              variant='contained'
              style={{ display: 'inline-flex', justifyContent: 'initial', marginLeft: '0.5rem' }}
            >
              <Typography variant='body2' sx={{ display: { xs: 'none', sm: 'flex' } }}>
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
