import type { InputProps } from "./Input.type";

const Input = ({
  children,
  id,
  name,
  type,
  required = false,
  size = 30,
}: InputProps) => {
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input required={required} type={type} id={id} name={name} size={size} />
    </>
  );
};

export default Input;
