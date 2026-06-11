import type { ButtonProps } from "./Button.type";
import styles from "./Button.module.css";

const Button = ({
  children,
  type = "button",
  disabled = false,
  variant = "primary",
  loading = false,
  fullWidth = false,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${fullWidth ? styles.fullWidth : ""} ${disabled ? styles.disabled : ""} ${loading ? styles.loading : ""}`}
      disabled={disabled || loading}
      type={type}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
