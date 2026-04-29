import Button from '../../component/Button/Button'
import styles from './CSSSection.module.css'

function CSSSection() {
    return (
        <section className={styles.CSSSection}>
            <div className={styles.topics}>
                <header>
                    <span>layout</span>
                    <span>typography</span>
                    <span>animation</span>
                </header>

                <div className={styles.gridLayout}>
                    <p>syllabus</p>

                    <p>projects</p>

                    <div>
                        <p className={styles.bold}>flexbox & grid</p>
                        <p className={styles.light}>Mordern alighnment strategies</p>
                    </div>


                    <div>
                        <p className={styles.bold}>editorial grid</p>
                        <p className={styles.light}>A magazine-style landing page</p>
                    </div>

                    <div>
                        <p className={styles.bold}>the box model</p>
                        <p className={styles.light}>sizing, padding, margins</p>
                    </div>

                    <div>
                        <p className={styles.bold}> glass ui kit </p>
                        <p className={styles.light}>Creating depth with backdrop filters</p>
                    </div>
                </div>
            </div>

            <div className={styles.CSSlogic}>
                <h2>CSS: Visual Logic</h2>
                <p>
                    The art of the interface. Transform basic
                    styling to advanced architecture systems like
                    CSS Grid and custom properties to build breath taking UIs
                </p>
                <Button bgColor='var(--color-light)' color="var(--color-primary)">
                    Start Module
                </Button>
            </div>
        </section>
    )
}

export default CSSSection
