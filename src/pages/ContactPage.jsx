import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
  Paper,
  Stack,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

const ContactPage = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box 
          sx={{ 
            py: 8, 
            textAlign: 'center',
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://source.unsplash.com/random/1600x900/?contact)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            borderRadius: 2,
            mb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
              Entre em Contato
            </Typography>
            <Typography variant="h5" paragraph sx={{ mb: 4, opacity: 0.9 }}>
              Estamos aqui para ajudar você a crescer seu negócio digital
            </Typography>
          </Container>
        </Box>

        {/* Informações de Contato e Formulário */}
        <Grid container spacing={6} sx={{ mb: 8 }}>
          {/* Informações de Contato */}
          <Grid item xs={12} md={5}>
            <Typography variant="h4" component="h2" gutterBottom>
              Informações de Contato
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
              Nossa equipe está pronta para responder suas dúvidas e ajudar você a escolher a melhor solução para o seu negócio.
            </Typography>
            
            <Stack spacing={3}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <LocationOnIcon sx={{ color: 'primary.main', mr: 2, mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Endereço
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Av. Paulista, 1000 - Bela Vista<br />
                    São Paulo - SP, 01310-100
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <PhoneIcon sx={{ color: 'primary.main', mr: 2, mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Telefone
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    +55 (11) 99999-9999<br />
                    +55 (11) 3333-3333
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <EmailIcon sx={{ color: 'primary.main', mr: 2, mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Email
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    contato@moneysystem.com<br />
                    suporte@moneysystem.com
                  </Typography>
                </Box>
              </Box>
            </Stack>
            
            <Box sx={{ mt: 6 }}>
              <Typography variant="h6" gutterBottom>
                Horário de Atendimento
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Segunda a Sexta: 9h às 18h<br />
                Sábado: 9h às 13h
              </Typography>
            </Box>
          </Grid>
          
          {/* Formulário de Contato */}
          <Grid item xs={12} md={7}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h4" component="h2" gutterBottom>
                Envie uma Mensagem
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
                Preencha o formulário abaixo e entraremos em contato o mais breve possível.
              </Typography>
              
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nome"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    required
                    type="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Assunto"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Mensagem"
                    variant="outlined"
                    required
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<SendIcon />}
                    sx={{ mt: 2 }}
                  >
                    Enviar Mensagem
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        
        {/* Mapa */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom textAlign="center">
            Nossa Localização
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph textAlign="center" sx={{ mb: 4 }}>
            Venha nos visitar em nosso escritório central
          </Typography>
          <Paper 
            sx={{ 
              width: '100%', 
              height: '400px', 
              bgcolor: 'grey.200',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="body1" color="text.secondary">
              [Mapa será carregado aqui]
            </Typography>
          </Paper>
        </Box>
        
        {/* CTA */}
        <Box 
          sx={{ 
            py: 6, 
            textAlign: 'center',
            bgcolor: 'primary.light',
            color: 'white',
            borderRadius: 2,
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h3" component="h2" gutterBottom>
              Pronto para começar?
            </Typography>
            <Typography variant="h6" paragraph sx={{ mb: 4, opacity: 0.9 }}>
              Escolha o plano ideal para o seu negócio e comece a monetizar hoje mesmo
            </Typography>
            <Button 
              component={RouterLink} 
              to="/precos" 
              variant="contained" 
              color="primary"
              size="large"
              sx={{ px: 4, py: 1.5, bgcolor: 'white', color: 'primary.main' }}
            >
              Ver Planos e Preços
            </Button>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactPage;