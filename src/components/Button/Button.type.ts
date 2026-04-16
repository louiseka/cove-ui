export interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  variant: "primary" | "secondary";
  disabled?: boolean;
  loading?: boolean;
}
