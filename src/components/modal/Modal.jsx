import { useEffect } from "react";
import { createPortal } from "react-dom";

import "./modal.css";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ modalSource, onClick }) => {
  useEffect(() => {
    const handleKeyDown = (e) => e.code === "Escape" && onClick();
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleBackdropClick = (e) => e.currentTarget === e.target && onClick();

  return createPortal(
    <div className="" onClick={handleBackdropClick}>
      <div className="">
        <img src={modalSource} alt="" />
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
