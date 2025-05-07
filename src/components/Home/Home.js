import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import { expandAndFade } from '../../styles/animations';

const Home = () => {
  return (
    <Grid container spacing={2} sx={{ mb: 3 }}>
      <Grid item xs={12}>
        <Typography variant="h5" component="h5" gutterBottom>
          Gustavo de Sousa Cunha
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6" component="h6" sx={{ my: 1, color: green[800] }}>
          Trajetória Profissional
        </Typography>

        <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
          Sou um profissional de Tecnologia da Informação com foco em desenvolvimento de software e correção de bugs, atuando com base em metodologias ágeis e BDD.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
          Em 2015 iniciei minha jornada na área, ainda durante a graduação, e, após concluir o curso, especializei-me por meio de um MBA em Gerenciamento de Projetos de TI e uma pós-graduação em Gestão de Projetos.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
          Com uma década de experiência como desenvolvedor fullstack, participei de diversas etapas do ciclo de vida de projetos de software, incluindo planejamento, desenvolvimento, testes, correções, documentação e implantação.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6" component="h6" sx={{ my: 1, color: green[800] }}>
          Objetivos e Perfil Profissional
        </Typography>

        <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
          Valorizo um ambiente de trabalho harmonioso e colaborativo a-fim de fortaler as relações interpessoais, acredito que uma boa comunicação é essencial para o sucesso de qualquer equipe, sendo o principal motor para o crescimento coletivo.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
          Meu compromisso é construir uma trajetória sólida, deixando uma contribuição positiva e duradoura por onde passo.
        </Typography>

        <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
          Estou sempre disposto a enfrentar novos desafios, buscando o aprimoramento contínuo por meio de cursos, novas experiências e trocas profissionais.
        </Typography>
        <Button
          size="small"
          component={Link}
          to="/certificates"
          sx={{ my: 1, color: green[800], animation: expandAndFade(green[800], 3) }}
        >
          <Typography variant="body1">
            Certificados
          </Typography>
        </Button>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6" component="h6" sx={{ my: 1, color: green[800] }}>
          Habilidades Técnicas
        </Typography>

        <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
          Minha atuação contempla o uso de tecnologias como:
          <br/>
          Node.js, React.js, Docker, TypeScript, HTML, CSS e MySQL.
        </Typography>
        <Button
          size="small"
          component={Link}
          to="/skills"
          sx={{ my: 1, color: green[800], animation: expandAndFade(green[800], 3) }}
        >
          <Typography variant="body1">
            Habilidades
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Home;