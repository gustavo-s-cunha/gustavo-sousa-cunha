import React from 'react';
import Skills from '../components/Skills/Skills';
import { Grid } from '@mui/material';

const SkillsPage = () => {
  return (
    <div id="skillsPage">
      <Grid className="page-content" >
        <Skills />
      </Grid>
    </div>
  );
};

export default SkillsPage;