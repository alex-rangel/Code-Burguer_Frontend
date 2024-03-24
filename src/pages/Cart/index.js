import React from "react";
import Cartlogo from "../../assets/CartImage.svg"
import { CartItems } from "../../components";

import { Container, CartImg } from "./style"

export function Cart(){

    return(
        <Container>
            <CartImg src={Cartlogo} alt="imagem do baner da pagina de carrinho"/>
            <CartItems/>
        </Container>
    )
}