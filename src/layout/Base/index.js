import styles from './Base.module.scss'
import { Navbar } from 'components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from 'components/Footer'

export const Base = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles['container-outlet']}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}