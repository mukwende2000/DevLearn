import { FaArrowRight } from 'react-icons/fa'
import styles from './Module.module.css'

function Module({ initials, moduleName, description }) {
    return (
        <div className={styles.module}>
            <div className={styles.initials}>{initials}</div>
            <h3>{moduleName} Basics</h3>
            <p>{description}</p>
            <button><span>Start Module</span> <FaArrowRight /></button>
        </div>
    )
}

export default Module
