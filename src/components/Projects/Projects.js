import React from 'react';
import { Grid, Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material';
import { expandAndFade } from '../../styles/animations';
import { green, orange } from '@mui/material/colors';

const projectsData = [
  {
    title: 'Voluntário',
    description: 'The Apidae Chromosome Database is an online resource to gather information on chromosome number and nuclear genome size on bee species from all over the world.',
    link: "https://bees.ufop.br/",
    image: "https://bees.ufop.br/img/acd.png",
    color: orange[600],
  },
];

const Projects = () => {
  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      <Grid container spacing={3}>
        {projectsData.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Box display="flex" alignItems="center" justifyContent="center" sx={{ borderBottom: '1px solid', borderColor: green[700], mb: 1 }}>
                  <Typography variant="h6" color={green[700]} sx={{ fontWeight: 'bold' }}>
                    {project.title}
                  </Typography>
                </Box>
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                    {project.description}
                  </Typography>
                </Grid>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button
                  size="small"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: project.color, animation: expandAndFade(project.color, 3) }}
                >
                  <Typography variant="body1">
                    Acessar o site
                  </Typography>
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