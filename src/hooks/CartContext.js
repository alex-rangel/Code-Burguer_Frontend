import React, { createContext, useContext, useEffect, useState} from "react";

const CartContext = createContext({})

export const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])

    const updateLocalStore = async product => {
        await localStorage.setItem('codeburger:cartInfo', JSON.stringify(product))
    }

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

        await updateLocalStore(newCardProduct)
    }

    const deleteProducts = async productId => {
        const newCart = cartProducts.filter(product => product.id !== productId)

        setCartProducts(newCart)

        await updateLocalStore(newCart)
    }

    const increaseProducts = async productId => {
        const newCart = cartProducts.map(product => {
            return product.id === productId ? {
                ...product, quantity :product.quantity +1
            } : product
        })
        setCartProducts(newCart)

        await updateLocalStore(newCart)
    }

    const decreaseProducts = async productId => {
        const cartIndex = cartProducts.findIndex(pd => pd.id === productId)

        if(cartProducts[cartIndex].quantity > 1){
            const newCart = cartProducts.map(product => {
                return product.id === productId ? {
                    ...product, quantity :product.quantity - 1
                } : product
            })
            setCartProducts(newCart)
    
            await updateLocalStore(newCart)
        }
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
        <CartContext.Provider value={{
        putProductInCart, 
        cartProducts, 
        increaseProducts, 
        decreaseProducts, 
        deleteProducts
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext) 

    if(!context) {
        throw new Error('useCart must be used with UserContext')
    }

    return context
}

