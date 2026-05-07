import { useState } from "react";

import type { PasswordInputProps } from "./PasswordInput.type";
import styles from "./PasswordInput.module.css";

const PasswordInput = ({
  children,
  id,
  name,
  required,
  showToggle,
}: PasswordInputProps) => {
  const [visible, setVisible] = useState(false);

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
        type={visible ? "text" : "password"}
      ></input>
      {showToggle && (
        <button
          className={styles.passwordToggle}
          type="button"
          onClick={() => setVisible(!visible)}
        >
          {visible ? "Hide password" : "Show password"}
        </button>
      )}
    </div>
  );
};

export default PasswordInput;
