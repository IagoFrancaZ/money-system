import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
  Stack,
  Paper,
} from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportIcon from '@mui/icons-material/Support';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

const features = [
  {
    icon: <SecurityIcon fontSize="large" color="primary" />,
    title: 'Segurança Garantida',
    description: 'Proteção de dados e transações seguras com criptografia de ponta a ponta.',
  },
  {
    icon: <SpeedIcon fontSize="large" color="primary" />,
    title: 'Rápido e Eficiente',
    description: 'Plataforma otimizada para performance, garantindo velocidade em todas as operações.',
  },
  {
    icon: <SupportIcon fontSize="large" color="primary" />,
    title: 'Suporte 24/7',
    description: 'Equipe de suporte disponível 24 horas por dia, 7 dias por semana para ajudar você.',
  },
];

const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'Empreendedor Digital',
    content: 'O Money System transformou meu negócio online. Em apenas 3 meses, consegui triplicar minha receita mensal com as ferramentas de monetização.',
    avatar: 'https://source.unsplash.com/random/100x100/?man',
  },
  {
    name: 'Ana Oliveira',
    role: 'Criadora de Conteúdo',
    content: 'Finalmente encontrei uma plataforma completa que me permite monetizar meu conteúdo de forma ética e eficiente. Recomendo a todos os criadores!',
    avatar: 'https://source.unsplash.com/random/100x100/?woman',
  },
  {
    name: 'Roberto Santos',
    role: 'Dono de E-commerce',
    content: 'As ferramentas de afiliados e marketplace multivendedor revolucionaram meu e-commerce. Agora tenho uma rede de parceiros que impulsionam minhas vendas.',
    avatar: 'https://source.unsplash.com/random/100x100/?businessman',
  },
];

const HomePage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          py: 10, 
          textAlign: 'center',
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://source.unsplash.com/random/1600x900/?business)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          borderRadius: 2,
          mb: 6,
        }}
      >
        <Container maxWidth="md">
          <MonetizationOnIcon sx={{ fontSize: 60, mb: 2, color: 'primary.main' }} />
          <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
            Gere Renda Online de Forma Ética e Eficiente
          </Typography>
          <Typography variant="h5" paragraph sx={{ mb: 4, opacity: 0.9 }}>
            Plataforma completa com múltiplas soluções para monetização e crescimento do seu negócio digital
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button 
              component={RouterLink} 
              to="/servicos" 
              variant="contained" 
              color="primary" 
              size="large"
              sx={{ px: 4, py: 1.5 }}
            >
              Explorar Soluções
            </Button>
            <Button 
              component={RouterLink} 
              to="/cadastro" 
              variant="outlined" 
              color="primary" 
              size="large"
              sx={{ px: 4, py: 1.5, bgcolor: 'rgba(255,255,255,0.1)' }}
            >
              Começar Grátis
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Estatísticas */}
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{ p: 4, textAlign: 'center', bgcolor: 'secondary.light', color: 'white', height: '100%' }}>
              <Typography variant="h2" fontWeight="bold">+5M</Typography>
              <Typography variant="h6">Transações Processadas</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{ p: 4, textAlign: 'center', bgcolor: 'primary.dark', color: 'white', height: '100%' }}>
              <Typography variant="h2" fontWeight="bold">98%</Typography>
              <Typography variant="h6">Satisfação dos Clientes</Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Recursos */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            Por que escolher nossa plataforma?
          </Typography>
          <Typography variant="h6" color="text.secondary" textAlign="center" sx={{ mb: 6 }}>
            Soluções completas para maximizar seus resultados financeiros
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 2 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h5" component="h3" textAlign="center" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" textAlign="center">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Soluções de Monetização */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            Soluções de Monetização
          </Typography>
          <Typography variant="h6" color="text.secondary" textAlign="center" sx={{ mb: 6 }}>
            Múltiplas formas de gerar receita para seu negócio
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <ShoppingCartIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" gutterBottom>E-commerce</Typography>
                <Typography variant="body2" color="text.secondary">
                  Venda produtos físicos e digitais com facilidade
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <PeopleIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" gutterBottom>Programa de Afiliados</Typography>
                <Typography variant="body2" color="text.secondary">
                  Multiplique suas vendas com parceiros afiliados
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <SubscriptionsIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" gutterBottom>Assinaturas</Typography>
                <Typography variant="body2" color="text.secondary">
                  Receita recorrente com planos de assinatura
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button 
              component={RouterLink} 
              to="/servicos" 
              variant="contained" 
              color="primary"
              sx={{ mt: 2 }}
            >
              Ver Todas as Soluções
            </Button>
          </Box>
        </Box>

        {/* Depoimentos */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            O que nossos clientes dizem
          </Typography>
          <Typography variant="h6" color="text.secondary" textAlign="center" sx={{ mb: 6 }}>
            Histórias reais de sucesso com nossa plataforma
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="body1" paragraph sx={{ fontStyle: 'italic', mb: 3 }}>
                      "{testimonial.content}"
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box
                        component="img"
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        sx={{ width: 50, height: 50, borderRadius: '50%', mr: 2 }}
                      />
                      <Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA Final */}
        <Box 
          sx={{ 
            textAlign: 'center', 
            p: 6, 
            bgcolor: 'primary.main', 
            color: 'white',
            borderRadius: 2,
            mb: 4
          }}
        >
          <Typography variant="h3" component="h2" gutterBottom>
            Pronto para começar a gerar renda?
          </Typography>
          <Typography variant="h6" paragraph sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
            Junte-se a milhares de empreendedores que estão transformando seus negócios digitais com nossas soluções de monetização
          </Typography>
          <Button 
            component={RouterLink} 
            to="/cadastro" 
            variant="contained" 
            color="secondary" 
            size="large"
            sx={{ px: 4, py: 1.5 }}
          >
            Criar Conta Gratuita
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;