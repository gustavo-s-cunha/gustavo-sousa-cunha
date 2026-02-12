import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box, Menu, MenuItem, IconButton } from '@mui/material';
import { Home, Keyboard, School, Work } from '@mui/icons-material';
import MenuIcon from "@mui/icons-material/Menu";
import Append from './Append';

const getTitleFromPath = (pathname) => {
  switch (pathname) {
    case '/':
      return 'Perfil';
    case '/certificates':
      return 'Certificados';
    case '/projects':
      return 'Projetos';
    case '/skills':
      return 'Habilidades';
    default:
      return 'Perfil';
  }
};

const Navbar = () => {
  const location = useLocation();
  const [title, setTitle] = useState(getTitleFromPath(location.pathname));

  useEffect(() => {
    const newTitle = getTitleFromPath(location.pathname);
    setTitle(newTitle);

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  }, [location.pathname]);

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = (event) => setAnchorEl(event.currentTarget);
  const closeMenu = () => setAnchorEl(null);

  return (<>
    {/* <AppBar className="navbar navbar-expand shadow-lg" color="success" position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/" style={{ marginLeft: "-8px"}}>
          Perfil
        </Button>
        <Button color="inherit" component={Link} to="/certificates">
          Certificados
        </Button>
        <Button color="inherit" component={Link} to="/projects">
          Projetos
        </Button>
        <Button color="inherit" component={Link} to="/skills">
          Habilidades
        </Button>
      </Toolbar>
    </AppBar> */}
    <AppBar color="success" position="static" className="navbar navbar-expand shadow-lg">
      <Toolbar>
        {/* MOBILE — Menu hambúrguer + Ícone */}
        <Box sx={{ display: { xs: "flex", sm: "none" } }}>
          <IconButton color="inherit" onClick={openMenu}>
            <MenuIcon />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={closeMenu}
          >
            <MenuItem component={Link} to="/" onClick={closeMenu}>
              <Home sx={{ mr: 1 }} /> Perfil
            </MenuItem>
            <MenuItem component={Link} to="/certificates" onClick={closeMenu}>
              <School sx={{ mr: 1 }} /> Certificados
            </MenuItem>
            <MenuItem component={Link} to="/projects" onClick={closeMenu}>
              <Work sx={{ mr: 1 }} /> Projetos
            </MenuItem>
            <MenuItem component={Link} to="/skills" onClick={closeMenu}>
              <Keyboard sx={{ mr: 1 }} /> Habilidades
            </MenuItem>
          </Menu>

          <Box
            sx={{
              display: "flex",
              gap: 1
            }}
          >
            <IconButton
              color="inherit"
              component={Link}
              to="/"
              title="Perfil"
            >
              <Home sx={{ height: '22px' }}/>
            </IconButton>
            <IconButton
              color="inherit"
              component={Link}
              to="/certificates"
              title="Certificados"
            >
              <School sx={{ height: '22px' }}/>
            </IconButton>

            <IconButton
              color="inherit"
              component={Link}
              to="/projects"
              title="Projetos"
            >
              <Work sx={{ height: '22px' }}/>
            </IconButton>

            <IconButton
              color="inherit"
              component={Link}
              to="/skills"
              title="Habilidades"
            >
              <Keyboard sx={{ height: '22px' }}/>
            </IconButton>
          </Box>
        </Box>

        {/* DESKTOP — Ícone + texto */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
          <Button color="inherit" component={Link} to="/" startIcon={<Home />}>
            Perfil
          </Button>
          <Button color="inherit" component={Link} to="/certificates" startIcon={<School />}>
            Certificados
          </Button>
          <Button color="inherit" component={Link} to="/projects" startIcon={<Work />}>
            Projetos
          </Button>
          <Button color="inherit" component={Link} to="/skills" startIcon={<Keyboard />}>
            Habilidades
          </Button>
        </Box>

      </Toolbar>
    </AppBar>

    <Append title={title} />
  </>);
};

export default Navbar;