export interface InputProps {
  children: React.ReactNode;
  id: string;
  name: string;
  type: "text" | "number" | "email" | "tel";
  required?: boolean;
  pattern?: string;
}
