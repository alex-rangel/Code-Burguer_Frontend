import React, { useState, useEffect } from "react";
import { Container, Img, Editbutton } from './style'

import api from "../../../services/api";
import formatCurrency from '../../../utils/formatCurrency'

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


 
const ListProducts = ( ) =>{
const [products, setProducts] = useState()

    useEffect(() => {
        async function loadProducts() {
            const { data } = await api.get('produtos')
            console.log(data)

            setProducts(data)
        }

        loadProducts()
    }, [])

    function isOffer(offerStatus){
      if(offerStatus){
        return <CheckBoxIcon aligin style={{color: '#228b22' }}/>
      }
      return <CancelIcon style={{color: '#cc1717' }}/>
    }

    return(
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
              <TableCell align="center">{isOffer(product.oferta)}</TableCell>
              <TableCell align="center">
                <Img src={product.url} alt="imagem do produto"/>
              </TableCell>
              <TableCell>
                <Editbutton/>
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