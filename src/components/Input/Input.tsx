import type { InputProps } from "./Input.type";
import styles from "./Input.module.css";

const Input = ({
  children,
  id,
  name,
  type,
  required = false,
  size = 30,
}: InputProps) => {
  return (
    <div>
      <label className={styles.label} htmlFor={id}>
        {children}
      </label>
      <input
        className={styles.input}
        required={required}
        type={type}
        id={id}
        name={name}
        size={size}
      />
    </div>
  );
};

export default Input;
