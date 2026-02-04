import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Grid, Typography } from '@mui/material';
import { blue, green } from '@mui/material/colors';
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
          Desenvolvedor full-stack com mais de uma década de experiência em Tecnologia da Informação, atuando em projetos de software de ponta a ponta. Tenho vivência em todas as fases do ciclo de desenvolvimento, do planejamento à entrega em produção, com forte foco em qualidade, organização e resolução de problemas.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
          Iniciei minha carreira em 2015, ainda na graduação, e ao longo do caminho ampliei minha formação com um MBA em Gerenciamento de Projetos de TI e uma pós-graduação em Gestão de Projetos. Trabalho com metodologias ágeis e BDD, buscando sempre entregar soluções eficientes, escaláveis e alinhadas às necessidades do negócio.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6" component="h6" sx={{ my: 1, color: green[800] }}>
          Perfil Profissional
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
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6" component="h6" sx={{ my: 1, color: green[800] }}>
          Contato
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
          <b>E-mail:</b> gustavo.sousa.cunha@gmail.com
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Button
          size="small"
          component={Link}
          to="https://drive.google.com/file/d/11s0ZSvOksCXobtSQopJcSRNddupdwF3x/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ my: 1, color: blue[800], animation: expandAndFade(blue[800], 3) }}
          >
          <Typography variant="body1">
            Vizualizar Currículo
          </Typography>
        </Button>
      </Grid>
      
      <Box
        component="hr"
        sx={{
          width: '100%',
          mt: 4,
          border: 0,
          borderTop: `1px solid ${green[800]}`
        }}
      />

      <Grid item xs={12}>
        <Box maxWidth={500} mx="auto" justifyContent="left" sx={{ ml: 0 }}>
          <Grid container justifyContent="left" spacing={2}>
            <Grid item xs={12} sx={{ mt: -1}}>
              <Typography variant="h6" component="h6" sx={{ my: 1, color: green[800] }}>
                Habilidades Técnicas & Certificados
              </Typography>
            </Grid>

            <Grid item xs={6}>
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

            <Grid item xs={6}>
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
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;