import React, { useEffect, useState } from "react";
import Carousel from 'react-elastic-carousel';
import { useHistory } from "react-router-dom";

import ofertas from '../../assets/OFERTAS.png'
import { Container, CategoryImg, ContainerItems, Image, Button } from "./style";
import formatCurrency from "../../utils/formatCurrency";

import { useCart } from '../../hooks/CartContext'

import api from '../../services/api'

export function OffersCarousel() {
    const [offers, setOffers] = useState([])
    const { putProductInCart } = useCart()

    const { push } = useHistory()

    useEffect(() => {
        async function loadOffers() {
            const { data } = await api.get('produtos')

            const onlyOffers = data
            .filter(product => product.oferta)
            .map(product => {
                return {...product, formatedPrice: formatCurrency(product.preco)}
            })
            setOffers(onlyOffers)
        }
        loadOffers()
    }, [])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
        { width: 1300, itemsToShow: 5 }
    ]

    return (
        <Container>
            <CategoryImg src={ofertas} alt="Imagem do titulo do carrossel de ofertas" />

            <Carousel 
            itemsToShow={5}
            style={{width: '90%'}}
            breakPoints={breakPoints}>
                {offers &&
                    offers.map(product => (
                        <ContainerItems key={product.id}>
                            <Image src={product.url} alt="foto do produto" />
                            <p>{product.nome}</p>
                            <p>{product.formatedPrice}</p>
                            <Button onClick={() => {
                                putProductInCart(product)
                                push('/carrinho')
                             }}>
                                Peça agora
                            </Button>
                        </ContainerItems>
                    ))}
            </Carousel>

        </Container>
    )
}