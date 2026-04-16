import type { ButtonProps } from "./Button.type";
import styles from "./Button.module.css";

const Button = ({
  children,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  return (
    <>
      <button className={styles.button} disabled={disabled} type={type}>
        {children}
      </button>
    </>
  );
};

export default Button;
