import React from "react";
import { Item } from "../model/Item";
import TODOItem from "./TODOItem";
import "../resources/styles/components/todoList.css";

function TODOList(props: Props) {
  const { filteredItems, items, setItems } = props;
  const onCompleted = (display: string) => {
    const index = items.findIndex((item) => item.display === display);
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
  };
  const onDeleted = (display: string) => {
    const index = items.findIndex((item) => item.display === display);
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

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
  items: Array<Item>;
  filteredItems: Array<Item>;
  setItems: (items: Array<Item>) => void;
}

export default TODOList;
