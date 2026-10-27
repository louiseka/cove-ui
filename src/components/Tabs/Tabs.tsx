import styles from "./Tabs.module.css";

const Tabs = () => {
  return (
    <div className={styles.tabs}>
      <ul className={styles.tabsList}>
        <li className={styles.tabsListItemSelected}>
          <a className={styles.tabsTabSelected} href="#">
            Tab 1
          </a>
        </li>
        <li className={styles.tabsListItem}>
          <a className={styles.tabsTab} href="#">
            Tab 2
          </a>
        </li>
        <li className={styles.tabsListItem}>
          <a className={styles.tabsTab} href="#">
            Tab 3
          </a>
        </li>
      </ul>

      <div className={styles.tabsPanel}>
        <h2>Tab 1 Heading</h2>
        <p>Tab 1 contents</p>
      </div>
      <div className={styles.tabsPanel}>
        <h2>Tab 2 Heading</h2>
        <p>Tab 2 contents</p>
      </div>
      <div className={styles.tabsPanel}>
        <h2>Tab 3 Heading</h2>
        <p>Tab 3 contents</p>
      </div>
    </div>
  );
};

export default Tabs;
