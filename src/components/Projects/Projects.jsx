import React from 'react';
import { Grid, Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material';

const projectsData = [
  {
    title: 'Voluntário',
    description: 'The Apidae Chromosome Database is an online resource to gather information on chromosome number and nuclear genome size on bee species from all over the world.',
    link: "https://bees.ufop.br/",
  },
];

const Projects = () => {
  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      <Grid item xs={12} sm={12}>
        <Typography variant="h4" gutterBottom>
          My Projects
        </Typography>
      </Grid>

      <Grid container spacing={3}>
        {projectsData.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ mb: 2}}>
                  <Typography variant="h5">{project.title}</Typography>
                </Box>
                <Box >
                  <Typography variant="body1">{project.description}</Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Acessar o site
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Projects;