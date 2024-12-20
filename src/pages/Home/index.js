import React from "react";

import banerHome from '../../assets/Banner.jpg'
import { Container, HomeImg } from "../Home/style";

import { CategoryCarousel, OffersCarousel } from '../../components'

function Home() {
    return(
        <Container>
            <HomeImg src={banerHome} alt="baner da pagina home"/>
            <CategoryCarousel />
            <OffersCarousel/>
        </Container>
    )
}

export default Home