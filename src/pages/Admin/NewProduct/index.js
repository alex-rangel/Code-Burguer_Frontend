import React, { useEffect } from "react";
import { Container } from './style'

import api from "../../../services/api";
 
const NewProduct = ( ) =>{

    useEffect(() => {
      async function loadingOrders(){
            const { data } = await api.get('produtos')
      }
      loadingOrders()
        }, [])

    return(
        <Container>
           <div>ok</div>
        </Container>
    )
}

export default NewProduct