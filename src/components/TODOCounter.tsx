import React from "react";
import { Item } from "../model/Item";
import "../resources/styles/components/todoCounter.css";

function TODOCounter(props: Props) {
  const { items } = props;
  const completed = items.filter((item) => item.completed).length;
  return (
    <h2 className="t-counter">
      Se han completado {completed} de {items.length} actividades
    </h2>
  );
}

interface Props {
  items: Array<Item>;
}

export default TODOCounter;
