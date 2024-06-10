import classNames from 'classnames'
import styles from './Navbar.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { Search } from 'components/Search';
import {
    RiShoppingCart2Line,
    RiShoppingCart2Fill
} from 'react-icons/ri'

const iconsProps = {
    color: 'white',
    size: 24
}


export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <Logo className={styles.logo} />

            <div className={styles.links}>
                <div>
                    <a
                        href='/' 
                        className={classNames(styles.link, {
                            [styles.selected]: window.location.pathname === '/'
                        })}
                    >
                        Página Inicial
                    </a>
                </div>
            </div>
            
            <div className={styles.busca}>
                <Search />
            </div>

            <div className={styles.icones}>
                <a href='/carrinho'>
                        { window.location.pathname === '/carrinho' ? 
                            <RiShoppingCart2Fill {...iconsProps} /> :
                            <RiShoppingCart2Line {...iconsProps} />
                        }
                </a>
            </div>
        </nav>
    )
}