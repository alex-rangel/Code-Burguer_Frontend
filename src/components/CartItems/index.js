import { useCart } from "../../hooks/CartContext";
import formatCurrency from "../../utils/formatCurrency";
import { Container, Header, Body, EmptyCart } from "./style"
import { FaTrashAlt } from "react-icons/fa";

export function CartItems(){

    const { cartProducts, increaseProducts, decreaseProducts, deleteProducts } = useCart()
    console.log(cartProducts)

    return(
        <Container>
            <Header>
                <p></p>
                <p>Itens</p>
                <p>Preço</p>
                <p style={{paddingRight: 30}}>Quantidade</p>
                <p>Total</p>
                <p>Remover</p>
            </Header>
            {
                cartProducts && cartProducts.length > 0 ? (
                cartProducts.map(
                    product => (
                        <Body key={product.id}>
                            <img src={product.url} alt="imagem do produto que esta no carrinho"/>
                            <p>{product.nome}</p>
                            <p>{formatCurrency(product.preco)}</p>
                            <div className="container-quantity">
                                <button onClick={() => decreaseProducts(product.id)}>-</button>
                                <p>{product.quantity}</p>
                                <button onClick={() => increaseProducts(product.id)}>+</button>
                            </div>
                            <p>{formatCurrency(product.quantity * product.preco)}</p>
                            <button onClick={() => deleteProducts(product.id)}><FaTrashAlt/></button>
                        </Body>
                    ))
                ) : (
                    <EmptyCart>Carrinho vazio</EmptyCart>
                )}
        </Container>
    )
}