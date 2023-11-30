'use client';
import { Grid, Typography, Box} from '@mui/material';
import Image from 'next/image'; 
import React from 'react';
import landing from '../images/landing1.jpg';

const LandingPage: React.FC = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" >
        <Grid container  spacing={2} >
            <Grid item xs={12} md={6}>
                <Box >
                    <Typography variant="h4" gutterBottom height='auto'>
                    Bienvenido a mi portafolio
                    </Typography>
                    <Typography variant="body1">
                    Soy un desarrollador web con experiencia en una variedad de tecnologías y lenguajes de programación. Aquí puedes ver algunos de los proyectos en los que he trabajado.
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
            <Image src={landing} alt="Imagen de portafolio"  style={{ width: '80%', height:'auto' }} />
            </Grid>
        </Grid>
    </Box>
  );
};

export default LandingPage;
