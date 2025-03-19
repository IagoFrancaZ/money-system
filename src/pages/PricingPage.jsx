import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Paper,
  Stack,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import StarIcon from '@mui/icons-material/Star';
import DiamondIcon from '@mui/icons-material/Diamond';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const pricingPlans = [
  {
    title: 'Básico',
    price: 'R$ 49,90',
    period: '/mês',
    description: 'Ideal para empreendedores iniciantes que desejam começar a monetizar seu negócio digital.',
    icon: <StarIcon fontSize="large" color="primary" />,
    buttonText: 'Começar Agora',
    buttonVariant: 'outlined',
    features: [
      { text: 'E-commerce com até 50 produtos', included: true },
      { text: 'Processamento de pagamentos', included: true },
      { text: 'Relatórios básicos', included: true },
      { text: 'Suporte por email', included: true },
      { text: 'Programa de afiliados', included: false },
      { text: 'Marketplace multivendedor', included: false },
      { text: 'API para integrações', included: false },
      { text: 'Suporte prioritário', included: false },
    ],
    highlight: false,
  },
  {
    title: 'Profissional',
    price: 'R$ 99,90',
    period: '/mês',
    description: 'Perfeito para negócios em crescimento que precisam de mais recursos e capacidade.',
    icon: <WorkspacePremiumIcon fontSize="large" color="primary" />,
    buttonText: 'Escolher Plano',
    buttonVariant: 'contained',
    features: [
      { text: 'E-commerce com produtos ilimitados', included: true },
      { text: 'Processamento de pagamentos', included: true },
      { text: 'Relatórios avançados', included: true },
      { text: 'Suporte por email e chat', included: true },
      { text: 'Programa de afiliados', included: true },
      { text: 'Marketplace multivendedor', included: true },
      { text: 'API para integrações', included: false },
      { text: 'Suporte prioritário', included: false },
    ],
    highlight: true,
  },
  {
    title: 'Enterprise',
    price: 'R$ 249,90',
    period: '/mês',
    description: 'Solução completa para empresas estabelecidas que buscam escalabilidade e recursos premium.',
    icon: <DiamondIcon fontSize="large" color="primary" />,
    buttonText: 'Contato Comercial',
    buttonVariant: 'outlined',
    features: [
      { text: 'E-commerce com produtos ilimitados', included: true },
      { text: 'Processamento de pagamentos', included: true },
      { text: 'Relatórios avançados e personalizados', included: true },
      { text: 'Suporte por email, chat e telefone', included: true },
      { text: 'Programa de afiliados avançado', included: true },
      { text: 'Marketplace multivendedor', included: true },
      { text: 'API para integrações', included: true },
      { text: 'Suporte prioritário 24/7', included: true },
    ],
    highlight: false,
  },
];

const additionalFeatures = [
  {
    title: 'Sem Taxas Ocultas',
    description: 'Transparência total nos preços. Você paga apenas o valor do plano, sem surpresas na fatura.',
  },
  {
    title: 'Cancele a Qualquer Momento',
    description: 'Sem contratos de fidelidade. Cancele sua assinatura quando quiser sem multas ou burocracia.',
  },
  {
    title: 'Suporte Especializado',
    description: 'Nossa equipe de especialistas está pronta para ajudar você a maximizar seus resultados.',
  },
  {
    title: 'Atualizações Constantes',
    description: 'Novas funcionalidades são adicionadas regularmente sem custo adicional para assinantes.',
  },
];

const PricingPage = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box 
          sx={{ 
            py: 8, 
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
            <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
              Planos e Preços
            </Typography>
            <Typography variant="h5" paragraph sx={{ mb: 4, opacity: 0.9 }}>
              Escolha o plano ideal para o seu negócio e comece a monetizar hoje mesmo
            </Typography>
          </Container>
        </Box>

        {/* Planos de Preços */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            Nossos Planos
          </Typography>
          <Typography variant="h6" color="text.secondary" textAlign="center" sx={{ mb: 6 }}>
            Soluções flexíveis para cada estágio do seu negócio
          </Typography>
          
          <Grid container spacing={4} alignItems="stretch">
            {pricingPlans.map((plan, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card 
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    ...(plan.highlight && {
                      border: '2px solid',
                      borderColor: 'primary.main',
                      boxShadow: '0 4px 20px rgba(46, 125, 50, 0.2)',
                    }),
                  }}
                >
                  {plan.highlight && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        bgcolor: 'primary.main',
                        color: 'white',
                        px: 2,
                        py: 0.5,
                        borderRadius: 1,
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                      }}
                    >
                      MAIS POPULAR
                    </Box>
                  )}
                  <CardHeader
                    title={
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                        {plan.icon}
                        <Typography variant="h4" component="h3" sx={{ ml: 1 }}>
                          {plan.title}
                        </Typography>
                      </Box>
                    }
                    subheader={
                      <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                        {plan.description}
                      </Typography>
                    }
                    sx={{ textAlign: 'center', pb: 0 }}
                  />
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                      <Typography variant="h3" component="p" color="primary.main" fontWeight="bold">
                        {plan.price}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {plan.period}
                      </Typography>
                    </Box>
                    
                    <Divider sx={{ mb: 2 }} />
                    
                    <List sx={{ flexGrow: 1 }}>
                      {plan.features.map((feature, idx) => (
                        <ListItem key={idx} sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            {feature.included ? 
                              <CheckCircleOutlineIcon color="primary" /> : 
                              <CancelOutlinedIcon color="disabled" />}
                          </ListItemIcon>
                          <ListItemText 
                            primary={feature.text} 
                            sx={{ 
                              '& .MuiListItemText-primary': { 
                                color: feature.included ? 'text.primary' : 'text.disabled',
                                fontSize: '0.9rem',
                              } 
                            }} 
                          />
                        </ListItem>
                      ))}
                    </List>
                    
                    <Box sx={{ mt: 3, textAlign: 'center' }}>
                      <Button
                        component={RouterLink}
                        to="/cadastro"
                        variant={plan.buttonVariant}
                        color="primary"
                        size="large"
                        fullWidth
                      >
                        {plan.buttonText}
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Benefícios Adicionais */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            Todos os Planos Incluem
          </Typography>
          <Typography variant="h6" color="text.secondary" textAlign="center" sx={{ mb: 6 }}>
            Benefícios exclusivos para todos os assinantes
          </Typography>
          
          <Grid container spacing={4}>
            {additionalFeatures.map((feature, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Paper sx={{ p: 3, height: '100%' }}>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* FAQ */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            Perguntas Frequentes
          </Typography>
          <Typography variant="h6" color="text.secondary" textAlign="center" sx={{ mb: 6 }}>
            Tire suas dúvidas sobre nossos planos e serviços
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  Posso mudar de plano depois?
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças entram em vigor no próximo ciclo de faturamento.
                </Typography>
              </Box>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  Existe período de teste?
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Oferecemos um período de teste gratuito de 14 dias para todos os planos, sem necessidade de cartão de crédito.
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  Como funciona o suporte?
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Cada plano inclui diferentes níveis de suporte. O plano Enterprise oferece suporte prioritário 24/7 por email, chat e telefone.
                </Typography>
              </Box>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  Quais formas de pagamento são aceitas?
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Aceitamos cartões de crédito, boleto bancário, PIX e transferência bancária para empresas.
                </Typography>
              </Box>
            </Grid>
          </Grid>
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
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button 
                component={RouterLink} 
                to="/cadastro" 
                variant="contained" 
                color="primary"
                size="large"
                sx={{ px: 4, py: 1.5 }}
              >
                Começar Agora
              </Button>
            </Stack>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default PricingPage;