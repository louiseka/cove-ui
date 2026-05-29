import styles from "./SiteFooter.module.css";

import { FaAnglesUp } from "react-icons/fa6";

const SiteFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log("button clicked");
  };

  return (
    <footer className={styles.footer}>
      <div>
        <p>Built by Louise Aldridge </p>
      </div>
      <div>
        <button
          className={styles.footerButton}
          onClick={scrollToTop}
          aria-label="Back to the top of the page"
        >
          <FaAnglesUp />
        </button>
      </div>
    </footer>
  );
};

export default SiteFooter;
