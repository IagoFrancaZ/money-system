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
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';

// Dados de exemplo para produtos
const sampleProducts = [
  {
    id: 'PRD001',
    name: 'Curso de Marketing Digital',
    category: 'Curso',
    price: 'R$ 497,00',
    stock: 'Ilimitado',
    status: 'Ativo',
  },
  {
    id: 'PRD002',
    name: 'E-book: Guia de Vendas Online',
    category: 'E-book',
    price: 'R$ 27,90',
    stock: 'Ilimitado',
    status: 'Ativo',
  },
  {
    id: 'PRD003',
    name: 'Mentoria de Negócios',
    category: 'Serviço',
    price: 'R$ 1.997,00',
    stock: '5 vagas',
    status: 'Limitado',
  },
  {
    id: 'PRD004',
    name: 'Template de Site Responsivo',
    category: 'Template',
    price: 'R$ 147,00',
    stock: 'Ilimitado',
    status: 'Ativo',
  },
  {
    id: 'PRD005',
    name: 'Pacote de Ícones Premium',
    category: 'Gráficos',
    price: 'R$ 37,00',
    stock: 'Ilimitado',
    status: 'Ativo',
  },
  {
    id: 'PRD006',
    name: 'Consultoria de SEO',
    category: 'Serviço',
    price: 'R$ 897,00',
    stock: '3 vagas',
    status: 'Limitado',
  },
  {
    id: 'PRD007',
    name: 'Plugin de Checkout Otimizado',
    category: 'Plugin',
    price: 'R$ 197,00',
    stock: 'Ilimitado',
    status: 'Ativo',
  },
  {
    id: 'PRD008',
    name: 'Curso de Copywriting',
    category: 'Curso',
    price: 'R$ 397,00',
    stock: 'Ilimitado',
    status: 'Inativo',
  },
];

const ProductsPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);

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

  const handleMenuOpen = (event, productId) => {
    setAnchorEl(event.currentTarget);
    setSelectedProductId(productId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedProductId(null);
  };

  // Filtragem de produtos com base no termo de pesquisa
  const filteredProducts = sampleProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginação
  const paginatedProducts = filteredProducts.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box sx={{ py: 3 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4">Produtos</Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
          >
            Novo Produto
          </Button>
        </Box>

        {/* Estatísticas rápidas */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom variant="overline">
                  TOTAL DE PRODUTOS
                </Typography>
                <Typography variant="h4">{sampleProducts.length}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom variant="overline">
                  PRODUTOS ATIVOS
                </Typography>
                <Typography variant="h4">
                  {sampleProducts.filter(p => p.status === 'Ativo').length}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom variant="overline">
                  PRODUTOS LIMITADOS
                </Typography>
                <Typography variant="h4">
                  {sampleProducts.filter(p => p.status === 'Limitado').length}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom variant="overline">
                  PRODUTOS INATIVOS
                </Typography>
                <Typography variant="h4">
                  {sampleProducts.filter(p => p.status === 'Inativo').length}
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
                placeholder="Pesquisar produtos..."
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

        {/* Tabela de produtos */}
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Nome</TableCell>
                  <TableCell>Categoria</TableCell>
                  <TableCell>Preço</TableCell>
                  <TableCell>Estoque</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="right">Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedProducts.map((product) => (
                  <TableRow hover key={product.id}>
                    <TableCell>{product.id}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>
                      <Chip
                        label={product.status}
                        color={
                          product.status === 'Ativo' ? 'success' :
                          product.status === 'Limitado' ? 'warning' : 'default'
                        }
                        size="small"
                      />
                    </TableCell>
                    <TableCell align="right">
                      <IconButton size="small" onClick={(e) => handleMenuOpen(e, product.id)}>
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
            count={filteredProducts.length}
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
            Excluir
          </MenuItem>
        </Menu>
      </Container>
    </Box>
  );
};

export default ProductsPage;