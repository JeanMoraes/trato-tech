import styles from './Item.module.scss';
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillMinusCircle,
  AiFillPlusCircle
} from 'react-icons/ai';
import {
  FaCartPlus
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from 'store/reduces/items';
import { updateCart, updateAmount } from 'store/reduces/cart';
import classNames from 'classnames';

const iconeProps = {
  size: 24,
  color: '#041833',
};

const qtdIconsProps = {
  size: 32,
  color: '#1875e8',
}

export default function Item({
    id,
    titulo,
    foto,
    preco,
    descricao,
    favorito,
    cart,
    qtd
  }) {


    const dispatch = useDispatch()
    const isInTheCart = useSelector((state) => state.cart.some(item => item.id === id))

    const resolveFavorite = () => {
      dispatch(toggleFavorite(id))
    }

    const resolveCart = () => {
      dispatch(updateCart(id))
    }


  return (
    <div className={classNames(styles.item, {
      [styles.itemNoCarrinho]: cart 
    })}>
      <div className={styles['item-imagem']}>
        <img src={foto} alt={titulo} />
      </div>
      <div className={styles['item-descricao']}>
        <div className={styles['item-titulo']}>
          <h2>{titulo}</h2>
          <p>{descricao}</p>
        </div>
        <div className={styles['item-info']}>
          <div className={styles['item-preco']}>
            R$ {preco.toFixed(2)}
          </div>
          <div className={styles['item-acoes']}>
            {favorito
              ? <AiFillHeart {...iconeProps} color='#ff0000' className={styles['item-acao']} onClick={() => resolveFavorite()} />
              : <AiOutlineHeart {...iconeProps} className={styles['item-acao']} onClick={() => resolveFavorite()} />
            }
            {
              cart ? (
                <div className={styles.quantidade}>
                  Quantidade: 
                  <AiFillMinusCircle
                    {...qtdIconsProps}
                    onClick={ () => {
                      if(qtd > 1) dispatch(updateAmount({id, amount: -1}))
                      else resolveCart()
                    }}
                  />
                  <span>{ String(qtd || 0).padStart(2, '0') }</span>
                  <AiFillPlusCircle
                    {...qtdIconsProps}
                    onClick={ () => dispatch(updateAmount({id, amount: 1})) }
                  />
                </div>
              ) : ( <FaCartPlus
                  {...iconeProps}
                  color={isInTheCart ? '#1875E8' : iconeProps.color}
                  className={styles['item-acao']}
                  onClick={() => resolveCart()}
                /> )
            }
            
          </div>
        </div>
      </div>
    </div>
  )
}