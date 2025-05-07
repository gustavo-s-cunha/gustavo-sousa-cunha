import React from 'react';
import { blue, green } from '@mui/material/colors';
import { Grid, Typography } from '@mui/material';

const Append = ({ title }) => {
  return (
    <Grid container spacing={2}
      sx={{
        mt: '-10px',
        backgroundColor: blue[50],
        // height: '35px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        color: 'white',
        // fontSize: '14px',
        transition: 'height 0.5s ease-in, transform 0.5s ease-in',
        overflow: 'hidden',
        boxShadow: "0 0.5rem 1.5rem rgba(0, 75, 6, 0.41) !important"
      }}
    >
      <Typography variant="h6"sx={{ fontWeight: 'bold', color: green[800] }}>
        {title}
      </Typography>
    </Grid>
  );
};

export default Append;