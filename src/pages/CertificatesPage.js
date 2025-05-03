import React from 'react';
import Certificates from '../components/Certificates/Certificates';
import { Grid } from '@mui/material';

const CertificatesPage = () => {
  return (
    <div id="certificatesPage">
      <Grid className="page-content" >
        <Certificates />
      </Grid>
    </div>
  );
};

export default CertificatesPage;