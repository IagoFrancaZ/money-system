import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
  Chip,
  Menu,
  MenuItem,
  Avatar,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

// Dados de exemplo para clientes
const sampleCustomers = [
  {
    id: 'CUS001',
    name: 'João Silva',
    email: 'joao.silva@email.com',
    phone: '(11) 98765-4321',
    orders: 5,
    totalSpent: 'R$ 1.250,00',
    status: 'Ativo',
    lastPurchase: '15 Jun 2023',
  },
  {
    id: 'CUS002',
    name: 'Maria Oliveira',
    email: 'maria.oliveira@email.com',
    phone: '(21) 98765-4321',
    orders: 3,
    totalSpent: 'R$ 750,00',
    status: 'Ativo',
    lastPurchase: '10 Jun 2023',
  },
  {
    id: 'CUS003',
    name: 'Pedro Santos',
    email: 'pedro.santos@email.com',
    phone: '(31) 98765-4321',
    orders: 1,
    totalSpent: 'R$ 250,00',
    status: 'Inativo',
    lastPurchase: '05 Mai 2023',
  },
  {
    id: 'CUS004',
    name: 'Ana Souza',
    email: 'ana.souza@email.com',
    phone: '(41) 98765-4321',
    orders: 8,
    totalSpent: 'R$ 2.100,00',
    status: 'Ativo',
    lastPurchase: '12 Jun 2023',
  },
  {
    id: 'CUS005',
    name: 'Carlos Ferreira',
    email: 'carlos.ferreira@email.com',
    phone: '(51) 98765-4321',
    orders: 2,
    totalSpent: 'R$ 450,00',
    status: 'Ativo',
    lastPurchase: '08 Jun 2023',
  },
  {
    id: 'CUS006',
    name: 'Fernanda Lima',
    email: 'fernanda.lima@email.com',
    phone: '(61) 98765-4321',
    orders: 0,
    totalSpent: 'R$ 0,00',
    status: 'Inativo',
    lastPurchase: 'Nunca',
  },
  {
    id: 'CUS007',
    name: 'Roberto Alves',
    email: 'roberto.alves@email.com',
    phone: '(71) 98765-4321',
    orders: 4,
    totalSpent: 'R$ 890,00',
    status: 'Ativo',
    lastPurchase: '01 Jun 2023',
  },
  {
    id: 'CUS008',
    name: 'Juliana Costa',
    email: 'juliana.costa@email.com',
    phone: '(81) 98765-4321',
    orders: 6,
    totalSpent: 'R$ 1.560,00',
    status: 'Ativo',
    lastPurchase: '18 Jun 2023',
  },
];

const CustomersPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  // Manipuladores de eventos
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  const handleMenuOpen = (event, customerId) => {
    setAnchorEl(event.currentTarget);
    setSelectedCustomerId(customerId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedCustomerId(null);
  };

  // Filtragem de clientes com base no termo de pesquisa
  const filteredCustomers = sampleCustomers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginação
  const paginatedCustomers = filteredCustomers.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box sx={{ py: 3 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4">Clientes</Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
          >
            Novo Cliente
          </Button>
        </Box>

        {/* Estatísticas rápidas */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom variant="overline">
                  TOTAL DE CLIENTES
                </Typography>
                <Typography variant="h4">{sampleCustomers.length}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom variant="overline">
                  CLIENTES ATIVOS
                </Typography>
                <Typography variant="h4">
                  {sampleCustomers.filter(c => c.status === 'Ativo').length}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom variant="overline">
                  PEDIDOS TOTAIS
                </Typography>
                <Typography variant="h4">
                  {sampleCustomers.reduce((total, customer) => total + customer.orders, 0)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom variant="overline">
                  TICKET MÉDIO
                </Typography>
                <Typography variant="h4">
                  R$ 906,25
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Barra de pesquisa e filtros */}
        <Paper sx={{ p: 2, mb: 3 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6} md={8}>
              <TextField
                fullWidth
                placeholder="Pesquisar clientes..."
                variant="outlined"
                value={searchTerm}
                onChange={handleSearchChange}
                InputProps={{
                  startAdornment: <SearchIcon color="action" sx={{ mr: 1 }} />,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Button
                fullWidth
                color="inherit"
                startIcon={<FilterListIcon />}
                sx={{ height: '56px' }}
                variant="outlined"
              >
                Filtros
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {/* Tabela de clientes */}
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Cliente</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Telefone</TableCell>
                  <TableCell>Pedidos</TableCell>
                  <TableCell>Total Gasto</TableCell>
                  <TableCell>Última Compra</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="right">Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedCustomers.map((customer) => (
                  <TableRow hover key={customer.id}>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ mr: 2, bgcolor: 'primary.light' }}>
                          {customer.name.charAt(0)}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle2">{customer.name}</Typography>
                          <Typography variant="body2" color="textSecondary">{customer.id}</Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.phone}</TableCell>
                    <TableCell>{customer.orders}</TableCell>
                    <TableCell>{customer.totalSpent}</TableCell>
                    <TableCell>{customer.lastPurchase}</TableCell>
                    <TableCell>
                      <Chip
                        label={customer.status}
                        color={customer.status === 'Ativo' ? 'success' : 'default'}
                        size="small"
                      />
                    </TableCell>
                    <TableCell align="right">
                      <IconButton size="small" onClick={(e) => handleMenuOpen(e, customer.id)}>
                        <MoreVertIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredCustomers.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage="Itens por página"
          />
        </Paper>

        {/* Menu de ações */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>
            <EditIcon fontSize="small" sx={{ mr: 1 }} />
            Editar
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <ShoppingBagIcon fontSize="small" sx={{ mr: 1 }} />
            Ver Pedidos
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <DeleteIcon fontSize="small" sx={{ mr: 1 }} />
            Excluir
          </MenuItem>
        </Menu>
      </Container>
    </Box>
  );
};

export default CustomersPage;