import styles from './HeadingSection.module.css'

function HeadingSection() {
    return (
        <section className={styles.headingSection}>
            <h1 className={styles.headline}>master the web <br />achitecture.</h1>
            <p>
                A structured high fidelity journey through the core technologies
                of the modern <br /> web. From structural foundations to interactive logic,
                designed for clarity and <br />depth.
            </p>
        </section>
    )
}

export default HeadingSection
