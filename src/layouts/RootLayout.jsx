import { Outlet } from 'react-router-dom'
import styles from './RootLayout.module.css'
import Header from '../component/Header/Header'
function RootLayout() {
    return (
        <div className={styles.container}>

            <Header />
            <main>
                <Outlet />
            </main>
        </div>

    )
}

export default RootLayout
