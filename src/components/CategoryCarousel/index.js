import React, { useEffect, useState } from "react";
//import Carousel from 'react-elastic-carousel';

import categorias from '../../assets/CATEGORIAS.png'
import { Container, CategoryImg, ImgCarrossel } from "./style";

import api from '../../services/api'

function CategoryCarousel() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categoria')

            setCategories(data)
        }
        loadCategories()
    }, [])
    return (
        <Container>
            <CategoryImg src={categorias} alt="Imagem do titulo do carrossel de categotias" />
            { categories.map(category => (
                <ImgCarrossel key={category.id} src={category.url} alt="Imagem teste"/>
            )) }
        </Container>
    )
}

export default CategoryCarousel