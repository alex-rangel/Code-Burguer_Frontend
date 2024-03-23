import React from "react";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import  api  from "../../services/api"; 
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

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

import { Button } from '../../components/Button'

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
        try {
        const { status } = await api.post('user',
        {
            nome: userDate.name,
            email: userDate.email,
            presenha: userDate.senha,
            admin:false
        },
        {validateStatus: () => true}
        )

        if (status === 201 || status === 200) {
          toast.success('Cadastro criado com sucesso')
        } else if (status === 409) {
          toast.error('E-mail já cadastradoo! Faça login para continuar')
        } else {
          throw new Error()
        }
        ;
      }catch(err){
        toast.error('Falha no sistema! Tente novamente')
      }
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
                    <Button type="submit" style={{marginTop: '15px'}}>Sign In</Button>
                </Form>
                <TextSigin>
                    Possui conta?
                    <Link to="/login">
                      Sign In
                    </Link>
                </TextSigin>
            </ContainerItens>
        </Container>
    )
}

export default Register