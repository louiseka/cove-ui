export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  showCompleteButton: boolean;
  showCloseButton: boolean;
}
