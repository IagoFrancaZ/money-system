import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import CampaignIcon from '@mui/icons-material/Campaign';
import StorefrontIcon from '@mui/icons-material/Storefront';

const services = [
  {
    id: 1,
    title: 'E-commerce Completo',
    icon: <ShoppingCartIcon fontSize="large" />,
    description: 'Crie sua loja virtual completa para vender produtos físicos e digitais com facilidade.',
    image: 'https://source.unsplash.com/random/800x600/?ecommerce',
    features: [
      'Catálogo de produtos ilimitado',
      'Processamento de pagamentos integrado',
      'Gestão de estoque automatizada',
      'Checkout otimizado para conversão',
      'Relatórios detalhados de vendas',
      'Integração com marketplaces',
    ],
  },
  {
    id: 2,
    title: 'Programa de Afiliados',
    icon: <PeopleIcon fontSize="large" />,
    description: 'Multiplique suas vendas com um exército de afiliados promovendo seus produtos e serviços.',
    image: 'https://source.unsplash.com/random/800x600/?affiliate',
    features: [
      'Painel de afiliados intuitivo',
      'Comissões personalizáveis por produto',
      'Rastreamento de cliques e conversões',
      'Materiais promocionais prontos',
      'Pagamentos automáticos para afiliados',
      'Relatórios de desempenho em tempo real',
    ],
  },
  {
    id: 3,
    title: 'Plataforma de Cursos Online',
    icon: <SchoolIcon fontSize="large" />,
    description: 'Crie, venda e gerencie cursos online com nossa plataforma educacional completa.',
    image: 'https://source.unsplash.com/random/800x600/?education',
    features: [
      'Hospedagem de vídeos em alta definição',
      'Criação de módulos e lições',
      'Fóruns de discussão para alunos',
      'Certificados automáticos',
      'Avaliações e questionários',
      'Área de membros exclusiva',
    ],
  },
  {
    id: 4,
    title: 'Assinaturas e Membros',
    icon: <SubscriptionsIcon fontSize="large" />,
    description: 'Crie receita recorrente com planos de assinatura e áreas de membros exclusivas.',
    image: 'https://source.unsplash.com/random/800x600/?subscription',
    features: [
      'Múltiplos planos de assinatura',
      'Conteúdo exclusivo para membros',
      'Cobrança recorrente automática',
      'Gestão de cancelamentos e upgrades',
      'Promoções e cupons de desconto',
      'Relatórios de retenção de clientes',
    ],
  },
  {
    id: 5,
    title: 'Monetização com Publicidade',
    icon: <CampaignIcon fontSize="large" />,
    description: 'Gere receita passiva com anúncios contextuais e parcerias estratégicas.',
    image: 'https://source.unsplash.com/random/800x600/?advertising',
    features: [
      'Anúncios contextuais inteligentes',
      'Parcerias com marcas premium',
      'Conteúdo patrocinado',
      'Otimização de receita por visitante',
      'Análise de desempenho de anúncios',
      'Bloqueio de categorias indesejadas',
    ],
  },
  {
    id: 6,
    title: 'Marketplace Multivendedor',
    icon: <StorefrontIcon fontSize="large" />,
    description: 'Crie seu próprio marketplace onde múltiplos vendedores podem oferecer seus produtos e serviços.',
    image: 'https://source.unsplash.com/random/800x600/?marketplace',
    features: [
      'Comissões personalizáveis por categoria',
      'Sistema de avaliação de vendedores',
      'Gestão de disputas e reembolsos',
      'Painel de controle para vendedores',
      'Verificação de vendedores',
      'Pagamentos automáticos para vendedores',
    ],
  },
];

const ServicesPage = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Serviços para Geração de Renda
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
            Soluções completas e éticas para maximizar seus resultados online
          </Typography>
          <Divider sx={{ width: '80px', mx: 'auto', my: 3, borderColor: 'primary.main', borderWidth: 2 }} />
        </Box>

        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item xs={12} md={6} key={service.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ color: 'primary.main', mr: 1 }}>{service.icon}</Box>
                    <Typography variant="h5" component="h2">
                      {service.title}
                    </Typography>
                  </Box>
                  <Typography variant="body1" paragraph>
                    {service.description}
                  </Typography>
                  <List dense>
                    {service.features.map((feature, index) => (
                      <ListItem key={index} disableGutters>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleOutlineIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    component={RouterLink}
                    to="/precos"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Ver Planos e Preços
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 8, p: 4, bgcolor: 'primary.light', borderRadius: 2 }}>
          <Typography variant="h4" component="h2" gutterBottom color="white">
            Pronto para começar a gerar renda online?
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 4 }} color="white">
            Escolha a solução ideal para o seu negócio e comece a monetizar hoje mesmo.
          </Typography>
          <Button
            component={RouterLink}
            to="/cadastro"
            variant="contained"
            color="secondary"
            size="large"
            sx={{ px: 4, py: 1.5 }}
          >
            Começar Agora
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesPage;