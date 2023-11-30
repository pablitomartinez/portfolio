// components/Footer.tsx
import React from 'react';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Sección de texto creativo */}
        <div>
          <h3>¡Construyendo el futuro, un proyecto a la vez!</h3>
          <p>Conéctate conmigo y descubre más sobre mi viaje en el mundo del desarrollo y trabajo social.</p>
        </div>
        {/* Sección de botones de redes sociales */}
        <div>
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<GitHubIcon />}
            // onClick={() => window.open('https://github.com/tu-usuario')}
          >
            GitHub
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<InstagramIcon />}
            // onClick={() => window.open('https://www.instagram.com/tu-usuario/')}
          >
            Instagram
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<LinkedInIcon />}
            // onClick={() => window.open('https://www.linkedin.com/in/tu-usuario/')}
          >
            LinkedIn
          </Button>
        </div>
      </div>
      {/* Créditos o información adicional */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <p>&copy; 2023 Pablo Martinez - Desarrollador Web</p>
      </div>
    </footer>
  );
};

export default Footer;