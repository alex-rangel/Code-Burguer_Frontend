import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import ReactSelect from 'react-select'

import { Container, Label, Input, ButtonStyles, Labelupload, Title } from './style'
import { ErroMessage } from '../../../components'

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { toast } from 'react-toastify'
import { useHistory } from "react-router-dom"
import { useProduct } from "../../../hooks/ProductContext";
import formatCurrency from "../../../utils/formatCurrency";

import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"

import api from "../../../services/api";

const UpdateProduct = () => {
    const [fileName, setFileName] = useState(null)
    const [categories, setCatagoties] = useState([])
    const { productData } = useProduct()
    const { push } = useHistory()

    const schema = Yup.object().shape({
        name: Yup.string(),
        price: Yup.string(),
        category: Yup.object().required('Escolha uma nova categoria ou escolha a atual'),
        file: Yup.mixed()
            .test('fileSize', 'Carregue arquivos de até 20mb', value => {
                return !value.length || value[0]?.size <= 20971520
            })
            .test('type', 'Carregue apenas arquivos JPEG ou PNG', value => {
                return !value.length || (
                    (value[0]?.type === 'image/jpeg') ||
                    (value[0]?.type === 'image/png') ||
                    (value[0]?.type === 'image/jpg')
                )
            })
    })

    const { register, handleSubmit, control, formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async newData => {
        const productDataFormData = new FormData()

        const { data } = await api.get(`produtos/${productData.id}`)

        const newNome = newData.name.length <= 0 ? data.nome : newData.name 
        const newPreco = newData.price.length <= 0 ? data.preco : newData.price
        const newCategoria = newData.category.id 
        const newFile = newData.file[0]
        const oferta = data.oferta

        productDataFormData.append('nome', newNome)
        productDataFormData.append('preco', newPreco)
        productDataFormData.append('categoria_id', newCategoria)
        productDataFormData.append('file', newFile)
        productDataFormData.append('oferta', oferta)

        await toast.promise(api.put(`produtos/${productData.id}`, productDataFormData), {
            pending: 'Atualizando produto...',
            success: 'Produto atualizado com sucesso',
            error: 'Falha ao atualizar o produto'
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
            <Title>Editar produto</Title>

            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Label>Nome</Label>
                    <Input type="text" placeholder={productData.nome} {...register('name')} />
                    <ErroMessage>{errors.name?.message}</ErroMessage>
                </div>

                <div>
                    <Label>Preço</Label>
                    <Input type="number" placeholder={formatCurrency(productData.preco)} {...register('price')} />
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
                                    placeholder="Escolha uma categoria"
                                />
                            )
                        }}
                    >
                    </Controller>
                    <ErroMessage>{errors.category?.message}</ErroMessage>
                </div>

                <ButtonStyles>Editar produto</ButtonStyles>
            </form>
        </Container>
    )
}

export default UpdateProduct