import React from "react";
import { Item } from "../model/Item";
import "../resources/styles/components/todoItem.css";

function TODOItem(props: Props) {
  const { item, onCompleted, onDeleted } = props;
  const { display, completed } = item;
  return (
    <li className={`t-item ${completed ? "t-item-completed" : ""}`}>
      <span
        className="t-icon t-icon-check"
        onClick={() => onCompleted(display)}
      >
        ✓
      </span>
      <p>{display}</p>
      <span className="t-icon t-icon-delete" onClick={() => onDeleted(display)}>
        x
      </span>
    </li>
  );
}

interface Props {
  item: Item;
  onCompleted: (display: string) => void;
  onDeleted: (display: string) => void;
}

export default TODOItem;
