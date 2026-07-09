import type { BadgeProps } from "./Badge.type";
import styles from "./Badge.module.css";

const Badge = ({ children, icon, variant, live }: BadgeProps) => {
  return (
    <span aria-live={live} className={`${styles.badge} ${styles[variant]}`}>
      {icon && <span aria-hidden="true">{icon}</span>}
      {children}
    </span>
  );
};

export default Badge;
