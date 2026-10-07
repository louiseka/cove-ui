import type { DialogProps } from "./Dialog.type";
import { useEffect } from "react";

const Dialog = ({
  isOpen,
  onClose,
  title,
  description,
  showCompleteButton,
  showCloseButton,
}: DialogProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    // Runs on every key press and when the key is 'Escape', it calls onClose()

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  //keydown listens for key presses on page and the return function is cleanup.

  return (
    <>
      <dialog open={isOpen}>
        <h2>{title}</h2>
        <p>{description}</p>
        {showCompleteButton && <button type="button">Create </button>}
        {showCloseButton && (
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        )}
      </dialog>
    </>
  );
};

export default Dialog;
