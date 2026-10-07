import type { DialogProps } from "./Dialog.type";
import { useEffect } from "react";

const Dialog = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmLabel,
  dismissLabel,
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
        <button type="button" onClick={onClose}>
          Close
        </button>
        <h2>{title}</h2>
        <p>{description}</p>
        <button type="button" onClick={onClose}>
          {dismissLabel}
        </button>
        {onConfirm && (
          <button type="button" onClick={onConfirm}>
            {confirmLabel}
          </button>
        )}
      </dialog>
    </>
  );
};

export default Dialog;
