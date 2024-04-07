import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import ReactSelect from 'react-select'

import { Container, Label, Input, ButtonStyles, Labelupload } from './style'
import { Button, ErroMessage } from '../../../components'

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { toast } from 'react-toastify'
import { useHistory } from "react-router-dom"

import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"

import api from "../../../services/api";

const NewProduct = () => {
    const [fileName, setFileName] = useState(null)
    const [categories, setCatagoties] = useState([])
    const { push } = useHistory()

    const schema = Yup.object().shape({
        name: Yup.string().required('Digite o nome do produto'),
        price: Yup.string().required('Digite o preço do produto'),
        category: Yup.object().required('Escolha uma categoria'),
        file: Yup.mixed()
        .test('required', 'Carregue um arquivo', value => {
            return value?.length > 0
        })
        .test('fileSize', 'Carregue arquivos de até 2mb', value => {
            return value[0]?.size <= 200000
        })
        .test('type', 'Carregue apenas arquivos JPEG ou PNG', value => {
            return (
                (value[0]?.type === 'image/jpeg') ||
                (value[0]?.type === 'image/png')
            )
        })
    })

    const { register, handleSubmit, control, formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async data => {
        const productDataFormData = new FormData()

        productDataFormData.append('nome', data.name)
        productDataFormData.append('preco', data.price)
        productDataFormData.append('categoria_id', data.category.id)
        productDataFormData.append('file', data.file[0])

        await toast.promise(api.post('produtos', productDataFormData),{
            pending: 'Criando um novo produto...',
            success: 'Produto criado com sucesso',
            error: 'Falha ao criar o produto'
        }) 

        setTimeout(() => { 
            push('/listar-produto')
        }, 2000)
    }

    useEffect(() => {
        async function loadingCategories() {
            const { data } = await api.get('categoria')

            setCatagoties(data)
        }
        loadingCategories()
    }, [])

    return (
        <Container>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Label>Nome</Label>
                    <Input type="text" {...register('name')} />
                    <ErroMessage>{errors.name?.message}</ErroMessage>
                </div>

                <div>
                    <Label>Preço</Label>
                    <Input type="number" {...register('price')} />
                    <ErroMessage>{errors.price?.message}</ErroMessage>
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

                <div>            
                    <Controller
                        name="category"
                        control={control}
                        render={({ field }) => {
                            return (
                                <ReactSelect
                                    {...field}
                                    options={categories}
                                    getOptionLabel={cat => cat.nome}
                                    getOptionValue={cat => cat.id}
                                    placeholder="Categorias"
                                />
                            )
                        }}
                    >

                    </Controller>
                    <ErroMessage>{errors.category?.message}</ErroMessage>
                </div>

                <ButtonStyles>Adicionar produto</ButtonStyles>
            </form>
        </Container>
    )
}

export default NewProduct