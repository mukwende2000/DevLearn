import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"
import Button from "../../component/Button/Button"

import styles from './Learn.module.css'
import HeadingSection from "./HeadingSection"
import HTMLSection from "./HTMLSection"
import CSSSection from "./CSSSection"
import JSSection from "./JSSection"

function Learn() {
    return (
        <>
            <HeadingSection />
            <HTMLSection />
            <CSSSection />
            <JSSection />
        </>
    )
}

export default Learn
