import React from 'react';
import { Button, Grid } from '@mui/material';

const Footer = () => {
  return (
    <footer className="footer navbar-expand fixed-bottom shadow-lg overflow-auto" style={{ padding: '0.6rem'}}>
      <Grid container spacing={2} sx={{ textAlign: 'center' }} >
        <Grid item xs={4} sm={4} >
          <Button
            variant="contained"
            href="https://www.linkedin.com/in/gustavo-cunha-b5776110a/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ padding: 0, minWidth: "auto" }}
          >
            <img
              src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
              alt="LinkedIn"
              title="LinkedIn"
            />
          </Button>
        </Grid>
        <Grid item xs={4} sm={4}>
          <Button
            variant="contained"
            href="https://github.com/gustavo-s-cunha"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ padding: 0, minWidth: "auto" }}
          >
            <img
              src="https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=github&logoColor=30A3DC"
              alt="GitHub"
              title="GitHub"
            />
          </Button>
        </Grid>
        <Grid item xs={4} sm={4}>
          <Button
            variant="contained"
            href="https://www.dio.me/users/gustavo_sousa_cunha"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ padding: 0, minWidth: "auto", backgroundColor: "#000" }}
          >
            <img
              src="https://img.shields.io/badge/DIO-000000?style=for-the-badge&logo=gitbook&logoColor=white"
              title="Perfil na DIO"
              alt="DIO"
            />
          </Button>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;