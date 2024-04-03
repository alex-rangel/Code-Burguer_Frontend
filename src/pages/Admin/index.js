import React from "react";

import { Container } from './styles'

import Orders from './Orders'
import { SideMenuAdmin } from "../../components/SideMenuAdmin";
import ListProducts from "./ListProducts";

export function Admin() {
    return(
        <Container>
            <SideMenuAdmin/>
            {/* <Orders/> */}
            <ListProducts/>
        </Container>
    )
}