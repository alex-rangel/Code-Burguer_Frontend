import React, { useState, useEffect } from "react";
import { Container } from './style'

import api from "../../../services/api";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const ListUsers = () => {
  const [users, setUsers] = useState()

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('user')

      setUsers(data)
    }

    loadProducts()
  }, [])

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>E-mail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map(user => (
                user.admin !== true && (
                  <TableRow
                    key={user.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {user.nome}
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                  </TableRow>
                )
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ListUsers