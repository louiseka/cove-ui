export interface OptionItem {
  value: string;
  label: string;
}

export interface SelectProps {
  label: string;
  selectName: string;
  value: string;
  options: OptionItem[];
  onChange: (value: string) => void;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
}
