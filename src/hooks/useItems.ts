import { useState } from "react";
import { Item } from "../model/Item";

function useItems(itemName: string, initialValue: Array<Item>) {
  const storageItems = localStorage.getItem(itemName);
  let parsedItems: Array<Item>;
  if (storageItems) {
    parsedItems = JSON.parse(storageItems);
  } else {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItems = initialValue;
  }

  const [items, setItems] = useState<Array<Item>>(parsedItems);

  const saveItems = (newItems: Array<Item>) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItems(newItems);
  };

  return [items, saveItems] as const;
}

export default useItems;
