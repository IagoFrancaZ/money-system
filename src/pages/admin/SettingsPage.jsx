import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  Paper,
  Switch,
  TextField,
  Typography,
  Tab,
  Tabs,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Alert,
  Snackbar,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import SecurityIcon from '@mui/icons-material/Security';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PaymentIcon from '@mui/icons-material/Payment';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

const SettingsPage = () => {
  const [tabValue, setTabValue] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  
  // Estados para as configurações
  const [settings, setSettings] = useState({
    general: {
      siteName: 'Money System',
      siteDescription: 'Plataforma de monetização online',
      emailContact: 'contato@moneysystem.com',
      phoneContact: '(11) 99999-9999',
      maintenanceMode: false,
    },
    notifications: {
      emailNotifications: true,
      smsNotifications: false,
      orderUpdates: true,
      marketingEmails: false,
      systemAlerts: true,
    },
    security: {
      twoFactorAuth: false,
      passwordExpiration: 90,
      sessionTimeout: 30,
      ipRestriction: false,
    },
    payment: {
      acceptCreditCard: true,
      acceptDebitCard: true,
      acceptPix: true,
      acceptBoleto: true,
      autoCapture: true,
      paymentGateway: 'Stripe',
    },
  });

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleSettingChange = (category, setting, value) => {
    setSettings({
      ...settings,
      [category]: {
        ...settings[category],
        [setting]: value,
      },
    });
  };

  const handleTextChange = (category, setting, event) => {
    handleSettingChange(category, setting, event.target.value);
  };

  const handleSwitchChange = (category, setting, event) => {
    handleSettingChange(category, setting, event.target.checked);
  };

  const handleSaveSettings = () => {
    // Aqui seria implementada a lógica para salvar as configurações
    setSnackbarMessage('Configurações salvas com sucesso!');
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Box sx={{ py: 3 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ mb: 4 }}>
            Configurações
          </Typography>

          <Paper sx={{ mb: 4 }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab icon={<SettingsIcon />} label="Geral" />
              <Tab icon={<NotificationsIcon />} label="Notificações" />
              <Tab icon={<SecurityIcon />} label="Segurança" />
              <Tab icon={<PaymentIcon />} label="Pagamentos" />
            </Tabs>
          </Paper>

          {/* Configurações Gerais */}
          {tabValue === 0 && (
            <Card>
              <CardHeader title="Configurações Gerais" />
              <Divider />
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Nome do Site"
                      margin="normal"
                      name="siteName"
                      value={settings.general.siteName}
                      onChange={(e) => handleTextChange('general', 'siteName', e)}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Descrição do Site"
                      margin="normal"
                      name="siteDescription"
                      value={settings.general.siteDescription}
                      onChange={(e) => handleTextChange('general', 'siteDescription', e)}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Email de Contato"
                      margin="normal"
                      name="emailContact"
                      value={settings.general.emailContact}
                      onChange={(e) => handleTextChange('general', 'emailContact', e)}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Telefone de Contato"
                      margin="normal"
                      name="phoneContact"
                      value={settings.general.phoneContact}
                      onChange={(e) => handleTextChange('general', 'phoneContact', e)}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={settings.general.maintenanceMode}
                          onChange={(e) => handleSwitchChange('general', 'maintenanceMode', e)}
                          name="maintenanceMode"
                          color="primary"
                        />
                      }
                      label="Modo de Manutenção"
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <Divider />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={handleSaveSettings}
                  startIcon={<SaveIcon />}
                >
                  Salvar Alterações
                </Button>
              </Box>
            </Card>
          )}

          {/* Configurações de Notificações */}
          {tabValue === 1 && (
            <Card>
              <CardHeader title="Configurações de Notificações" />
              <Divider />
              <CardContent>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Notificações por Email"
                      secondary="Receba atualizações importantes por email"
                    />
                    <ListItemSecondaryAction>
                      <Switch
                        edge="end"
                        checked={settings.notifications.emailNotifications}
                        onChange={(e) => handleSwitchChange('notifications', 'emailNotifications', e)}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText
                      primary="Notificações por SMS"
                      secondary="Receba atualizações importantes por SMS"
                    />
                    <ListItemSecondaryAction>
                      <Switch
                        edge="end"
                        checked={settings.notifications.smsNotifications}
                        onChange={(e) => handleSwitchChange('notifications', 'smsNotifications', e)}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText
                      primary="Atualizações de Pedidos"
                      secondary="Receba notificações sobre mudanças no status dos pedidos"
                    />
                    <ListItemSecondaryAction>
                      <Switch
                        edge="end"
                        checked={settings.notifications.orderUpdates}
                        onChange={(e) => handleSwitchChange('notifications', 'orderUpdates', e)}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText
                      primary="Emails de Marketing"
                      secondary="Receba ofertas e promoções por email"
                    />
                    <ListItemSecondaryAction>
                      <Switch
                        edge="end"
                        checked={settings.notifications.marketingEmails}
                        onChange={(e) => handleSwitchChange('notifications', 'marketingEmails', e)}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText
                      primary="Alertas do Sistema"
                      secondary="Receba alertas sobre atualizações e manutenções do sistema"
                    />
                    <ListItemSecondaryAction>
                      <Switch
                        edge="end"
                        checked={settings.notifications.systemAlerts}
                        onChange={(e) => handleSwitchChange('notifications', 'systemAlerts', e)}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
              </CardContent>
              <Divider />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={handleSaveSettings}
                  startIcon={<SaveIcon />}
                >
                  Salvar Alterações
                </Button>
              </Box>
            </Card>
          )}

          {/* Configurações de Segurança */}
          {tabValue === 2 && (
            <Card>
              <CardHeader title="Configurações de Segurança" />
              <Divider />
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={settings.security.twoFactorAuth}
                          onChange={(e) => handleSwitchChange('security', 'twoFactorAuth', e)}
                        />
                      }
                      label="Autenticação de Dois Fatores"
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <Divider />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={handleSaveSettings}
                  startIcon={<SaveIcon />}
                >
                  Salvar Alterações
                </Button>
              </Box>
            </Card>
          )}
        </Container>
      </Box>
      <Alert onClose={handleCloseSnackbar} open={openSnackbar} message={snackbarMessage} />
    </>
  );
};


export default SettingsPage;