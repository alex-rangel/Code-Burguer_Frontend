import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useUser } from "../../hooks/UserContext"

import Cart from "../../assets/Cart.png"
import Person from "../../assets/Person.png"
import { 
    Container,
    ContainerLeft,
    PageLink,
    ContainerRight,
    ContainerText,
    PageLinkExit,
    Line
 } from "./style"
 
export const Header = ({children, ...props}) =>{

    const { push, location:{ pathname }} = useHistory()
    const { logout, userData } = useUser()

    const logoutUser = () =>{
        logout()
        push('/login')
    }


    return(
        <Container>
            <ContainerLeft>
                <PageLink onClick={() => push('/')} $isActive={pathname === '/'}>Home</PageLink>
                <PageLink onClick={() => push('/produtos')} $isActive={pathname.includes('produtos')}>Ver Produtos</PageLink>
            </ContainerLeft>

            <ContainerRight>
                <PageLink onClick={() => push('/carrinho') }>
                    <img src={Cart} alt="imagem do carrinho"/>
                </PageLink>
                <Line></Line>
                <PageLink>
                    <img src={Person} alt="logo-pessoa"/>
                </PageLink>

                <ContainerText>
                    <p>Olá {userData.nome}</p>
                    <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
                </ContainerText>
            </ContainerRight>
        </Container>
    )
}