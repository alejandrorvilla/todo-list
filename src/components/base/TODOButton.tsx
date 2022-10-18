import React from "react";
import "../../resources/styles/components/todoButton.css";

function TODOButton(props: Props) {
  const { text, type, className, onClick } = props;

  return (
    <button
      className={`t-btn ${className ? className : ""}`}
      type={type}
      onClick={() => onClick && onClick()}
    >
      {text}
    </button>
  );
}

interface Props {
  text: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}

export default TODOButton;
