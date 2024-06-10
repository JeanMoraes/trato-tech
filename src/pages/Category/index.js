import Header from "components/Header"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import styles from './Category.module.scss'
import Item from "components/Item"

export const Category = () => {
    const { slug } = useParams()
    const { category, items } = useSelector((state) => {
        const regexp = new RegExp(state.search, 'i')

        return {
            category: state.categories.find(category => category.id === slug),
            items: state.items.filter(item => item.categoria === slug && item.titulo.match(regexp))
        }
    })

    return (
        <div>
            <Header
                title={category.nome}
                description={category.descricao}
                img={category.header}
            />

            <div className={styles.itens}>
                {items?.map(item => (
                    <Item key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}