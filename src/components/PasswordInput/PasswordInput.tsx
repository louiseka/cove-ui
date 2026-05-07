import type { PasswordInputProps } from "./PasswordInput.type";

import styles from "./PasswordInput.module.css";

const PasswordInput = ({
  children,
  id,
  name,
  required,
}: PasswordInputProps) => {
  return (
    <div>
      <label className={styles.label} htmlFor={id}>
        {children}
        {required && <span className={styles.labelRequired}> (Required)</span>}
      </label>
      <input
        className={styles.input}
        required={required}
        id={id}
        name={name}
        type="password"
      ></input>
    </div>
  );
};

export default PasswordInput;
