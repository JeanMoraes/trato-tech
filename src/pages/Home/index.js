import Header from 'components/Header'
import styles from './Home.module.scss'
import relogio from 'assets/inicial.png'

export const Home = () => {
    return (
        <div>
            <Header
                title='Classificados Tech'
                description='Compre diversos tipos de produtos no melhor site do Brasil!'
                img={relogio}
                className={styles.header}
            />
        </div>
    )
}