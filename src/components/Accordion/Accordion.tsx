import type { AccordionProps } from "./Accordion.type";
import styles from "./Accordion.module.css";

import { FaAngleDown } from "react-icons/fa6";

const Accordion = ({ heading, items }: AccordionProps) => {
  return (
    <section className={styles.accordionWrapper}>
      {heading && <h2>{heading}</h2>}
      {items.map((item, index) => (
        <details key={index} className={styles.accordionDetails}>
          <summary className={styles.accordionSummary}>
            <h3> {item.title}</h3>
            <span className={styles.accordionIcon}>
              <FaAngleDown />
            </span>
          </summary>
          <p className={styles.accordionText}>{item.content}</p>
        </details>
      ))}
    </section>
  );
};

export default Accordion;
