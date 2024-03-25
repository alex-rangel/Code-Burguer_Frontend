import React, { useState,useEffect } from "react"

import { Button } from "../Button"
import { Container } from "./style"

import { useCart } from "../../hooks/CartContext"
import formatCurrency from "../../utils/formatCurrency"

import api from "../../services/api"
import { toast } from "react-toastify"

export function CartResume(){
    const [finalPrice, setFinalPrice] = useState(0)
    const [deliveryTax] = useState(5)

    const { cartProducts } = useCart()

    useEffect(() => {
        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.preco * current.quantity + acc
        }, 0)

        setFinalPrice(sumAllItems)
    }, [cartProducts, deliveryTax])

    const submitOrder = async () => {
        const order = cartProducts.map(product => {
            return {id: product.id, quantidade: product.quantity}
        })

        await toast.promise(api.post('pedidos', { produtos:order}),{
            pending:'Realizando o seu pedido...',
            success: 'Pedido realizado com sucesso',
            error:'Falha ao tentar realizar o pedido, tente novamente'
        }) 
    }

    return(
        <div>
            <Container>
                <div className="container-top">
                    <h2 className="title">Resumo do Pedido</h2>
                    <p className="items">Itens</p>
                    <p className="items-price">{formatCurrency(finalPrice)}</p>
                    <p className="delivery-tax">Taxa de entrega</p>
                    <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
                </div>
                <div className="container-bottom">
                    <p>Total</p>
                    <p>{formatCurrency(finalPrice + deliveryTax)}</p>
                </div>
            </Container>
            <Button style={{ width: '100%', marginTop: 30 }} onClick={submitOrder}>Finalizar Pedido</Button>
        </div>
    )
}