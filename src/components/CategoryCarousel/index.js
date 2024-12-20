import React, { useEffect, useState } from "react";
import Carousel from 'react-elastic-carousel';

import categorias from '../../assets/CATEGORIAS.png'
import { Container, CategoryImg, ContainerItems, Image, Button } from "./style";

import api from '../../services/api'

export function CategoryCarousel() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categoria')

            setCategories(data)
        }
        loadCategories()
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
            <CategoryImg src={categorias} alt="Imagem do titulo do carrossel de categotias" />

            <Carousel 
            itemsToShow={5}
            style={{width: '90%'}}
            breakPoints={breakPoints}>
                {categories &&
                    categories.map(category => (
                        <ContainerItems key={category.id}>
                            <Image src={category.url} style={{ width: 200, height: 200 }} />
                            <Button to={{
                                pathname: '/produtos',
                                state: { categoryId: category.id }
                            }}>
                                {category.nome}
                            </Button>
                        </ContainerItems>
                    ))}
            </Carousel>

        </Container>
    )
}