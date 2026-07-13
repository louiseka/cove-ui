import type { BadgeProps } from "./Badge.type";
import {
  FaFireFlameCurved,
  FaPercent,
  FaThumbtack,
  FaBullhorn,
  FaCheck,
  FaX,
  FaSpinner,
} from "react-icons/fa6";

import styles from "./Badge.module.css";

const variantIcons: Record<BadgeProps["variant"], React.ReactNode> = {
  success: <FaCheck />,
  warning: <FaSpinner />,
  danger: <FaX />,
  new: <FaBullhorn />,
  featured: <FaThumbtack />,
  sale: <FaPercent />,
  popular: <FaFireFlameCurved />,
};

const Badge = ({ children, withIcon, variant, live }: BadgeProps) => {
  const resolvedIcon = withIcon && variantIcons[variant];

  return (
    <span aria-live={live} className={`${styles.badge} ${styles[variant]}`}>
      {resolvedIcon && (
        <span className={styles.icon} aria-hidden="true">
          {resolvedIcon}
        </span>
      )}
      {children}
    </span>
  );
};

export default Badge;
