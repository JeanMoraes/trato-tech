import Header from 'components/Header'
import styles from './Home.module.scss'
import relogio from 'assets/inicial.png'

import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Home = () => {
    const navigate = useNavigate()
    const categories = useSelector((state) => state.categories)

    return (
        <div>
            <Header
                title='Classificados Tech'
                description='Compre diversos tipos de produtos no melhor site do Brasil!'
                img={relogio}
                className={styles.header}
            />

            <div className={styles.categorias}>
                <div className={styles['categorias-title']}>
                    <h1>Categorias</h1>
                </div>

                <div className={styles['categorias-container']}>
                    {
                        categories.map((category, index) => (
                            <div key={index} onClick={() => navigate(`/categoria/${category.id}`)}>
                                <img src={category.thumbnail} alt={category.name} />
                                <h1>{category.nome}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}