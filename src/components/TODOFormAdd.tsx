import React, { useState } from "react";
import TODOButton from "./base/TODOButton";
import "../resources/styles/components/todoFormAdd.css";

function TODOFormAdd(props: Props) {
  const { onCancel, onSubmit } = props;
  const [description, setDescription] = useState<string>("");

  return (
    <form
      className="t-form-add"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(description)
      }}
    >
      <header>
        <h2>Agregar Actividad</h2>
      </header>
      <textarea
        value={description}
        required
        placeholder="Descripción de la actividad"
        onChange={(event) => setDescription(event.target.value)}
      />
      <footer>
        <TODOButton
          className="t-form-btn"
          text="Cancelar"
          type="button"
          onClick={() => onCancel()}
        />
        <TODOButton className="t-form-btn" text="Agregar" type="submit" />
      </footer>
    </form>
  );
}

interface Props {
  onSubmit: (description: string) => void;
  onCancel: () => void;
}

export default TODOFormAdd;
