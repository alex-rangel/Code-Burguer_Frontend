import React from "react";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { api } from "../../services/api"; 

import {
    Container,
    ContainerItens,
    ImgLogin,
    ImgLogo,
    Text,
    Label,
    Input,
    TextSigin,
    Form,
    ErroMessage
} from './style'

import Botao from '../../components/Button'

import registerImage from '../../assets/RegisterImage.svg'
import logo from '../../assets/logo.svg'



function Register(){

    const schema = yup
  .object().shape({
    name: yup.string().required('É obrigatorio preencher o campo de nome'),
    email: yup.string().email('Informe um email valido').required('É obrigatorio preencher o campo de email'),
    senha: yup.string().required('É obrigatorio preencher o campo de senha'),
    confSenha: yup.string().required('É obrigatorio preencher o campo de senha').oneOf([yup.ref('senha')], "As senhas devem ser iguais"),
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
        // const response = await api.post('login',{
        //     email: userDate.email,
        //     senha: userDate.senha
        // })
        // console.log(response.data)
      }

    return(
        <Container>
            <ImgLogin src={registerImage} alt="imagem de alguns habugueres"/>
            <ContainerItens>
              <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <ImgLogo src={logo} alt="imagem da logo da hamburgueria"/>
              </div>  
                <Text>Cadastre-se</Text>
                <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Label>Nome</Label>
                    <Input error={errors.name?.message} type="text" {...register("name")}/>
                    <ErroMessage>{errors.name?.message}</ErroMessage>
                    <Label>Email</Label>
                    <Input error={errors.email?.message} type="email" {...register("email")}/>
                    <ErroMessage>{errors.email?.message}</ErroMessage>
                    <Label>Senha</Label>
                    <Input error={errors.senha?.message} type="password" {...register("senha")}/>
                    <ErroMessage>{errors.senha?.message}</ErroMessage>
                    <Label>Confirme senha</Label>
                    <Input error={errors.confSenha?.message} type="password" {...register("confSenha")}/>
                    <ErroMessage>{errors.confSenha?.message}</ErroMessage>
                    <Botao type="submit" style={{marginTop: '15px'}}>Sign In</Botao>
                </Form>
                <TextSigin>
                    Possui conta? <a>Sign In</a>
                </TextSigin>
            </ContainerItens>
        </Container>
    )
}

export default Register