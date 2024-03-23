import React from "react";

import { Container, Image, ProductName, ProductPrice } from "./style";
import { Button } from "../index"
import { useCart } from "../../hooks/CartContext";

export function CardProduct({product}){

    const { putProductInCart } = useCart()

    return (
        <Container>
            
                <Image src={product.url} alt="Imagem do produto"/>
            <div>
                <ProductName>{product.nome}</ProductName>
                <ProductPrice>{product.formatedPrice}</ProductPrice>
                <Button onClick={() => putProductInCart(product)}>Adicionar</Button>
            </div>
        </Container>
    )
}