import type { DialogProps } from "./Dialog.type";

const Dialog = ({
  isOpen,
  title,
  description,
  showCompleteButton,
  showCloseButton,
}: DialogProps) => {
  return (
    <>
      <dialog open={isOpen}>
        <h2>{title}</h2>
        <p>{description}</p>
        {showCompleteButton && <button type="button">Create </button>}
        {showCloseButton && <button type="button">Cancel</button>}
      </dialog>
    </>
  );
};

export default Dialog;
