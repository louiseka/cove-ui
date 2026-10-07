import { useState } from "react";
import Dialog from "./Dialog";

const DialogDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} aria-expanded={open}>
        Open Modal
      </button>
      <Dialog
        title="This is a dialog"
        description="This is the dialog's description"
        showCompleteButton
        showCloseButton
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default DialogDemo;
