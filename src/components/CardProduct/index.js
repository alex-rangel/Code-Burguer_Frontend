import React from "react";

import { Container, Image, ProductName, ProductPrice } from "./style";
import Button from "../Button"

function CardProduct({product}){
    return (
        <Container>
            
                <Image src={product.url} alt="Imagem do produto"/>
            <div>
                <ProductName>{product.nome}</ProductName>
                <ProductPrice>{product.formatedPrice}</ProductPrice>
                <Button>Adicionar</Button>
            </div>
        </Container>
    )
}

export default CardProduct