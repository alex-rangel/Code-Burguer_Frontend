import React, { useState, useEffect } from "react";
import { Container, Img, Editbutton, Button } from './style'

import api from "../../../services/api";
import formatCurrency from '../../../utils/formatCurrency'
import { useHistory } from "react-router-dom";
import { useProduct } from "../../../hooks/ProductContext";

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ListProducts = () => {
  const [products, setProducts] = useState()
  const { putProductData } = useProduct()
  const history = useHistory()

  useEffect(() => {
    loadProducts()
  }, [])

  const handleEditProduct = (product) => {

    putProductData(product);

    history.push('/editar-produto');
  };

  const updadeStatusOffer = async (id) => {
    const productDataFormData = new FormData()

    const { data } = await api.get(`produtos/${id}`)


    const newNome = data.nome
    const newPreco = data.preco
    const newCategoria = data.categoria_id
    const oferta = !data.oferta

    productDataFormData.append('nome', newNome)
    productDataFormData.append('preco', newPreco)
    productDataFormData.append('categoria_id', newCategoria)
    productDataFormData.append('oferta', oferta)

    await api.put(`produtos/${id}`, productDataFormData)

    loadProducts()

  }

  async function loadProducts() {
    const { data } = await api.get('produtos')

    setProducts(data)
  }


  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell align="center">Produto em oferta</TableCell>
              <TableCell>Imagem do produto</TableCell>
              <TableCell>Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.map(product => (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.nome}
                  </TableCell>
                  <TableCell>{formatCurrency(product.preco)}</TableCell>
                  <TableCell align="center"><Button onClick={() => updadeStatusOffer(product.id)}>{
                    product.oferta ? <CheckBoxIcon aligin style={{ color: '#228b22' }} /> : <CancelIcon style={{ color: '#cc1717' }} />
                  }</Button></TableCell>
                  <TableCell align="center">
                    <Img src={product.url} alt="imagem do produto" />
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => handleEditProduct(product)}>
                      <Editbutton />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ListProducts