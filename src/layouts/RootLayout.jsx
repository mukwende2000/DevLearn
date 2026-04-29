import { Outlet } from 'react-router-dom'
import styles from './RootLayout.module.css'
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'
function RootLayout() {
    return (
        <div className={styles.container}>

            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>

    )
}

export default RootLayout
