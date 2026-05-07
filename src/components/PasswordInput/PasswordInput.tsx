import type { PasswordInputProps } from "./PasswordInput.type";

const PasswordInput = ({
  children,
  id,
  name,
  required,
}: PasswordInputProps) => {
  return (
    <div>
      <label htmlFor={id}>{children}</label>
      <input required={required} id={id} name={name} type="password"></input>
    </div>
  );
};

export default PasswordInput;
