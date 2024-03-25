import React from "react";
import { useHistory } from "react-router-dom";

import { Container, Image, ProductName, ProductPrice } from "./style";
import { Button } from "../index"
import { useCart } from "../../hooks/CartContext";

export function CardProduct({product}){

    const { push } = useHistory()
    const { putProductInCart } = useCart()

    return (
        <Container>
            
                <Image src={product.url} alt="Imagem do produto"/>
            <div>
                <ProductName>{product.nome}</ProductName>
                <ProductPrice>{product.formatedPrice}</ProductPrice>
                <Button onClick={() => {
                    putProductInCart(product)
                    push('/carrinho')
                }}>
                    Adicionar
                </Button>
            </div>
        </Container>
    )
}