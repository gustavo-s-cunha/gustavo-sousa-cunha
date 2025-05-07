import React, { useState } from "react";
import { Typography, Grid, Card, CardContent, Box, CardMedia, CardActions, Button, ListItem, ListItemText } from "@mui/material";
import { green } from "@mui/material/colors";
import GenericModal from "../../utils/GenericModal";
import { expandAndFade } from "../../styles/animations";

const Certificates = () => {
  const certificates = [
    { 
      title: "DevOps",
      codigo: "SIAILO92",
      description: "Formação DevOps Fundamentals",
      data: "30/04/2025",
      link: "https://www.dio.me/certificate/SIAILO92/share",
      image: "DevOps_Fundamentals.png"
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
      title: "SQL Database",
      codigo: "EIH0OM0G",
      description: "Formação SQL Database Specialist",
      data: "16/04/2025",
      link: "https://www.dio.me/certificate/EIH0OM0G/share",
      image: "SQL_Database_Specialist.png"
    },
    { 
      title: "Fullstack Java + Angular",
      codigo: "BEZLT8EB",
      description: "Santander Bootcamp 2023 - Fullstack Java+Angular",
      data: "26/02/2025",
      link: "https://www.dio.me/certificate/BEZLT8EB/share",
      image: "Fullstack_Java_Angular.png"
    },
  ];

  const [openM, setOpenM] = useState(false);
  const [optsM, setOptsM] = useState({});
  
  const handleOpen = (title, image) => {
    setOptsM({
      title: `Certificado: ${title}`,
      content: (
        <CardMedia
          component="img"
          image={`/certificates/${image}`}
          alt={title}
        />
      ),
    });
    setOpenM(true);
  }

  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      {certificates.map((cert, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ borderBottom: '1px solid', borderColor: green[700], mb: 1 }}
                >
                  <Typography variant="h6" color={green[700]} sx={{ fontWeight: 'bold' }}>
                    {cert.title}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <ListItem>
                    <ListItemText
                      primary={
                        <Typography fontWeight="bold">
                          Código
                        </Typography>
                      }
                      secondary={
                        <Typography variant="subtitle1">
                          {cert.codigo}
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={
                        <Typography fontWeight="bold">
                          Término
                        </Typography>
                      }
                      secondary={
                        <Typography variant="body1" color="text.secondary">
                          {cert.data}
                        </Typography>
                      }
                    />
                  </ListItem>
                </Box>
                <Grid container spacing={1} sx={{ mt: 1 }}>
                  <Grid item xs={12} sm={3} sx={{ mr: 1 }}>
                    <CardMedia
                      component="img"
                      image={`/certificates/${cert.image}`}
                      alt={cert.title}
                      // sx={{ width: 100, height: 100, mr: 2, objectFit: 'contain' }}
                      onClick={() => handleOpen(cert.title, cert.image)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography variant="body1">
                      {cert.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                size="small"
                color="success"
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ animation: expandAndFade(green[700], 3) }}
              >
                <Typography variant="body1">
                  Ver Certificado
                </Typography>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}

      <GenericModal
        setOpen={setOpenM}
        open={openM}
        setOpts={setOptsM}
        opts={optsM}
      />
    </Grid>
  );
};

export default Certificates;