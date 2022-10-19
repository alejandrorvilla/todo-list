import React from "react";
import TODOButton from "../components/base/TODOButton";
import TODOCounter from "../components/TODOCounter";
import TODOList from "../components/TODOList";
import TODOModal from "../components/base/TODOModal";
import TODOSearcher from "../components/TODOSearcher";
import TODOFormAdd from "../components/TODOFormAdd";
import useItems from "../hooks/useItems";
import "../resources/styles/main.css";
import TODOHeader from "../components/base/TODOHeader";

function Main() {
  const {
    addActivity,
    onCompletedActivity,
    onDeletedActivity,
    filteredItems,
    items,
    showModal,
    setShowModal,
    setSearcherValue,
  } = useItems();

  return (
    <React.Fragment>
      <TODOHeader>
        <TODOCounter items={items} />
        <TODOSearcher onSearch={setSearcherValue} />
      </TODOHeader>
      <section className="t-main">
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
