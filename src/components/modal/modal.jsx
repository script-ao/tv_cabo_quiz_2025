import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../button";

function Modal({
  text,
  setOpenModal,
  className,
  to,
  buttonText = "Continuar",
}) {
  const navigate = useNavigate();

  function handleClick() {
    setOpenModal(false);
    if (to) {
      navigate(to);
    }
  }

  return (
    <React.Fragment>
      <div className="mo_wrapper">
        <div className="mo_container">
          <span>{text}</span>
          <Button
            text={buttonText}
            onClick={handleClick}
            className={className}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export { Modal };
