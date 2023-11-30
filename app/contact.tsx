import { Grid, TextField, Box, Button } from '@mui/material';
import Image from 'next/image'; 
import React from 'react';
import form1 from '../images/form1.jpg'

const ContactForm: React.FC = () => {
  return (
    <Grid container spacing={2} bgcolor='white' >
      <Grid item xs={12} md={6}>
        <Box display="flex" flexDirection="column" gap={2} color='white'>
          <TextField label="Nombre" variant="outlined"/>
          <TextField label="Correo" variant="outlined" />
          <TextField label="Mensaje" variant="outlined" multiline rows={4} />
          <Button variant="contained">Enviar</Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Image src={form1} alt="Imagen de form" style={{ width: '100%', height: '100%' }} />
      </Grid>
    </Grid>
  );
};

export default ContactForm;
