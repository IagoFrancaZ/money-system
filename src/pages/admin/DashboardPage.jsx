import React from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
  Button,
  LinearProgress,
} from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InventoryIcon from '@mui/icons-material/Inventory';
import ReceiptIcon from '@mui/icons-material/Receipt';

// Componente para os cartões de estatísticas
const StatCard = ({ icon, title, value, change, changeType, color }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              {title}
            </Typography>
            <Typography color="textPrimary" variant="h4">
              {value}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: color,
                height: 56,
                width: 56
              }}
            >
              {icon}
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            pt: 2,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {changeType === 'up' ? (
            <ArrowUpwardIcon color="success" />
          ) : (
            <ArrowDownwardIcon color="error" />
          )}
          <Typography
            color={changeType === 'up' ? 'success.main' : 'error.main'}
            sx={{ mr: 1 }}
            variant="body2"
          >
            {change}
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Desde o último mês
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

// Componente para o gráfico de vendas (simplificado sem biblioteca de gráficos)
const SalesChart = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Visão Geral de Vendas"
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h6" color="textSecondary" sx={{ mb: 2 }}>
            Dados de vendas dos últimos 6 meses
          </Typography>
          <Box sx={{ width: '100%', mb: 2 }}>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Janeiro
            </Typography>
            <LinearProgress variant="determinate" value={65} color="primary" sx={{ height: 10, borderRadius: 5 }} />
          </Box>
          <Box sx={{ width: '100%', mb: 2 }}>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Fevereiro
            </Typography>
            <LinearProgress variant="determinate" value={50} color="primary" sx={{ height: 10, borderRadius: 5 }} />
          </Box>
          <Box sx={{ width: '100%', mb: 2 }}>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Março
            </Typography>
            <LinearProgress variant="determinate" value={75} color="primary" sx={{ height: 10, borderRadius: 5 }} />
          </Box>
          <Box sx={{ width: '100%', mb: 2 }}>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Abril
            </Typography>
            <LinearProgress variant="determinate" value={85} color="primary" sx={{ height: 10, borderRadius: 5 }} />
          </Box>
          <Box sx={{ width: '100%', mb: 2 }}>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Maio
            </Typography>
            <LinearProgress variant="determinate" value={90} color="primary" sx={{ height: 10, borderRadius: 5 }} />
          </Box>
          <Box sx={{ width: '100%' }}>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Junho
            </Typography>
            <LinearProgress variant="determinate" value={95} color="primary" sx={{ height: 10, borderRadius: 5 }} />
          </Box>
        </Box>
      </CardContent>
      <Divider />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <Button color="primary" endIcon={<TrendingUpIcon />} size="small" variant="text">
          Ver Relatório Completo
        </Button>
      </Box>
    </Card>
  );
};

// Componente para a lista de pedidos recentes
const LatestOrders = () => {
  const orders = [
    {
      id: 'ORD001',
      customer: 'João Silva',
      date: '15 Jun 2023',
      amount: 'R$ 259,90',
      status: 'Entregue'
    },
    {
      id: 'ORD002',
      customer: 'Maria Oliveira',
      date: '14 Jun 2023',
      amount: 'R$ 125,00',
      status: 'Pendente'
    },
    {
      id: 'ORD003',
      customer: 'Pedro Santos',
      date: '13 Jun 2023',
      amount: 'R$ 560,50',
      status: 'Processando'
    },
    {
      id: 'ORD004',
      customer: 'Ana Souza',
      date: '12 Jun 2023',
      amount: 'R$ 89,90',
      status: 'Entregue'
    },
    {
      id: 'ORD005',
      customer: 'Carlos Ferreira',
      date: '11 Jun 2023',
      amount: 'R$ 320,75',
      status: 'Cancelado'
    }
  ];

  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader title="Pedidos Recentes" />
      <Divider />
      <List sx={{ maxHeight: 400, overflow: 'auto' }}>
        {orders.map((order, i) => (
          <React.Fragment key={order.id}>
            <ListItem
              secondaryAction={
                <Typography variant="body2" color="textSecondary">
                  {order.amount}
                </Typography>
              }
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'background.paper' }}>
                  <ReceiptIcon color="primary" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={order.customer}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      {order.id}
                    </Typography>
                    {` — ${order.date} — `}
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color={
                        order.status === 'Entregue' ? 'success.main' :
                        order.status === 'Pendente' ? 'warning.main' :
                        order.status === 'Processando' ? 'info.main' :
                        'error.main'
                      }
                    >
                      {order.status}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            {i < orders.length - 1 && <Divider variant="inset" component="li" />}
          </React.Fragment>
        ))}
      </List>
      <Divider />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <Button color="primary" endIcon={<InventoryIcon />} size="small" variant="text">
          Ver Todos os Pedidos
        </Button>
      </Box>
    </Card>
  );
};

const DashboardPage = () => {
  return (
    <Box sx={{ py: 3 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ mb: 4 }}>
          Dashboard
        </Typography>
        
        {/* Cartões de estatísticas */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              icon={<MonetizationOnIcon />}
              title="RECEITA TOTAL"
              value="R$ 24.895,70"
              change="12%"
              changeType="up"
              color="primary.main"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              icon={<ShoppingCartIcon />}
              title="PEDIDOS"
              value="356"
              change="5%"
              changeType="down"
              color="secondary.main"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              icon={<PeopleIcon />}
              title="CLIENTES"
              value="1.253"
              change="18%"
              changeType="up"
              color="success.main"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              icon={<AttachMoneyIcon />}
              title="TICKET MÉDIO"
              value="R$ 69,93"
              change="10%"
              changeType="up"
              color="warning.main"
            />
          </Grid>
        </Grid>
        
        {/* Gráficos e listas */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <SalesChart />
          </Grid>
          <Grid item xs={12} md={4}>
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DashboardPage;