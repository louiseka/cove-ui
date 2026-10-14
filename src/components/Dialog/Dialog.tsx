import type { DialogProps } from "./Dialog.type";
import styles from "./Dialog.module.css";
import { useEffect, useRef } from "react";
import { FaXmark } from "react-icons/fa6";

const Dialog = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmLabel,
  dismissLabel,
}: DialogProps) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  return (
    <>
      <dialog ref={ref} className={styles.dialog} onClose={onClose}>
        <div className={styles.dialogHeader}>
          <button
            className={styles.dialogCloseBtn}
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <FaXmark className={styles.closeIcon} />
          </button>
          <h4 className={styles.dialogHeading}>{title}</h4>
        </div>
        <p className={styles.dialogDescription}>{description}</p>
        <div className={styles.dialogBtnContainer}>
          <button
            className={`${styles.dialogBtn} ${styles.dialogDismiss}`}
            type="button"
            onClick={onClose}
          >
            {dismissLabel}
          </button>
          {onConfirm && (
            <button
              className={`${styles.dialogBtn} ${styles.dialogConfirm}`}
              type="button"
              onClick={onConfirm}
            >
              {confirmLabel}
            </button>
          )}
        </div>
      </dialog>
    </>
  );
};

export default Dialog;
