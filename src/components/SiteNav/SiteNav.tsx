import styles from "./SiteNav.module.css";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const SiteNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.navContainer}>
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu {open ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      <nav className={`${styles.nav} ${open ? styles.open : ""}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a className={styles.navLinkActive} href="#">
              Button
            </a>
          </li>
          <li className={styles.navItem}>Modal</li>
          <li className={styles.navItem}>Modal</li>
        </ul>
      </nav>
    </div>
  );
};

export default SiteNav;
