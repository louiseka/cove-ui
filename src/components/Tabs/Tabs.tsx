import type { TabsProps } from "./Tabs.type";
import styles from "./Tabs.module.css";

const Tabs = ({ items }: TabsProps) => {
  return (
    <div className={styles.tabs}>
      <ul className={styles.tabsList}>
        {items.map((item, index) => (
          <li key={index} className={styles.tabsListItem}>
            <a className={styles.tabsTab} href="#">
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      {items.map((item, index) => (
        <div key={index} className={styles.tabsPanel}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
