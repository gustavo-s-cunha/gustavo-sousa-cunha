import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';
import Append from './Append';

const getTitleFromPath = (pathname) => {
  switch (pathname) {
    case '/':
      return 'Home';
    case '/certificates':
      return 'Certificados';
    case '/projects':
      return 'Projetos';
    case '/skills':
      return 'Habilidades';
    default:
      return 'Home';
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

  return (<>
    <AppBar className="navbar navbar-expand shadow-lg" color="success" position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/" style={{ marginLeft: "-8px"}}>
          Home
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
    </AppBar>

    <Append title={title} />
  </>);
};

export default Navbar;