// components/About.tsx
import React from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import perfil1 from '../images/perfil1.png'

const About: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Lado Izquierdo: Imagen con contorno redondo */}
      <div style={{ marginRight: '20px' }}>
        <Image
          src={perfil1}  // Reemplaza con la ruta correcta de tu imagen
          alt="Tu Foto"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
        />
        {/* Botones de redes sociales debajo de la imagen */}
        <div style={{ marginTop: '10px' }}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<GitHubIcon />}
            // onClick={() => window.open('https://github.com/tu-usuario')}
          >
            GitHub
          </Button>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<InstagramIcon />}
            // onClick={() => window.open('https://www.instagram.com/tu-usuario/')}
          >
            Instagram
          </Button>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<FacebookIcon />}
            // onClick={() => window.open('https://www.facebook.com/tu-usuario/')}
          >
            Facebook
          </Button>
        </div>
      </div>
      {/* Lado Derecho: Texto de descripción */}
      <div>
        <h2>Sobre Mí</h2>
        <p>
          ¡Hola! Soy Pablo, un apasionado estudiante de Trabajo Social y programador.
          Me encanta combinar ambas disciplinas para crear proyectos significativos
          que impacten positivamente en la comunidad.
        </p>
        {/* Puedes agregar más contenido aquí según sea necesario */}
      </div>
    </div>
  );
};

export default About;
