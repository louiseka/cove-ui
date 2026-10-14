import { useState } from "react";
import Dialog from "./Dialog";
import styles from "./Dialog.module.css";

const DialogDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={`${styles.dialogBtn} ${styles.dialogConfirm}`}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
      >
        Cancel Booking
      </button>
      <Dialog
        title="Cancel this booking?"
        description="You'll lose your place on this trip as once confirmed, it can't be undone."
        confirmLabel="Cancel booking"
        dismissLabel="Keep booking"
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default DialogDemo;
