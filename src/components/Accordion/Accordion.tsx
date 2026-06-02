import styles from "./Accordion.module.css";

const Accordion = () => {
  return (
    <div>
      <details>
        <summary className={styles.accordionSummary}>
          How much is the tour?
        </summary>
        <p>
          ras sem ligula, bibendum in scelerisque ac, vestibulum pulvinar nulla.
          Duis eleifend sed dolor ut tempor. Suspendisse potenti. Integer
          elementum tristi
        </p>
      </details>
      <details>
        <summary>How much is the tour?</summary>
        <p>
          ras sem ligula, bibendum in scelerisque ac, vestibulum pulvinar nulla.
          Duis eleifend sed dolor ut tempor. Suspendisse potenti. Integer
          elementum tristi
        </p>
      </details>
      <details>
        <summary>How much is the tour?</summary>
        <p>
          ras sem ligula, bibendum in scelerisque ac, vestibulum pulvinar nulla.
          Duis eleifend sed dolor ut tempor. Suspendisse potenti. Integer
          elementum tristi
        </p>
      </details>
    </div>
  );
};

export default Accordion;
