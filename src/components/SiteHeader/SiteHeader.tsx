import styles from "./SiteHeader.module.css";
import { FaSquareGithub } from "react-icons/fa6";

const SiteHeader = () => {
  return (
    <header className={styles.header}>
      <div>
        <h1>CoveUI</h1>
        <p>React & TypeScript Design System</p>
      </div>
      <div>
        <a
          className={styles.headerButton}
          href="https://github.com/louiseka/cove-ui"
          target="_blank"
        >
          View GitHub Repo <FaSquareGithub size={20} />
        </a>
      </div>
    </header>
  );
};

export default SiteHeader;
