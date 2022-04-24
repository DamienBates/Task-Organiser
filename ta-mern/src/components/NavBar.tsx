import { Grid, Button, Box, AppBar, CssBaseline, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CreateIcon from '@mui/icons-material/Create';

export default function NavBar() {
  return (
    <Box>
      <CssBaseline />
      <AppBar
        elevation={1}
        position='fixed'
        style={{
          padding: '0.5rem',
        }}>
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
            <Link
              to="/CreateTask"
              style={{
                textDecoration: 'none'
              }}>
              <Button
                endIcon={<CreateIcon />}
                variant='contained'
                style={{ display: 'inline-flex', justifyContent: 'initial', marginLeft: '0.5rem' }}
              >
                <Typography variant='body2' sx={{ display: { xs: 'none', sm: 'flex' } }}>
                  Task List
                </Typography>
              </Button>
            </Link>
            <Link
              to="/TaskList"
              style={{
                textDecoration: 'none'
              }}>
              <Button
                endIcon={<ListAltIcon />}
                variant='contained'
                style={{ display: 'inline-flex', justifyContent: 'initial', marginLeft: '0.5rem' }}
              >
                <Typography variant='body2' sx={{ display: { xs: 'none', sm: 'flex' } }}>
                  Task List
                </Typography>
              </Button>
            </Link>
          </Box>
        </Grid>
      </AppBar >
      <Toolbar />
    </Box >
  )
};
