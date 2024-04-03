import React from "react";

import LogoutIcon from "@mui/icons-material/Logout";

import { Container, ItemContainer, ListLink } from './styles'
import listLinks from "./menu-list";
import { useUser } from '../../hooks/UserContext'

export function SideMenuAdmin() {
    const { logout } = useUser()
    return(
        <Container>
            <hr></hr>
            {listLinks.map(item => (
                <ItemContainer key={item.id} isActive={true}>
                    <item.icon className="icon"/>
                    <ListLink to={item.link}>{item.label}</ListLink>
                </ItemContainer>
            ))}
            <hr></hr>
            <ItemContainer style={{position: 'absolute', bottom: '30px'}}>
                <LogoutIcon style={{ color:'#ffffff' }}/>
                <ListLink to="/login" onclick={logout}>
                    Sair
                </ListLink>
            </ItemContainer>
        </Container>
    )
}