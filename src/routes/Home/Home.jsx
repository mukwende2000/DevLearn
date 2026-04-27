import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import styles from './Home.module.css'
import Module from './components/Module'
import { modules } from '../../data'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import Button from '../../component/Button/Button'

function Home() {
    return (

        <main>
            <section className={styles.hero}>
                <span>future-proof your skills</span>
                <h1>learn programming <span>simply</span></h1>
                <p>
                    Step-by-step lessons for beginners. No confusion. Just Clarity.<br />
                    Master the art of code through architecturally structured guidance.
                </p>
                <div className={styles.btns}>
                    <Button bgColor='var(--color-primary)' color='var(--color-neutral)'>Start Learning</Button>
                    <Button bgColor='var(--color-light)' color='var(--color-primary)'>View Curriculum</Button>
                </div>
            </section>

            <section className={styles.moduleSection}>
                <h2>Foundation Modules</h2>
                <p>
                    The core pillars of the web. Each module is desgined to
                    build a solid<br /> structural understanding or modern development.
                </p>
                <div className={styles.modules}>
                    {
                        modules.map(module => {
                            return <Module description={module.description} initials={module.initials} moduleName={module.initials} />
                        })
                    }
                </div>
            </section>

            <section className={styles.codeSnippet}>
                <SyntaxHighlighter language='javascript' style={dracula}>
                    {`
            const learningPath = {
              clarity: true,
              confustion: false,
              method: 'Step-by-step',
              goal: 'Professional Develper'
            }
            
            function startJourney(student) {
              return student.focus().apply(learningPath);
            }
            `}
                </SyntaxHighlighter>


            </section>
            <footer className={styles.footer}>
                <div className={styles.footerLinks}>
                    <div>
                        <p>DevLearn</p>
                        <p className={styles.tag}>BUILT FOR BEGINNER DEVELOPERS</p>
                    </div>

                    <ul>
                        <li>
                            <a href="">About</a>
                        </li>

                        <li>
                            <a href="">Lessons</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <small className={styles.copyright}>
                        @ 2024 DEVLEARN. BUILT FOR ARCHITECTS OF CODE
                    </small>
                </div>
            </footer>
        </main>

    )
}

export default Home
