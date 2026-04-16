import type { ButtonProps } from "./Button.type";
import styles from "./Button.module.css";

const Button = ({
  children,
  type = "button",
  disabled = false,
  variant = "primary",
  loading = false,
}: ButtonProps) => {
  return (
    <>
      <button
        className={`${styles.button} ${styles[variant]}`}
        disabled={disabled || loading}
        type={type}
      >
        {loading ? "Loading..." : children}
      </button>
    </>
  );
};

export default Button;
