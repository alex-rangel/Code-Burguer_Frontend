import React, { useEffect } from "react";

import categorias from '../../assets/CATEGORIAS.png'
import { Container, CategoryImg } from "./style";

import  api  from '../../services/api'

function CategoryCarousel() {
    useEffect(() => {
        async function loadCategories() {
            const response = await api.get('categoria')

            console.log(response)
        }

        loadCategories()
    },[])
    return(
        <Container>
            <CategoryImg src={categorias} alt="Imagem do titulo do carrossel de categotias"/>
        </Container>
    )
}

export default CategoryCarousel