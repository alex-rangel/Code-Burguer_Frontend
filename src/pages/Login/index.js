import React from "react";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { toast } from 'react-toastify';

import  api  from "../../services/api"; 

import {
    Container,
    ContainerItens,
    ImgLogin,
    ImgLogo,
    Text,
    Label,
    Input,
    TextSignup,
    Form,
    ErroMessage
} from './style'

import Botao from '../../components/Button'
import { useUser } from '../../hooks/UserContext'
import { Link,useHistory } from 'react-router-dom'

import imgLogo from '../../assets/imglogin.svg'
import logo from '../../assets/logo.svg'



function Login(){
  const { putUserData } = useUser()
  const history = useHistory()

    const schema = yup
  .object().shape({
    email: yup.string().email('Informe um email valido').required('É obrigatorio preencher o campo de email'),
    senha: yup.string().required('É obrigatorio preencher o campo de senha'),
  })
  .required()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

      const onSubmit = async (userDate) => {
        const {data} = await toast.promise( 
          api.post('login',{
            email: userDate.email,
            senha: userDate.senha
        }) ,
        {
          pending: 'Verificando os seus dados',
          success: 'Seja bem-vindo(a)',
          error: 'Verifique seu e-mail e senha'
        }
        )
        
        putUserData(data)

        setTimeout(() => {
          history.push('/')
        },1000)
      }

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
                    <Label>Senha</Label>
                    <Input error={errors.senha?.message} type="password" {...register("senha")}/>
                    <ErroMessage>{errors.senha?.message}</ErroMessage>
                    <Botao type="submit" style={{marginTop: '35px'}}>Sing In</Botao>
                </Form>
                <TextSignup>
                    Não possui conta? 
                      <Link to="/cadastro">
                        Sign Up
                      </Link>
                </TextSignup>
            </ContainerItens>
        </Container>
    )
}

export default Login