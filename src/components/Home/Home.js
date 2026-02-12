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
          Iniciei minha carreira em 2015, ainda durante a graduação, e desde então venho ampliando minha formação com um MBA em Gerenciamento de Projetos de TI e uma pós-graduação em Gestão de Projetos. Essa base me permite unir visão técnica e entendimento de negócio.
        </Typography>

        <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
          No segmento urbano, trabalhei no desenvolvimento de softwares de prateleira voltados à gestão financeira.<br/>
          Já no setor agropecuário, participei da construção de aplicações web responsivas com arquitetura modular, permitindo a expansão do sistema por meio da criação e adaptação de módulos para diferentes segmentos do setor.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6" component="h6" sx={{ my: 1, color: green[800] }}>
          Perfil Profissional
        </Typography>

        <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
          Valorizo ambientes colaborativos e organizados, onde a comunicação clara é parte essencial do desenvolvimento. Acredito que bons resultados surgem quando técnica e relacionamento caminham juntos.
        </Typography>

        <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
          Busco construir soluções consistentes e sustentáveis, deixando uma contribuição positiva em cada projeto que participo.
        </Typography>

        <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify' }}>
          Estou sempre aberto a novos desafios e ao aprendizado contínuo, seja por meio de estudos, novas experiências ou troca de conhecimento com outros profissionais.
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