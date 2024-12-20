import React, { createContext, useContext, useState} from "react";

const ProductContext = createContext({})

export const ProductProvider = ({children}) => {
    const [productData, setProductData] = useState({})

    const putProductData = (userInfo) => {
        setProductData(userInfo)
    }

    return(
        <ProductContext.Provider value={{putProductData, productData}} >{children}</ProductContext.Provider>
    )
}

export const useProduct = () => {
    const context = useContext(ProductContext) 

    if(!context) {
        throw new Error('useProduct must be used within a UserProvider')
    }

    return context
}

