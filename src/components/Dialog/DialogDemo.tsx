import { useState } from "react";
import Dialog from "./Dialog";

const DialogDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} aria-expanded={open}>
        Open Modal
      </button>
      <Dialog onClose={() => setOpen(false)} />
    </>
  );
};

export default DialogDemo;
