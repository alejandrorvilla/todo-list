import React, { useState } from "react";
import TODOButton from "../components/base/TODOButton";
import TODOCounter from "../components/TODOCounter";
import TODOList from "../components/TODOList";
import TODOModal from "../components/base/TODOModal";
import TODOSearcher from "../components/TODOSearcher";
import useItems from "../hooks/useItems";
import { Item } from "../model/Item";
import "../resources/styles/main.css";
import TODOFormAdd from "../components/TODOFormAdd";

function Main() {
  const [items, setItems] = useItems("activities", []);
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

  return (
    <React.Fragment>
      <header>
        <TODOCounter items={items} />
      </header>
      <section className="t-main">
        <TODOSearcher onSearch={setSearcherValue} />
        <TODOButton
          text="Agregar actividad"
          type="button"
          onClick={() => setShowModal(true)}
        />
        <TODOList
          filteredItems={filteredItems}
          onCompleted={onCompletedActivity}
          onDeleted={onDeletedActivity}
        />
      </section>
      {showModal && (
        <TODOModal>
          <TODOFormAdd
            onCancel={() => setShowModal(false)}
            onSubmit={addActivity}
          />
        </TODOModal>
      )}
    </React.Fragment>
  );
}

export default Main;
