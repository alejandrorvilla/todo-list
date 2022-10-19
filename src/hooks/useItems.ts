import { useState } from "react";
import { Item } from "../model/Item";
import useLocalStorage from "./useLocalStorage";

function useItems() {
  const [items, setItems] = useLocalStorage("activities", []);
  const [searcherValue, setSearcherValue] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const addActivity = (description: string) => {
    const newItems = [...items];
    newItems.push({
      display: description,
      completed: false,
    });
    setItems(newItems);
    setShowModal(false);
  };
  const onCompletedActivity = (display: string) => {
    const index = items.findIndex((item) => item.display === display);
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
  };
  const onDeletedActivity = (display: string) => {
    const index = items.findIndex((item) => item.display === display);
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  let filteredItems: Array<Item>;
  if (searcherValue) {
    filteredItems = items.filter((item) =>
      item.display.toLowerCase().includes(searcherValue.toLowerCase())
    );
  } else {
    filteredItems = items;
  }

  return {
    addActivity,
    onCompletedActivity,
    onDeletedActivity,
    filteredItems,
    items,
    showModal,
    setShowModal,
    setSearcherValue,
  }
}

export default useItems;
