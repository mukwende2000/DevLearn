import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'


function Header() {
    return (
        <header className={styles.header}>

            <p style={{ fontWeight: "bold" }}>DevLearn</p>
            <nav>
                <ul className={styles.mainNav}>

                    <MyLink path={'/'} linkName={'Home'} />
                    <MyLink path={'/learn'} linkName={'Learn'} />
                    <MyLink path={'/about'} linkName={'About'} />
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
    )
}

function MyLink({ path, linkName }) {
    return (
        <li>
            <NavLink className={({ isActive }) => isActive ? styles.active : ''} to={path}>{linkName}</NavLink>
        </li>
    )
}

export default Header
