import React, { useCallback, useEffect, useRef, useState } from "react";
import { IBordModalProps } from "./BordModal.types";
import "./BordModal.scss";

const BordModal: React.FC<IBordModalProps> = ({
  modalContent,
  closesOnClickOutside = true,
  closeModalCallback,
  clickOutsideCallback,
  shouldCloseModal,
  customZIndex,
}) => {
  const [isModalOpened, setIsModalOpened] = useState(true);
  const modalContentRef = useRef<HTMLDivElement>(null);

  const onHandleClickAway = useCallback(
    (e: MouseEvent) => {
      if (
        modalContentRef.current &&
        !modalContentRef.current.contains(e.target as Node)
      ) {
        if (clickOutsideCallback) {
          clickOutsideCallback();
        }
        if (closesOnClickOutside) {
          setIsModalOpened(false);
        }
      }
    },
    [clickOutsideCallback, closesOnClickOutside]
  );

  useEffect(() => {
    window.addEventListener("mousedown", onHandleClickAway);
    return () => {
      window.removeEventListener("mousedown", onHandleClickAway);
    };
  }, [onHandleClickAway]);

  useEffect(() => {
    if (!shouldCloseModal) return;
    if (closeModalCallback) closeModalCallback();
    setIsModalOpened(false);
  }, [shouldCloseModal, closeModalCallback]);

  if (!isModalOpened) return <></>;

  return (
    <div
      className={`bordModal ${isModalOpened ? "" : "closed"}`}
      style={{ zIndex: customZIndex || undefined }}
      onClick={closeModalCallback}
    >
      <div ref={modalContentRef} className="modalContentContainer">
        {modalContent}
      </div>
    </div>
  );
};

export default BordModal;
