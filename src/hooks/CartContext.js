import React, { createContext, useContext, useEffect, useState} from "react";

const CartContext = createContext({})

export const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])

    const putProductInCart = async (procuct) => {
        const cartIndex = cartProducts.findIndex(prd => prd.id === procuct.id)

        let newCardProduct = []

        if(cartIndex >= 0){
            newCardProduct = cartProducts

            newCardProduct[cartIndex].quantity = newCardProduct[cartIndex].quantity + 1
            setCartProducts(newCardProduct)
        }else{
            procuct.quantity = 1
            newCardProduct = [...cartProducts, procuct]
            setCartProducts(newCardProduct)
        }

        await localStorage.setItem(
            'codeburger:cartInfo',
            JSON.stringify(newCardProduct)
        )
    }

    useEffect(() => {
        const loadUserData = async () => {
            const clientCartData = await localStorage.getItem('codeburger:cartInfo')

            if(clientCartData) {
                setCartProducts(JSON.parse(clientCartData))
            }
        } 
        loadUserData() 
    },[])

    return(
        <CartContext.Provider value={{putProductInCart, cartProducts}} >{children}</CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext) 

    if(!context) {
        throw new Error('useCart must be used with UserContext')
    }

    return context
}

