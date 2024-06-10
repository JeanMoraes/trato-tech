import Header from 'components/Header'
import styles from './Cart.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import Item from 'components/Item'
import { resetCart } from 'store/reduces/cart'

export const Cart = () => {
    const dispatch = useDispatch()

    const { cart, total } = useSelector((state) => {
        let total = 0
        const cartReduce = state.cart.reduce((items, itemInCart) => {
            const item = state.items.find(item => item.id === itemInCart.id)
            total += (item.preco * itemInCart.qtd)
            items.push({
                ...item,
                qtd: itemInCart.qtd
            })
            return items
        }, [])

        return {
            cart: cartReduce,
            total
        }
    })
    return (
        <div>
            <Header
                title="Carrinho de compras"
                description="Confira produtos que você adicionou ao carrinho"
            />

            <div className={styles.carrinho}>
                { cart.map(item => <Item key={item.id} {...item} cart />)}
                <div className={styles.total}>
                <strong>
                    Resumo da compra
                </strong>
                <span>
                    Subtotal: <strong> R$ {total.toFixed(2)} </strong>
                </span>
                </div>
                <div>
                    <button
                        className={styles.finalizar}
                        onClick={() => dispatch(resetCart())}
                    >Finalizar compra</button>
                </div>
            </div>
        </div>
    )
}