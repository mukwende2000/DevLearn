import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"

function Learn() {
    return (
        <>
            <section>
                <h1>master the web achitecture.</h1>
                <p>
                    A structured high fidelity journey through the core technologies
                    of the modern web. From structural foundations to interactive logic,
                    designed for clarity and depth.
                </p>
            </section>

            <section>
                <div>
                    <h2>HTML: The Foundation</h2>
                    <p>
                        The skeletal sturcture of every digital experience.
                        Master the semantic tags that provide meaning to
                        content and accessibility to users across the globe
                    </p>
                    <button>
                        Start module
                    </button>
                </div>

                <div>
                    <div>
                        <p>Core Topics</p>
                        <ul>
                            <li>Semantic Markup</li>
                            <li>Document Structure</li>
                            <li>Accessibilty(Ally)</li>
                            <li>Form Architecture</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <header>
                    <span>layout</span>
                    <span>typography</span>
                    <span>animation</span>
                </header>

                <div className="grid layout">
                    <p>syllabus</p>

                    <div>
                        <p>flexbox & grid</p>
                        <p>Mordern alighnment strategies</p>
                    </div>

                    <div>
                        <p>the box model</p>
                        <p>sizing, padding, margins</p>
                    </div>

                    <p>projects</p>
                    <div>
                        <p>editorial grid</p>
                        <p>A magazine-style landing page</p>
                    </div>

                    <div>
                        <p> glass ui kit </p>
                        <p>Creating depth with backdrop filters</p>
                    </div>
                </div>

                <div>
                    <h2>CSS: Visual Logic</h2>
                    <p>
                        The art of the interface. Transform basic
                        styling to advanced architecture systems like
                        CSS Grid and custom properties to build breath taking UIs
                    </p>
                    <button>Start Module</button>
                </div>
            </section>

            <section>
                <div>
                    <h2>Javascript: The Brain</h2>
                    <p>
                        Transform static markup into dynamics, living applications.
                        Understand functional programming, DOM manipulation, and
                        synchronouts patterns.
                    </p>

                    <div>
                        <p>logic</p>
                        <p>ES6+ Syntax</p>
                    </div>

                    <div>
                        <p>api</p>
                        <p>Async/Await</p>
                    </div>

                    <button>Start Module</button>
                </div>

                <div>
                    <SyntaxHighlighter language="javascript" style={dracula}>
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
            </section>
        </>
    )
}

export default Learn
