import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"
import Button from "../../component/Button/Button"

import styles from './Learn.module.css'

function Learn() {
    return (
        <>
            <section className={styles.headingSection}>
                <h1 className={styles.headline}>master the web <br />achitecture.</h1>
                <p>
                    A structured high fidelity journey through the core technologies
                    of the modern <br /> web. From structural foundations to interactive logic,
                    designed for clarity and <br />depth.
                </p>
            </section>

            <section className={styles.HTMLSection}>
                <div className={styles.foundations}>
                    <h2>HTML: The Foundation</h2>
                    <p>
                        The skeletal sturcture of every digital experience.
                        Master the semantic tags that provide meaning to
                        content and accessibility to users across the globe
                    </p>
                    <Button bgColor='var(--color-primary)' color='var(--color-neutral)'>
                        start module
                    </Button>
                </div>

                <div className={styles.coreTopics}>
                    <div>
                        <p>Core Topics</p>
                        <ul>
                            <li>Semantic Markup</li>
                            <li>Document Structure</li>
                            <li>Accessibilty(Ally)</li>
                            <li>Form Architecture</li>
                        </ul>
                    </div>

                    <SyntaxHighlighter
                        customStyle={{
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                        language="html" style={dracula}>
                        {`<main>
    <h1>Hello World</h1>
    <p>Structural Focus</p>
</main>`}
                    </SyntaxHighlighter>
                </div>
            </section>

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

            <section className={styles.JSSection}>
                <div className={styles.theBrain}>
                    <h2>Javascript: The Brain</h2>
                    <p>
                        Transform static markup into dynamics, living applications.
                        Understand functional programming, DOM manipulation, and
                        synchronouts patterns.
                    </p>
                    <div className={styles.example}>
                        <div>
                            <p>logic</p>
                            <p>ES6+ Syntax</p>
                        </div>

                        <div>
                            <p>api</p>
                            <p>Async/Await</p>
                        </div>
                    </div>
                    <Button bgColor='var(--color-primary)' color="var(--color-neutral)">
                        Start Module
                    </Button>
                </div>

                <div className={styles.codeSnippet}>
                    <SyntaxHighlighter
                        language="javascript"
                        style={dracula}
                        customStyle={{
                            backgroundColor: 'transparent;',
                            height: '100%',
                            borderRadius: '10px'
                        }}
                    >
                        {
                            `
    const learn = (topic) => {
        console.log('Mastering $(topic)');
        return topic.status = 'expert';
    }

    // Execute your growth

    learn('Javascript')
    `
                        }
                    </SyntaxHighlighter>
                </div>
            </section >
        </>
    )
}

export default Learn
