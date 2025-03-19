import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Grid, Typography, Link, Divider, IconButton, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[100],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <MonetizationOnIcon sx={{ mr: 1, color: 'primary.main' }} />
              <Typography variant="h6" color="text.primary" gutterBottom>
                Money System
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" paragraph>
              Plataforma completa para geração de renda online, com soluções éticas e eficientes para empreendedores digitais.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton aria-label="facebook" size="small">
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton aria-label="twitter" size="small">
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton aria-label="instagram" size="small">
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton aria-label="linkedin" size="small">
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Links Rápidos
            </Typography>
            <Box>
              <Link component={RouterLink} to="/" color="inherit" display="block" sx={{ mb: 1 }}>
                Início
              </Link>
              <Link component={RouterLink} to="/servicos" color="inherit" display="block" sx={{ mb: 1 }}>
                Serviços
              </Link>
              <Link component={RouterLink} to="/precos" color="inherit" display="block" sx={{ mb: 1 }}>
                Preços
              </Link>
              <Link component={RouterLink} to="/sobre" color="inherit" display="block" sx={{ mb: 1 }}>
                Sobre
              </Link>
              <Link component={RouterLink} to="/contato" color="inherit" display="block" sx={{ mb: 1 }}>
                Contato
              </Link>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contato
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Email: contato@moneysystem.com
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Telefone: (11) 99999-9999
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Endereço: Av. Paulista, 1000 - São Paulo, SP
            </Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 3 }} />
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Money System. Todos os direitos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;