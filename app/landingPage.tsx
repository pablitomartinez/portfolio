import { Grid, Typography } from '@mui/material';
import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom>
          Bienvenido a mi portafolio
        </Typography>
        <Typography variant="body1">
          Soy un desarrollador web con experiencia en una variedad de tecnologías y lenguajes de programación. Aquí puedes ver algunos de los proyectos en los que he trabajado.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        {/* <img src="portfolio-image.jpg" alt="Imagen de portafolio" style={{ width: '100%' }} /> */}
      </Grid>
    </Grid>
  );
};

export default LandingPage;
