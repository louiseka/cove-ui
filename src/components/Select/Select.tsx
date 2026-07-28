import type { SelectProps } from "./Select.type";
import styles from "./Select.module.css";

const Select = ({
  label,
  selectName,
  value,
  options,
  onChange,
  disabled,
  error,
  errorMessage,
}: SelectProps) => {
  return (
    <div className={styles.select}>
      <label className={styles.selectLabel} htmlFor={selectName}>
        {label}:
      </label>

      <select
        className={`${styles.selectInput} ${error ? styles.error : ""} `}
        aria-describedby={error ? `select-${selectName}` : undefined}
        aria-invalid={error}
        disabled={disabled}
        name={selectName}
        id={selectName}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
      {error && (
        <p id={`select-${selectName}`} className={styles.errorMessage}>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default Select;
