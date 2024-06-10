import styles from './Navbar.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'

export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <Logo className={styles.logo} />
        </nav>
    )
}