import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerLinks}>
                <div>
                    <p>DevLearn</p>
                    <p className={styles.tag}>BUILT FOR BEGINNER DEVELOPERS</p>
                </div>

                <ul>
                    <li>
                        <Link to={'about'}>About</Link>
                    </li>

                    <li>
                        <Link to="./learn">Lessons</Link>
                    </li>
                </ul>
            </div>

            <div>
                <small className={styles.copyright}>
                    @ 2024 DEVLEARN. BUILT FOR ARCHITECTS OF CODE
                </small>
            </div>
        </footer>
    )
}

export default Footer
