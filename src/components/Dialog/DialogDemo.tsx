import { useState } from "react";
import Dialog from "./Dialog";

const DialogDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} aria-expanded={open}>
        Cancel Booking
      </button>
      <Dialog
        title="Are you sure you want to cancel?"
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
