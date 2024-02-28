import React from "react";
import {
    Container,
    ContainerItens,
    ImgLogin,
    ImgLogo,
    Text,
    Label,
    Input,
    Botao,
    TextSignup
} from './style'

import imgLogo from '../../assets/imglogin.svg'
import logo from '../../assets/logo.svg'

function Login(){
    return(
        <Container>
            <ImgLogin src={imgLogo} alt="imagem de alguns habugueres"/>
            <ContainerItens>
                <ImgLogo src={logo} alt="imagem da logo da hamburgueria"/>
                <Text>Login</Text>
                <Label>Email</Label>
                <Input/>
                <Label>Password</Label>
                <Input/>
                <Botao>Sing In</Botao>
                <TextSignup>
                    Não possui conta? <a>SignUp</a>
                </TextSignup>
            </ContainerItens>
        </Container>
    )
}

export default Login