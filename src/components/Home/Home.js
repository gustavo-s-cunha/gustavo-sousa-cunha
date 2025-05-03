import React from 'react';
import { Button, Grid, Typography } from '@mui/material';

const Home = () => {
  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      <Grid item xs={12} sm={12}>
        <Typography variant="h4" component="h4" gutterBottom>
          Welcome to My Portfolio
        </Typography>
      </Grid>

      <Grid item xs={12} sm={12}>
        <Typography variant="h5" component="h5" gutterBottom>
          I am Gustavo de Sousa Cunha
        </Typography>

        <Typography variant="body1" gutterBottom>
          Sempre gostei da área de TI e suas infinitas possibilidades de aplicação.
          <br/>
          A graduação em Sistemas de informação, MBA em Gerenciamento de Projetos de TI e pós-graduação em Gestão de Projetos me possibilitaram aprofundar na área e vivenciar a satisfação em criar algo juntando diferentes habilidades e conhecimentos.
          <br/>
          Atualmente exerço a função de desenvolvedor fullstack, auxiliando também no planejamento e divisão das tarefas do scrum.
        </Typography>
      </Grid>


      <Grid item xs={12} sm={12}>
        <Typography variant="h6" component="h6" gutterBottom>
          Conecte-se comigo
        </Typography>

        <Grid container sx={{ mt: 2, mb: 1 }}>
          <Grid item xs={6} sm={4}>
            <Button
              variant="contained"
              color="primary"
              href="https://www.linkedin.com/in/gustavo-cunha-b5776110a/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ padding: 0, minWidth: "auto" }}
            >
              <img
                src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
                alt="LinkedIn"
              />
            </Button>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Button
              variant="contained"
              color="secondary"
              href="https://www.dio.me/users/gustavo_sousa_cunha"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ padding: 0, minWidth: "auto", backgroundColor: "#000" }}
            >
              <img
                src="https://img.shields.io/badge/-Meu%20Perfil%20na%20DIO-000000?style=for-the-badge&logo=gitbook&logoColor=white"
                alt="Perfil na DIO"
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;