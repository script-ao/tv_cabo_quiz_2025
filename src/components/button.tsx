import React from "react";

function Button(props) {
  const { text, className, onClick } = props;

  return (
    <React.Fragment>
      <button className={className} onClick={onClick}>
        <span>{text}</span>
      </button>
    </React.Fragment>
  );
}

export { Button };