import React from "react";
import ReactDOM from "react-dom";
import "../../resources/styles/components/todoModal.css";

function TODOModal(props: Props) {
  return ReactDOM.createPortal(
    <div className="t-modal">
      <div className="t-content">{props.children}</div>
    </div>,
    document.querySelector("#modal") as Element
  );
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default TODOModal;
