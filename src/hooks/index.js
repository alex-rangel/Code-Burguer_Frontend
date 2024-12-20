import React from "react";

import { UserProvider } from "./UserContext.js"
import { CartProvider } from "./CartContext.js";
import { ProductProvider } from "./ProductContext.js";

const AppProvider = ({ children }) => (

    <CartProvider>
        <UserProvider>
            <ProductProvider>
                {children}
            </ProductProvider>
        </UserProvider>
    </CartProvider>
)
export default AppProvider