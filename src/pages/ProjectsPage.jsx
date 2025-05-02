import React from 'react';
import Projects from '../components/Projects/Projects';
import { Grid } from '@mui/material';

const ProjectsPage = () => {
  return (
    <div id="projectsPage">
      <Grid className="page-content" >
        <Projects />
      </Grid>
    </div>
  );
};

export default ProjectsPage;