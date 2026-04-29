import styles from "./SiteNav.module.css";
import { useState } from "react";
import { NavLink } from "react-router";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const SiteNav = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Button", path: "button" },
    { name: "Input", path: "modal" },
  ];

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
          {navItems.map((item) => (
            <li key={item.path} className={styles.navItem}>
              <NavLink
                to={`/components/${item.path}`}
                className={({ isActive }) =>
                  isActive ? styles.navLinkActive : styles.navLink
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SiteNav;
