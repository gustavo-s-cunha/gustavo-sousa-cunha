import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Grid, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { blue, green, grey } from '@mui/material/colors';
import { IconFramework } from '../../styles/images/framework';
import { IconUserExperience } from '../../styles/images/userExperience';
import { IconDatabase } from '../../styles/images/database';
import { IconLanguages } from '../../styles/images/languages';
import { IconConection } from '../../styles/images/conection';

// https://www.flaticon.com/br/icones-gratis/programador
// https://www.svgcreator.com/convert
const icon = {
  "Framework": <IconFramework color={green[800]} />,
  "Linguagem": <IconLanguages color={green[800]} />,
  "Frontend": <IconUserExperience color={green[800]} />,
  "Banco de Dados": <IconDatabase color={green[800]} />,
  "Plataforma": <IconConection color={green[800]} />,
}

// Dados com separação por tipo
const skillsData = [
  {
    image: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
    text: "NodeJS",
    type: "Framework",
  },
  {
    image: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    text: "React",
    type: "Framework",
  },
  {
    image: "https://img.shields.io/badge/bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",
    text: "Bootstrap",
    type: "Framework",
  },
  {
    image: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
    text: "JavaScript",
    type: "Linguagem",
  },
  {
    image: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
    text: "TypeScript",
    type: "Linguagem",
  },
  {
    image: "https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D",
    text: "Vue.js",
    type: "Linguagem",
  },
  {
    image: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
    text: "Python",
    type: "Linguagem",
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
    image: "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white",
    text: "Sass",
    type: "Frontend",
  },
  {
    image: "https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white",
    text: "jQuery",
    type: "Frontend",
  },
  {
    image: "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white",
    text: "MySQL",
    type: "Banco de Dados",
  },
  {
    image: "https://img.shields.io/badge/SQLite-blue?style=for-the-badge&logo=sqlite&logoColor=white",
    text: "SQLite",
    type: "Banco de Dados",
  },
  {
    image: "https://img.shields.io/badge/PostgreSQL-4169e1?style=for-the-badge&logo=postgresql&logoColor=white",
    text: "PostgreSQL",
    type: "Banco de Dados",
  },
  {
    image: "https://img.shields.io/badge/docker-257bd6?style=for-the-badge&logo=docker&logoColor=white",
    text: "Docker",
    type: "Plataforma",
  },
  {
    image: "https://img.shields.io/badge/Git-000?style=for-the-badge&logo=git&logoColor=E94D5F",
    text: "Git",
    type: "Plataforma",
  },
  {
    image: "https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=github&logoColor=30A3DC",
    text: "GitHub",
    type: "Plataforma",
  },
];

// Agrupa os dados por tipo
const groupByType = skillsData.reduce((acc, curr) => {
  acc[curr.type] = acc[curr.type] || [];
  acc[curr.type].push(curr);
  return acc;
}, {});

const Skills = () => {
  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      <Grid item xs={12} sm={12}>
        {Object.keys(groupByType).map((type, groupIndex) => (<>
          <Accordion
            defaultExpanded={true}
            key={`ac-group-${groupIndex}`}
            sx={{ mb: 2 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="Accordion de Habilidades"
              id="accordion-skills"
              sx={{
                maxHeight: 30,
              }}
            >
              {icon[type]}
              <Box sx={{ ml: 1, display: 'flex' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bolder' }}>
                  {type}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 2, backgroundColor: grey[100]  }}>
              <Grid container key={`group-${groupIndex}`}>
                {groupByType[type].map((habilit, index) => (
                  <Grid item xs={6} sm={3} key={`${type}-habilit-${index}`}>
                    <img src={habilit.image} alt={habilit.text} />
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>

          {Object.keys(groupByType).length - 1 !== groupIndex && (
            <Divider sx={{ mt: 2, mb: 2, borderColor: blue[800] }} />
          )}
        </>))}
      </Grid>
    </Grid>
  );
};

export default Skills;
