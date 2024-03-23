import React from "react";

import { UserProvider } from "./UserContext.js"
import { CartProvider } from "./CartContext.js";

const AppProvider = ({ children }) => (
    
    <CartProvider>
        <UserProvider>
            {children}
        </UserProvider>
    </CartProvider>
)
export default AppProvider