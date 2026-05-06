import type { InputProps } from "./Input.type";
import styles from "./Input.module.css";

const Input = ({
  children,
  id,
  name,
  type,
  required = false,
  pattern,
}: InputProps) => {
  return (
    <div>
      <label className={styles.label} htmlFor={id}>
        <span>{children}</span>
        {required && <span className={styles.labelRequired}> (Required)</span>}
      </label>
      <input
        className={styles.input}
        required={required}
        type={type}
        id={id}
        name={name}
        pattern={pattern}
      />
    </div>
  );
};

export default Input;
