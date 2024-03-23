import React from "react";

import { ContainerButton } from "./style"
 
export const Button = ({children, ...props}) =>{
    return(
        <ContainerButton{...props}>{children}</ContainerButton>
    )
}