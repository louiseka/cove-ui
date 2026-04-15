import type { ButtonProps } from "./Button.type";

const Button = ({ children, type = "button", disabled }: ButtonProps) => {
  return (
    <>
      <button type={type} disabled={disabled}>
        {children}
      </button>
    </>
  );
};

export default Button;
