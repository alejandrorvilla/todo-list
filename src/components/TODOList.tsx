import React from "react";
import { Item } from "../model/Item";
import TODOItem from "./TODOItem";
import "../resources/styles/components/todoList.css";

function TODOList(props: Props) {
  const { filteredItems, onCompleted, onDeleted } = props;

  return (
    <ul className="t-list">
      {filteredItems.map((item) => (
        <TODOItem
          key={item.display}
          item={item}
          onCompleted={onCompleted}
          onDeleted={onDeleted}
        />
      ))}
    </ul>
  );
}

interface Props {
  filteredItems: Array<Item>;
  onCompleted: (display: string) => void;
  onDeleted: (display: string) => void;
}

export default TODOList;
