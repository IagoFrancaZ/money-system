import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
  Paper,
  Avatar,
  Stack,
} from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BusinessIcon from '@mui/icons-material/Business';
import HistoryIcon from '@mui/icons-material/History';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import GroupsIcon from '@mui/icons-material/Groups';

const teamMembers = [
  {
    name: 'Roberto Almeida',
    role: 'CEO & Fundador',
    bio: 'Empreendedor serial com mais de 15 anos de experiência em negócios digitais e fintech.',
    avatar: 'https://source.unsplash.com/random/100x100/?ceo',
  },
  {
    name: 'Mariana Costa',
    role: 'CTO',
    bio: 'Especialista em tecnologia com background em grandes empresas de tecnologia do Vale do Silício.',
    avatar: 'https://source.unsplash.com/random/100x100/?woman',
  },
  {
    name: 'Carlos Mendes',
    role: 'Diretor de Marketing',
    bio: 'Estrategista de marketing digital com foco em crescimento e aquisição de clientes.',
    avatar: 'https://source.unsplash.com/random/100x100/?marketing',
  },
  {
    name: 'Juliana Santos',
    role: 'Diretora de Operações',
    bio: 'Especialista em otimização de processos e gestão de equipes multidisciplinares.',
    avatar: 'https://source.unsplash.com/random/100x100/?business',
  },
];

const values = [
  {
    icon: <EmojiObjectsIcon fontSize="large" color="primary" />,
    title: 'Inovação',
    description: 'Buscamos constantemente novas soluções e tecnologias para oferecer o melhor aos nossos clientes.',
  },
  {
    icon: <GroupsIcon fontSize="large" color="primary" />,
    title: 'Colaboração',
    description: 'Acreditamos no poder do trabalho em equipe e na construção de relacionamentos duradouros.',
  },
  {
    icon: <BusinessIcon fontSize="large" color="primary" />,
    title: 'Transparência',
    description: 'Mantemos uma comunicação clara e honesta com nossos clientes, parceiros e colaboradores.',
  },
];

const AboutPage = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box 
          sx={{ 
            py: 8, 
            textAlign: 'center',
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://source.unsplash.com/random/1600x900/?team)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            borderRadius: 2,
            mb: 6,
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
              Sobre o Money System
            </Typography>
            <Typography variant="h5" paragraph sx={{ mb: 4, opacity: 0.9 }}>
              Transformando a maneira como empreendedores geram renda online desde 2015
            </Typography>
          </Container>
        </Box>

        {/* Nossa História */}
        <Box sx={{ mb: 8 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <HistoryIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                <Typography variant="h3" component="h2">
                  Nossa História
                </Typography>
              </Box>
              <Typography variant="body1" paragraph>
                O Money System nasceu em 2015 com uma missão clara: democratizar o acesso a ferramentas de monetização online para empreendedores de todos os portes.
              </Typography>
              <Typography variant="body1" paragraph>
                Fundada por Roberto Almeida, que enfrentou dificuldades para monetizar seu próprio negócio digital, a empresa rapidamente se tornou referência no mercado por oferecer soluções éticas, transparentes e eficientes.
              </Typography>
              <Typography variant="body1" paragraph>
                Hoje, atendemos mais de 10.000 clientes em todo o Brasil e América Latina, ajudando-os a transformar suas paixões em negócios lucrativos através de nossas múltiplas soluções de monetização.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://source.unsplash.com/random/600x400/?startup"
                alt="Nossa História"
                sx={{ width: '100%', borderRadius: 2, boxShadow: 3 }}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Missão, Visão e Valores */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h3" component="h2" gutterBottom>
            Missão, Visão e Valores
          </Typography>
          <Divider sx={{ width: '80px', mx: 'auto', my: 3, borderColor: 'primary.main', borderWidth: 2 }} />
          
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ p: 4, height: '100%', bgcolor: 'primary.light', color: 'white' }}>
                <Typography variant="h4" gutterBottom>Missão</Typography>
                <Typography variant="body1">
                  Capacitar empreendedores digitais com ferramentas éticas e eficientes para monetização online, promovendo crescimento sustentável e independência financeira.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ p: 4, height: '100%', bgcolor: 'secondary.light', color: 'white' }}>
                <Typography variant="h4" gutterBottom>Visão</Typography>
                <Typography variant="body1">
                  Ser a plataforma líder em soluções de monetização na América Latina, reconhecida pela inovação, ética e pelo impacto positivo na vida de milhares de empreendedores.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ p: 4, height: '100%', bgcolor: 'primary.dark', color: 'white' }}>
                <Typography variant="h4" gutterBottom>Valores</Typography>
                <Typography variant="body1">
                  Ética, transparência, inovação, colaboração e foco no cliente são os pilares que guiam todas as nossas decisões e ações.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Nossos Valores */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            Nossos Valores
          </Typography>
          <Typography variant="h6" color="text.secondary" textAlign="center" sx={{ mb: 6 }}>
            Princípios que guiam nossas ações e decisões
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    {value.icon}
                  </Box>
                  <Typography variant="h5" component="h3" textAlign="center" gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" textAlign="center">
                    {value.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Nossa Equipe */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            Nossa Equipe
          </Typography>
          <Typography variant="h6" color="text.secondary" textAlign="center" sx={{ mb: 6 }}>
            Conheça os profissionais por trás do Money System
          </Typography>
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                  <Avatar
                    src={member.avatar}
                    alt={member.name}
                    sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
                  />
                  <Typography variant="h6" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    {member.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.bio}
                  </Typography>
                </Paper>
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
            Faça parte da nossa história
          </Typography>
          <Typography variant="h6" paragraph sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
            Junte-se a milhares de empreendedores que estão transformando seus negócios digitais com nossas soluções
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button 
              component={RouterLink} 
              to="/servicos" 
              variant="contained" 
              color="secondary" 
              size="large"
              sx={{ px: 4, py: 1.5 }}
            >
              Conhecer Soluções
            </Button>
            <Button 
              component={RouterLink} 
              to="/contato" 
              variant="outlined" 
              color="secondary" 
              size="large"
              sx={{ px: 4, py: 1.5, bgcolor: 'rgba(255,255,255,0.1)' }}
            >
              Fale Conosco
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;