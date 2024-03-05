import React from "react";

import banerHome from '../../assets/banerHome.svg'
import { Container, HomeImg } from "../Home/style";

import CategoryCarousel from '../../components/CategoryCarousel'

function Home() {
    return(
        <Container>
            <HomeImg src={banerHome} alt="baner da pagina home"/>
            <CategoryCarousel />
        </Container>
    )
}

export default Home