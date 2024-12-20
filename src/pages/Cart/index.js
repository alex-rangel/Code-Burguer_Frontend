import React from "react";
import Cartlogo from "../../assets/Banner.jpg"
import { CartItems, CartResume } from "../../components";

import { Container, CartImg, Wrapper } from "./style"

export function Cart(){

    return(
        <Container>
            <CartImg src={Cartlogo} alt="imagem do baner da pagina de carrinho"/>
            <Wrapper>
                <CartItems/>
                <CartResume/>
            </Wrapper>
        </Container>
    )
}