import styles from "./SiteNav.module.css";

const SiteNav = () => {
  return (
    <nav className={styles.nav}>
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
  );
};

export default SiteNav;
