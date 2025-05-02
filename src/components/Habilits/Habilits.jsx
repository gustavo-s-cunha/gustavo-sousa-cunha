import React from 'react';
import { Grid, Typography } from '@mui/material';

// Dados com separação por tipo
const habilitsData = [
  {
    image: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
    text: "NodeJS",
    type: "Frameworks",
  },
  {
    image: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    text: "React",
    type: "Frameworks",
  },
  {
    image: "https://img.shields.io/badge/bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",
    text: "Bootstrap",
    type: "Frameworks",
  },
  {
    image: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
    text: "JavaScript",
    type: "Linguagens",
  },
  {
    image: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
    text: "TypeScript",
    type: "Linguagens",
  },
  {
    image: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
    text: "Python",
    type: "Linguagens",
  },
  {
    image: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
    text: "HTML5",
    type: "Frontend",
  },
  {
    image: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
    text: "CSS3",
    type: "Frontend",
  },
  {
    image: "https://img.shields.io/badge/SASS-000?style=for-the-badge&logo=sass&logoColor=CD6799",
    text: "Sass",
    type: "Frontend",
  },
  {
    image: "https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white",
    text: "MySQL",
    type: "Banco de Dados",
  },
  {
    image: "https://img.shields.io/badge/PostgreSQL-000?style=for-the-badge&logo=postgresql",
    text: "PostgreSQL",
    type: "Banco de Dados",
  },
];

// Agrupa os dados por tipo
const groupByType = habilitsData.reduce((acc, curr) => {
  acc[curr.type] = acc[curr.type] || [];
  acc[curr.type].push(curr);
  return acc;
}, {});

const Habilits = () => {
  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      <Grid item xs={12} sm={12}>
        <Typography variant="h3">Habilidades</Typography>
      </Grid>

      {Object.keys(groupByType).map((type, groupIndex) => (
        <Grid container key={`group-${groupIndex}`}>
          <Grid item xs={12} sm={12} sx={{ mt: 2, mb: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bolder' }}>{type}</Typography>
          </Grid>
          {groupByType[type].map((habilit, index) => (
            <Grid item xs={6} sm={3} key={`habilit-${index}`}>
              <img src={habilit.image} alt={habilit.text} />
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default Habilits;
