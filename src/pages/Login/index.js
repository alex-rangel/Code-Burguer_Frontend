import React from "react";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import {
    Container,
    ContainerItens,
    ImgLogin,
    ImgLogo,
    Text,
    Label,
    Input,
    Botao,
    TextSignup,
    Form,
    ErroMessage
} from './style'

import imgLogo from '../../assets/imglogin.svg'
import logo from '../../assets/logo.svg'



function Login(){

    const schema = yup
  .object().shape({
    email: yup.string().email('Informe um email valido').required('É obrigatorio preencher o campo de email'),
    password: yup.string().required('É obrigatorio preencher o campo de senha'),
  })
  .required()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

      const onSubmit = (data) => console.log(data)

    return(
        <Container>
            <ImgLogin src={imgLogo} alt="imagem de alguns habugueres"/>
            <ContainerItens>
                <ImgLogo src={logo} alt="imagem da logo da hamburgueria"/>
                <Text>Login</Text>
                <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label>Email</Label>
                    <Input error={errors.email?.message} type="email" {...register("email")}/>
                    <ErroMessage>{errors.email?.message}</ErroMessage>
                    <Label>Password</Label>
                    <Input error={errors.password?.message} type="password" {...register("password")}/>
                    <ErroMessage>{errors.password?.message}</ErroMessage>
                    <Botao type="submit">Sing In</Botao>
                </Form>
                <TextSignup>
                    Não possui conta? <a>SignUp</a>
                </TextSignup>
            </ContainerItens>
        </Container>
    )
}

export default Login