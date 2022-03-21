import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import AddService from '../AddService/AddService';
import logo from '../../../images/logo.png';
import './Dashboard.css';
import { Button } from '@mui/material';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useFirebase from '../../../Hooks/useFirebase';
import AddDoctor from '../AddDoctor/AddDoctor';

const drawerWidth = 200;

function Dashboard(props) {
  const { user,logOut } = useFirebase();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();


  

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <img className="img-fluid logo w-100" src={logo} alt="" />
      </Toolbar>
      <Divider />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={`${url}/addService`}>Add Service</Link>
        </li>
        <li>
          <Link to={`${url}/addDoctor`}>Add Doctor</Link>
        </li>
        <li>
          <Link to={`${url}/makeAdmin`}>Make Admin</Link>
        </li>
      </ul>
      <Button
        sx={{ width: 1 }}
        onClick={logOut}
        variant="contained"
        className="login-btn"
      >
        LogOut
      </Button>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: '#D8E8EB',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography className="text-black" variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <AddService/>
          </Route>
          <Route path={`${path}/addService`}>
            <AddService />
          </Route>
          <Route path={`${path}/makeAdmin`}>
            <MakeAdmin />
          </Route>
          <Route path={`${path}/addDoctor`}>
            <AddDoctor />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
};

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
