import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Container, Label, Input, ButtonStyles, Labelupload, Title } from './style'
import { ErroMessage } from '../../../components'

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { toast } from 'react-toastify'
import { useHistory } from "react-router-dom"

import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"

import api from "../../../services/api";

const NewCategory = () => {
    const [fileName, setFileName] = useState(null)
    const { push } = useHistory()

    const schema = Yup.object().shape({
        name: Yup.string().required('Digite o nome da categoria'),
        file: Yup.mixed()
        .test('required', 'Carregue um arquivo', value => {
            return value?.length > 0
        })
        .test('fileSize', 'Carregue arquivos de até 20mb', value => {
            return value[0]?.size <= 20971520
        })
        .test('type', 'Carregue apenas arquivos JPEG ou PNG', value => {
            return (
                (value[0]?.type === 'image/jpeg') ||
                (value[0]?.type === 'image/png')
            )
        })
    })

    const { register, handleSubmit, formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async data => {
        const categoryDataFormData = new FormData()

        categoryDataFormData.append('nome', data.name)
        categoryDataFormData.append('file', data.file[0])

        await toast.promise(api.post('categoria', categoryDataFormData),{
            pending: 'Criando uma nova categoria...',
            success: 'Categoria criada com sucesso',
            error: 'Falha ao criar a categoria'
        }) 

        setTimeout(() => { 
            push('/listar-produto')
        }, 2000)
    }

    return (
        <Container>

            <Title>Cadastrar nova categoria</Title>

            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Label>Nome</Label>
                    <Input type="text" {...register('name')} />
                    <ErroMessage>{errors.name?.message}</ErroMessage>
                </div>

                <div>
                    <Labelupload>
                        {fileName ? fileName :
                            <>
                                <CloudUploadIcon />
                                Carregue a imagem do produto
                            </>
                        }

                        <input
                            type="file"
                            accept="image/png, image/jpeg"
                            id="image-input"
                            {...register('file')}
                            onChange={value => {
                                setFileName(value.target.files[0]?.name)
                            }}
                        />
                    </Labelupload>
                    <ErroMessage>{errors.file?.message}</ErroMessage>
                </div>

                <ButtonStyles>Adicionar categoria</ButtonStyles>
            </form>
        </Container>
    )
}

export default NewCategory