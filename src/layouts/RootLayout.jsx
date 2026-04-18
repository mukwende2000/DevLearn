import { NavLink, Outlet } from 'react-router-dom'
import styles from './RootLayout.module.css'
function RootLayout() {
    return (
        <div className={styles.container}>

            <header className={styles.header}>

                <p style={{ fontWeight: "bold" }}>DevLearn</p>
                <nav>
                    <ul className={styles.mainNav}>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/learn'}>Learn</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/about'}>About</NavLink>
                        </li>
                    </ul>
                </nav>

                <nav>
                    <ul className={styles.secondaryNav}>
                        <li>
                            <a href="">Sign in</a>
                        </li>
                        <li>
                            <button className={styles.actionBtn}>Get started</button>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>

    )
}

export default RootLayout
