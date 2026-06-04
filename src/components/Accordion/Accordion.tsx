import styles from "./Accordion.module.css";

import { FaAngleDown } from "react-icons/fa6";

const Accordion = () => {
  return (
    <section className={styles.accordionWrapper}>
      <h2>Frequently Asked Questions</h2>
      <details className={styles.accordionDetails}>
        <summary className={styles.accordionSummary}>
          <h3> How much is the tour?</h3>
          <span className={styles.accordionIcon}>
            <FaAngleDown />
          </span>
        </summary>
        <p className={styles.accordionText}>
          ras sem ligula, bibendum in scelerisque ac, vestibulum pulvinar nulla.
          Duis eleifend sed dolor ut tempor. Suspendisse potenti. Integer
          elementum tristi
        </p>
      </details>
      <details className={styles.accordionDetails}>
        <summary className={styles.accordionSummary}>
          <h3> How much is the tour?</h3>
          <span className={styles.accordionIcon}>
            <FaAngleDown />
          </span>
        </summary>
        <p>
          ras sem ligula, bibendum in scelerisque ac, vestibulum pulvinar nulla.
          Duis eleifend sed dolor ut tempor. Suspendisse potenti. Integer
          elementum tristi
        </p>
      </details>
      <details className={styles.accordionDetails}>
        <summary className={styles.accordionSummary}>
          <h3> How much is the tour?</h3>
          <span className={styles.accordionIcon}>
            <FaAngleDown />
          </span>
        </summary>
        <p>
          ras sem ligula, bibendum in scelerisque ac, vestibulum pulvinar nulla.
          Duis eleifend sed dolor ut tempor. Suspendisse potenti. Integer
          elementum tristi
        </p>
      </details>
    </section>
  );
};

export default Accordion;
