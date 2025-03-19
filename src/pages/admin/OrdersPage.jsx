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
import ReceiptIcon from '@mui/icons-material/Receipt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

// Dados de exemplo para pedidos
const sampleOrders = [
  {
    id: 'ORD001',
    customer: 'João Silva',
    date: '15 Jun 2023',
    amount: 'R$ 259,90',
    status: 'Entregue',
    items: 2,
    payment: 'Cartão de Crédito',
  },
  {
    id: 'ORD002',
    customer: 'Maria Oliveira',
    date: '14 Jun 2023',
    amount: 'R$ 125,00',
    status: 'Pendente',
    items: 1,
    payment: 'Boleto',
  },
  {
    id: 'ORD003',
    customer: 'Pedro Santos',
    date: '13 Jun 2023',
    amount: 'R$ 560,50',
    status: 'Processando',
    items: 3,
    payment: 'PIX',
  },
  {
    id: 'ORD004',
    customer: 'Ana Souza',
    date: '12 Jun 2023',
    amount: 'R$ 89,90',
    status: 'Entregue',
    items: 1,
    payment: 'Cartão de Crédito',
  },
  {
    id: 'ORD005',
    customer: 'Carlos Ferreira',
    date: '11 Jun 2023',
    amount: 'R$ 320,75',
    status: 'Cancelado',
    items: 2,
    payment: 'Cartão de Débito',
  },
  {
    id: 'ORD006',
    customer: 'Fernanda Lima',
    date: '10 Jun 2023',
    amount: 'R$ 450,00',
    status: 'Entregue',
    items: 4,
    payment: 'PIX',
  },
  {
    id: 'ORD007',
    customer: 'Roberto Alves',
    date: '09 Jun 2023',
    amount: 'R$ 175,50',
    status: 'Processando',
    items: 2,
    payment: 'Boleto',
  },
  {
    id: 'ORD008',
    customer: 'Juliana Costa',
    date: '08 Jun 2023',
    amount: 'R$ 680,25',
    status: 'Pendente',
    items: 5,
    payment: 'Cartão de Crédito',
  },
];

const OrdersPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

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

  const handleMenuOpen = (event, orderId) => {
    setAnchorEl(event.currentTarget);
    setSelectedOrderId(orderId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedOrderId(null);
  };

  // Filtragem de pedidos com base no termo de pesquisa
  const filteredOrders = sampleOrders.filter((order) =>
    order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginação
  const paginatedOrders = filteredOrders.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  // Função para renderizar o ícone de status
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Entregue':
        return <CheckCircleIcon fontSize="small" />;
      case 'Pendente':
        return <ReceiptIcon fontSize="small" />;
      case 'Processando':
        return <LocalShippingIcon fontSize="small" />;
      case 'Cancelado':
        return <CancelIcon fontSize="small" />;
      default:
        return <ReceiptIcon fontSize="small" />;
    }
  };

  // Função para obter a cor do status
  const getStatusColor = (status) => {
    switch (status) {
      case 'Entregue':
        return 'success';
      case 'Pendente':
        return 'warning';
      case 'Processando':
        return 'info';
      case 'Cancelado':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Box sx={{ py: 3 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4">Pedidos</Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
          >
            Novo Pedido
          </Button>
        </Box>

        {/* Estatísticas rápidas */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom variant="overline">
                  TOTAL DE PEDIDOS
                </Typography>
                <Typography variant="h4">{sampleOrders.length}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom variant="overline">
                  PEDIDOS ENTREGUES
                </Typography>
                <Typography variant="h4">
                  {sampleOrders.filter(o => o.status === 'Entregue').length}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom variant="overline">
                  PEDIDOS PENDENTES
                </Typography>
                <Typography variant="h4">
                  {sampleOrders.filter(o => o.status === 'Pendente' || o.status === 'Processando').length}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom variant="overline">
                  PEDIDOS CANCELADOS
                </Typography>
                <Typography variant="h4">
                  {sampleOrders.filter(o => o.status === 'Cancelado').length}
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
                placeholder="Pesquisar pedidos..."
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

        {/* Tabela de pedidos */}
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Cliente</TableCell>
                  <TableCell>Data</TableCell>
                  <TableCell>Itens</TableCell>
                  <TableCell>Pagamento</TableCell>
                  <TableCell>Valor</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="right">Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedOrders.map((order) => (
                  <TableRow hover key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>{order.items}</TableCell>
                    <TableCell>{order.payment}</TableCell>
                    <TableCell>{order.amount}</TableCell>
                    <TableCell>
                      <Chip
                        icon={getStatusIcon(order.status)}
                        label={order.status}
                        color={getStatusColor(order.status)}
                        size="small"
                      />
                    </TableCell>
                    <TableCell align="right">
                      <IconButton size="small" onClick={(e) => handleMenuOpen(e, order.id)}>
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
            count={filteredOrders.length}
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
            <DeleteIcon fontSize="small" sx={{ mr: 1 }} />
            Cancelar Pedido
          </MenuItem>
        </Menu>
      </Container>
    </Box>
  );
};

export default OrdersPage;