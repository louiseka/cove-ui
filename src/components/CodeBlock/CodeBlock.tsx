import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./CodeBlock.module.css";

type CodeBlockProps = {
  children: string;
  language?: string;
};

export default function CodeBlock({
  children,
  language = "tsx",
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={styles.codeWrapper}>
      <button className={styles.copyBtn} onClick={copy}>
        {copied ? "Copied" : "Copy"}
      </button>

      <SyntaxHighlighter language={language} style={oneDark}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
