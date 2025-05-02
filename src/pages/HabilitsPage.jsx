import React from 'react';
import Habilits from '../components/Habilits/Habilits';
import { Grid } from '@mui/material';

const HabilitsPage = () => {
  return (
    <div id="habilitsPage">
      <Grid className="page-content" >
        <Habilits />
      </Grid>
    </div>
  );
};

export default HabilitsPage;