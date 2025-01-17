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
    Text,
    Label,
    Input,
    TextSignup,
    Form
} from './style'

import { Button,ErroMessage } from '../../components'
import { useUser } from '../../hooks/UserContext'
import { Link,useHistory } from 'react-router-dom'

import imgLogo from '../../assets/imglogin.svg'



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
       try {
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
          
          if(data.admin){
            history.push('/pedidos')
          }else{
            setTimeout(() => {
              history.push('/')
            },1000)
          }
        } catch (error) {
          console.log(error.mensage)
        }
        
      }

    return(
        <Container>
            <ImgLogin src={imgLogo} alt="imagem de alguns habugueres"/>
            <ContainerItens>
                <Text>Login</Text>
                <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label>Email</Label>
                    <Input error={errors.email?.message} type="email" {...register("email")}/>
                    <ErroMessage>{errors.email?.message}</ErroMessage>
                    <Label>Senha</Label>
                    <Input error={errors.senha?.message} type="password" {...register("senha")}/>
                    <ErroMessage>{errors.senha?.message}</ErroMessage>
                    <Button type="submit" style={{marginTop: '35px'}}>Sing In</Button>
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