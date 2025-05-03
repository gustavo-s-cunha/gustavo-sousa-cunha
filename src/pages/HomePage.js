import React from 'react';
import Home from '../components/Home/Home';
import { Grid } from '@mui/material';

const HomePage = () => {
  return (
    <div id="homePage">
      <Grid className="page-content" >
        <Home />
      </Grid>
    </div>
  );
};

export default HomePage;