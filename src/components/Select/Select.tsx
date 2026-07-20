import type { SelectProps } from "./Select.type";

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
    <>
      <label htmlFor={selectName}>{label}:</label>
      <select
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
      {error && <p>{errorMessage}</p>}
    </>
  );
};

export default Select;
