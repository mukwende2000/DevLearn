import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'


import Button from '../../component/Button/Button'
import styles from './HTMLSection.module.css'

function HTMLSection() {
    return (
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
    )
}

export default HTMLSection
