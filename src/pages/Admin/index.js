import React from "react";

import { Container, ContainerItens } from './styles'

import Orders from './Orders'
import { SideMenuAdmin } from "../../components/SideMenuAdmin";
import ListProducts from "./ListProducts";
import paths from "../../Constants/paths";
import NewProduct from "./NewProduct";
import NewCategory from "./NewCategory";
import ListUsers from "./ListUsers"
import UpdateProduct from "./UpdateProduct";

export function Admin({ match: { path }}) {
    return(
        <Container>
            <SideMenuAdmin path={ path }/>
            <ContainerItens>
                {path === paths.Order && <Orders/>}
                {path === paths.Products && <ListProducts/>}
                {path === paths.NewProduct && <NewProduct/>}
                {path === paths.NewCategory && <NewCategory/>}
                {path === paths.ListUsers && <ListUsers/>}
                {path === paths.UpdateProduct && <UpdateProduct/>}
            </ContainerItens>
        </Container>
    )
}