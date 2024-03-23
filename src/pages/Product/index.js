import React, {useEffect, useState} from "react";

import Productlogo from '../../assets/product-logo.svg'
import { Container, ProductImg, CategoryButton, CategoriesMenu, ProductContainer } from "../Product/style";

import api from "../../services/api";
import { CardProduct } from "../../components";
import formatCurrency from "../../utils/formatCurrency";


function Product() {

    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] =useState(0)
    const [product, setProduct] = useState([])
    const [filteredProduct, setFilteredProduct] = useState([])

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categoria')
            const newCategories = [{id:0, nome: 'Todas'}, ...data]

            setCategories(newCategories)
        }

        async function loadProducts() {
            const { data } = await api.get('produtos')

            const newProduct = data.map(product => {
                return {...product, formatedPrice: formatCurrency(product.preco)}
            })

            setProduct(newProduct)
        }
        loadCategories()
        loadProducts()
    }, [])

    useEffect(() => {
        if(activeCategory === 0) {
            setFilteredProduct(product)
        }else{
        const newFilteredProduct = product.filter(
            product => product.categoria_id === activeCategory
        )
            setFilteredProduct(newFilteredProduct)
        }
    }, [activeCategory, product])


    return(
        <Container>
            <ProductImg src={Productlogo} alt="baner da pagina de produtos"/>
            <CategoriesMenu>
                { categories &&
                 categories.map(category => (
                    <CategoryButton
                     key={category.id}
                     $isActiveCategory={activeCategory === category.id} 
                     onClick={() => {
                        setActiveCategory(category.id)
                    }}
                    >
                        {category.nome}
                    </CategoryButton>
                 ))
                }
            </CategoriesMenu>
            <ProductContainer>
                {
                    filteredProduct &&
                    filteredProduct.map(product => (
                        <CardProduct key={product.id} product={product}/>
                    ))
                }

            </ProductContainer>
        </Container>
    )
}

export default Product