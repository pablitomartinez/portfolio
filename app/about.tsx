// components/About.tsx
import { Grid,  Typography, Box} from '@mui/material';

import React from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import perfil1 from '../images/perfil1.png'

const About: React.FC = () => {
  return (
    <Box  sx={{ width: '100%' }} padding={10} >
        <Grid container  columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        
        {/* Lado Izquierdo: Imagen con contorno redondo */}
        <Grid container item xs={6} direction='column' padding={2} alignItems='center' justifyContent='center'>

                <Image
                src={perfil1}  // Reemplaza con la ruta correcta de tu imagen
                alt="perfil"
                width={350}
                height={350}
                style={{ borderRadius: '50%' }}
                />
                {/* Botones de redes sociales debajo de la imagen */}
                
            <Box alignItems='center' justifyContent='center' paddingTop={4}>
                <Button
                    // variant="outlined"
                    color="secondary"
                    startIcon={<GitHubIcon />}
                    // onClick={() => window.open('https://github.com/tu-usuario')}
                >          
                </Button>
                <Button
                    // variant="outlined"
                    color="primary"
                    startIcon={<InstagramIcon />}
                    // onClick={() => window.open('https://www.instagram.com/tu-usuario/')}
                >               
                </Button>
                <Button
                    // variant="outlined"
                    color="primary"
                    startIcon={<FacebookIcon />}
                    // onClick={() => window.open('https://www.facebook.com/tu-usuario/')}
                >
                </Button>
            </Box>
          
        </Grid>
        
        {/* Lado Derecho: Texto de descripción */}

        <Grid container item xs={6} justifyContent='flex-start' paddingRight={4}>
            <Typography variant='h3'>Sobre Mí</Typography>
            <Typography variant='h6' justifyContent='flex-end' >
            ¡Hola! Soy Pablo, un apasionado estudiante de Trabajo Social y programador.
            Me encanta combinar ambas disciplinas para crear proyectos significativos
            que impacten positivamente en la comunidad.
            </Typography>
            {/* Puedes agregar más contenido aquí según sea necesario */}
        </Grid>

        </Grid>
    </Box>
  );
};

export default About;
