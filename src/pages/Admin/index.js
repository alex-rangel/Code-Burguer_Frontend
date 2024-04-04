import React from "react";

import { Container, ContainerItens } from './styles'

import Orders from './Orders'
import { SideMenuAdmin } from "../../components/SideMenuAdmin";
import ListProducts from "./ListProducts";
import paths from "../../Constants/paths";
import NewProduct from "./NewProduct";

export function Admin({ match: { path }}) {
    return(
        <Container>
            <SideMenuAdmin path={ path }/>
            <ContainerItens>
                {path === paths.Order && <Orders/>}
                {path === paths.Products && <ListProducts/>}
                {path === paths.NewProduct && <NewProduct/>}
            </ContainerItens>
        </Container>
    )
}