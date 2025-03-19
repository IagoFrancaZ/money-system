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
  ListItemIcon,
  LinearProgress,
  Button,
  Tab,
  Tabs,
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import DevicesIcon from '@mui/icons-material/Devices';
import PublicIcon from '@mui/icons-material/Public';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// Componente para os cartões de métricas
const MetricCard = ({ title, value, change, changeType, icon, color }) => {
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
            <Box
              sx={{
                backgroundColor: color,
                borderRadius: 1,
                p: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {icon}
            </Box>
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
    <Card>
      <CardHeader title="Vendas por Período" />
      <Divider />
      <CardContent>
        <Box sx={{ height: 350 }}>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
            Comparativo de vendas dos últimos 6 meses
          </Typography>
          
          {/* Gráfico simplificado usando barras de progresso */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" gutterBottom>Janeiro</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                  <LinearProgress variant="determinate" value={65} color="primary" sx={{ height: 10, borderRadius: 5 }} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant="body2" color="textSecondary">65%</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" gutterBottom>Fevereiro</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                  <LinearProgress variant="determinate" value={50} color="primary" sx={{ height: 10, borderRadius: 5 }} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant="body2" color="textSecondary">50%</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" gutterBottom>Março</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                  <LinearProgress variant="determinate" value={75} color="primary" sx={{ height: 10, borderRadius: 5 }} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant="body2" color="textSecondary">75%</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" gutterBottom>Abril</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                  <LinearProgress variant="determinate" value={85} color="primary" sx={{ height: 10, borderRadius: 5 }} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant="body2" color="textSecondary">85%</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" gutterBottom>Maio</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                  <LinearProgress variant="determinate" value={90} color="primary" sx={{ height: 10, borderRadius: 5 }} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant="body2" color="textSecondary">90%</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" gutterBottom>Junho</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                  <LinearProgress variant="determinate" value={95} color="primary" sx={{ height: 10, borderRadius: 5 }} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant="body2" color="textSecondary">95%</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
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

// Componente para o gráfico de tráfego
const TrafficChart = () => {
  return (
    <Card>
      <CardHeader title="Fontes de Tráfego" />
      <Divider />
      <CardContent>
        <Box sx={{ height: 350 }}>
          <List>
            <ListItem>
              <ListItemIcon>
                <Box sx={{ bgcolor: 'primary.main', width: 16, height: 16, borderRadius: '50%' }} />
              </ListItemIcon>
              <ListItemText 
                primary="Pesquisa Orgânica" 
                secondary={
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Box sx={{ width: '100%', mr: 1 }}>
                      <LinearProgress variant="determinate" value={42} color="primary" sx={{ height: 8, borderRadius: 5 }} />
                    </Box>
                    <Box sx={{ minWidth: 35 }}>
                      <Typography variant="body2" color="textSecondary">42%</Typography>
                    </Box>
                  </Box>
                } 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Box sx={{ bgcolor: 'secondary.main', width: 16, height: 16, borderRadius: '50%' }} />
              </ListItemIcon>
              <ListItemText 
                primary="Redes Sociais" 
                secondary={
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Box sx={{ width: '100%', mr: 1 }}>
                      <LinearProgress variant="determinate" value={28} color="secondary" sx={{ height: 8, borderRadius: 5 }} />
                    </Box>
                    <Box sx={{ minWidth: 35 }}>
                      <Typography variant="body2" color="textSecondary">28%</Typography>
                    </Box>
                  </Box>
                } 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Box sx={{ bgcolor: 'success.main', width: 16, height: 16, borderRadius: '50%' }} />
              </ListItemIcon>
              <ListItemText 
                primary="Email Marketing" 
                secondary={
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Box sx={{ width: '100%', mr: 1 }}>
                      <LinearProgress variant="determinate" value={15} color="success" sx={{ height: 8, borderRadius: 5 }} />
                    </Box>
                    <Box sx={{ minWidth: 35 }}>
                      <Typography variant="body2" color="textSecondary">15%</Typography>
                    </Box>
                  </Box>
                } 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Box sx={{ bgcolor: 'warning.main', width: 16, height: 16, borderRadius: '50%' }} />
              </ListItemIcon>
              <ListItemText 
                primary="Tráfego Direto" 
                secondary={
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Box sx={{ width: '100%', mr: 1 }}>
                      <LinearProgress variant="determinate" value={10} color="warning" sx={{ height: 8, borderRadius: 5 }} />
                    </Box>
                    <Box sx={{ minWidth: 35 }}>
                      <Typography variant="body2" color="textSecondary">10%</Typography>
                    </Box>
                  </Box>
                } 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Box sx={{ bgcolor: 'error.main', width: 16, height: 16, borderRadius: '50%' }} />
              </ListItemIcon>
              <ListItemText 
                primary="Outros" 
                secondary={
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Box sx={{ width: '100%', mr: 1 }}>
                      <LinearProgress variant="determinate" value={5} color="error" sx={{ height: 8, borderRadius: 5 }} />
                    </Box>
                    <Box sx={{ minWidth: 35 }}>
                      <Typography variant="body2" color="textSecondary">5%</Typography>
                    </Box>
                  </Box>
                } 
              />
            </ListItem>
          </List>
        </Box>
      </CardContent>
    </Card>
  );
};

// Componente para o gráfico de dispositivos
const DevicesChart = () => {
  return (
    <Card>
      <CardHeader title="Dispositivos" />
      <Divider />
      <CardContent>
        <Box sx={{ height: 350 }}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Box sx={{ textAlign: 'center' }}>
                <DevicesIcon sx={{ fontSize: 48, color: 'primary.main' }} />
                <Typography variant="h6" sx={{ mt: 1 }}>Desktop</Typography>
                <Typography variant="h4" color="primary.main">45%</Typography>
                <Box sx={{ mt: 1 }}>
                  <ArrowDownwardIcon color="error" fontSize="small" />
                  <Typography variant="body2" color="error.main" component="span">
                    5%
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ textAlign: 'center' }}>
                <DevicesIcon sx={{ fontSize: 48, color: 'secondary.main' }} />
                <Typography variant="h6" sx={{ mt: 1 }}>Mobile</Typography>
                <Typography variant="h4" color="secondary.main">50%</Typography>
                <Box sx={{ mt: 1 }}>
                  <ArrowUpwardIcon color="success" fontSize="small" />
                  <Typography variant="body2" color="success.main" component="span">
                    8%
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ textAlign: 'center' }}>
                <DevicesIcon sx={{ fontSize: 48, color: 'success.main' }} />
                <Typography variant="h6" sx={{ mt: 1 }}>Tablet</Typography>
                <Typography variant="h4" color="success.main">5%</Typography>
                <Box sx={{ mt: 1 }}>
                  <ArrowDownwardIcon color="error" fontSize="small" />
                  <Typography variant="body2" color="error.main" component="span">
                    3%
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};


const AnalyticsPage = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ py: 3 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ mb: 4 }}>
          Analytics
        </Typography>

        <Paper sx={{ mb: 4 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Visão Geral" />
            <Tab label="Vendas" />
            <Tab label="Tráfego" />
            <Tab label="Dispositivos" />
          </Tabs>
        </Paper>

        {tabValue === 0 && (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <MetricCard
                title="Vendas Totais"
                value="R$ 24.500"
                change="12%"
                changeType="up"
                icon={<MonetizationOnIcon />}
                color="primary.main"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <MetricCard
                title="Pedidos"
                value="156"
                change="8%"
                changeType="up"
                icon={<ShoppingCartIcon />}
                color="secondary.main"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <MetricCard
                title="Clientes"
                value="2.450"
                change="5%"
                changeType="down"
                icon={<PeopleIcon />}
                color="success.main"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <MetricCard
                title="Conversão"
                value="3.2%"
                change="2%"
                changeType="up"
                icon={<TrendingUpIcon />}
                color="warning.main"
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <SalesChart />
            </Grid>
            <Grid item xs={12} md={4}>
              <TrafficChart />
            </Grid>
            <Grid item xs={12}>
              <DevicesChart />
            </Grid>
          </Grid>
        )}

        {tabValue === 1 && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <SalesChart />
            </Grid>
          </Grid>
        )}

        {tabValue === 2 && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TrafficChart />
            </Grid>
          </Grid>
        )}

        {tabValue === 3 && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <DevicesChart />
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default AnalyticsPage;