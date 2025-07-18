import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../button";

function Modal({ text, setOpenModal, className }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/intro");
  }

  return (
    <React.Fragment>
      <div className="mo_wrapper">
        <div className="mo_container">
          <span>{text}</span>
          <Button
            text="OK"
            onClick={() => {
              setOpenModal(false);
              handleClick();
            }}
            className={className}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export { Modal };
