import React, { useState } from "react";
import { Typography, Grid, Card, CardContent, Box, CardMedia, CardActions, Button, ListItem, ListItemText } from "@mui/material";
import { green } from "@mui/material/colors";
import GenericModal from "../../utils/GenericModal";
import { expandAndFade } from "../../styles/animations";

//bootcamps
const certificates_bootcamp = [
  { 
    title: "UI/UX Designer",
    codigo: "LN4WORXE",
    description: "Formação UI/UX Designer",
    data: "16/09/2025",
    link: "https://www.dio.me/certificate/LN4WORXE/share",
    image: "bootcamp/UI_UX.png"
  },
  { 
    title: "Docker",
    codigo: "XAGYNVZ2",
    description: "Formação Docker Fundamentals",
    data: "12/05/2025",
    link: "https://www.dio.me/certificate/XAGYNVZ2/share",
    image: "bootcamp/Docker.png"
  },
  { 
    title: "DevOps",
    codigo: "SIAILO92",
    description: "Formação DevOps Fundamentals",
    data: "30/04/2025",
    link: "https://www.dio.me/certificate/SIAILO92/share",
    image: "bootcamp/DevOps_Fundamentals.png"
  },
  { 
    title: "Azure Cloud",
    codigo: "E936WR5Q",
    description: "Microsoft Azure Cloud Native",
    data: "29/04/2025",
    link: "https://www.dio.me/certificate/E936WR5Q/share",
    image: "bootcamp/Microsoft_Azure_Cloud_Native.png"
  },
  { 
    title: "SQL Database",
    codigo: "EIH0OM0G",
    description: "Formação SQL Database Specialist",
    data: "16/04/2025",
    link: "https://www.dio.me/certificate/EIH0OM0G/share",
    image: "bootcamp/SQL_Database_Specialist.png"
  },
  { 
    title: "Fullstack Java + Angular",
    codigo: "BEZLT8EB",
    description: "Santander Bootcamp 2023 - Fullstack Java+Angular",
    data: "26/02/2025",
    link: "https://www.dio.me/certificate/BEZLT8EB/share",
    image: "bootcamp/Fullstack_Java_Angular.png"
  },
];

// React
const certificates_react = [
  { 
    title: "Componentes encadeados",
    codigo: "HTSNTH3Y",
    description: "Trabalhando com componentes encadeados",
    data: "16/09/2025",
    link: "https://www.dio.me/certificate/HTSNTH3Y/share",
    image: "react/Trabalhando_com_componentes_encadeados.png"
  },
  { 
    title: "Estados Globais",
    codigo: "CNKX43WY",
    description: "Manipulando Estados Globais",
    data: "05/03/2025",
    link: "https://www.dio.me/certificate/CNKX43WY/share",
    image: "react/Manipulando_Estados_Globais_React.png"
  },
  { 
    title: "Armazenamento Local",
    codigo: "XRTLOBQ4",
    description: "Local Storage",
    data: "05/03/2025",
    link: "https://www.dio.me/certificate/XRTLOBQ4/share",
    image: "react/Local_Storage_com_React.png"
  },
];

// Cursos e Pós
const certificates_academia = [
  { 
    title: "Pós-graduação",
    codigo: "720",
    description: "MBA EM GERENCIAMENTO DE PROJETOS DE T.I",
    data: "13/12/2021",
    link: "",
    image: "",
    tipo: "Horas"
  },
  { 
    title: "Pós-graduação",
    codigo: "420",
    description: "GESTÃO DE PROJETOS",
    data: "13/12/2021",
    link: "",
    image: "",
    tipo: "Horas"
  },
  { 
    title: "Graduação",
    codigo: "",
    description: "SISTEMAS DE INFORMAÇÃO",
    data: "16/12/2016",
    link: "",
    image: "",
    tipo: "Bacharelado"
  },
];
const Certificates = () => {

  const certificates = {
    bootcamp: {array: certificates_bootcamp, title: "Bootcamp"},
    react: {array: certificates_react, title: "React"},
    academia: {array: certificates_academia, title: "Titulação Acadêmica"},
  }

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
      {Object.entries(certificates).map(([key, category]) => (
        <Grid item xs={12} key={key}>
          <Typography
            variant="h5"
            sx={{ mb: 2, fontWeight: "bold", color: green[700] }}
          >
            {category.title}
          </Typography>

          <Grid container spacing={3}>
            {category.array.map((cert, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ borderBottom: "1px solid", borderColor: green[700], mb: 1 }}
                      >
                        <Typography variant="h6" color={green[700]} sx={{ fontWeight: "bold" }}>
                          {cert.title}
                        </Typography>
                      </Box>

                      <Box display="flex" alignItems="center" justifyContent="space-between">
                        <ListItem>
                          <ListItemText
                            primary={
                              <Typography fontWeight="bold">
                                {cert.tipo || "Código"}
                              </Typography>}
                            secondary={
                              <Typography variant="subtitle1">
                                {cert.codigo}
                              </Typography>}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            primary={<Typography fontWeight="bold">Término</Typography>}
                            secondary={
                              <Typography variant="body1" color="text.secondary">
                                {cert.data}
                              </Typography>
                            }
                          />
                        </ListItem>
                      </Box>

                      <Grid container spacing={1} sx={{ mt: 1 }}>
                        {cert.image &&
                          <Grid item xs={12} sm={3} sx={{ mr: 1 }}>
                            <CardMedia
                              component="img"
                              image={`/certificates/${cert.image}`}
                              alt={cert.title}
                              onClick={() => handleOpen(cert.title, cert.image)}
                              />
                          </Grid>
                        }
                        <Grid item xs={12} sm={cert.image ? 8 : 12}>
                          <Typography variant="body1">{cert.description}</Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </CardContent>

                  {cert.link && (
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
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>
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