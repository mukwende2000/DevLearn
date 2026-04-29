import SyntaxHighlighter from 'react-syntax-highlighter'
import Button from '../../component/Button/Button'
import styles from './JSSection.module.css'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'

function JSSection() {
    return (
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
    )
}

export default JSSection
