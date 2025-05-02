import React from "react";
import { Typography, Grid, Card, CardContent, Box, CardMedia, CardActions, Button } from "@mui/material";

const Certificates = () => {
  const certificates = [
    { 
      title: "Fullstack Java + Angular",
      codigo: "BEZLT8EB",
      description: "Santander Bootcamp 2023 - Fullstack Java+Angular",
      data: "26/02/2025",
      link: "https://www.dio.me/certificate/BEZLT8EB/share",
      image: "Fullstack_Java_Angular.png"
    },
    { 
      title: "SQL Database",
      codigo: "EIH0OM0G",
      description: "Formação SQL Database Specialist",
      data: "16/04/2025",
      link: "https://www.dio.me/certificate/EIH0OM0G/share",
      image: "SQL_Database_Specialist.png"
    },
    { 
      title: "Azure Cloud",
      codigo: "E936WR5Q",
      description: "Microsoft Azure Cloud Native",
      data: "29/04/2025",
      link: "https://www.dio.me/certificate/E936WR5Q/share",
      image: "Microsoft_Azure_Cloud_Native.png"
    },
    { 
      title: "DevOps",
      codigo: "SIAILO92",
      description: "Formação DevOps Fundamentals",
      data: "30/04/2025",
      link: "https://www.dio.me/certificate/SIAILO92/share",
      image: "DevOps_Fundamentals.png"
    },
  ];

  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          My Certificates
        </Typography>
      </Grid>

      {certificates.map((cert, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography variant="h6">{cert.title}</Typography>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography variant="h6">{cert.codigo}</Typography>
                <Typography variant="caption" color="text.secondary">{cert.data}</Typography>
              </Box>

              <Box display="flex" alignItems="center" mt={2}>
                <CardMedia
                  component="img"
                  image={`/certificates/${cert.image}`}
                  alt={cert.title}
                  sx={{ width: 60, height: 60, mr: 2, objectFit: 'contain' }}
                />
                <Typography variant="body1">{cert.description}</Typography>
              </Box>
            </CardContent>

            <CardActions>
              <Button
                size="small"
                color="primary"
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Certificado
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Certificates;