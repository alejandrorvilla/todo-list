import React from "react";
import "../resources/styles/components/todoSearcher.css";

function TODOSearcher(props: Props) {
  const { onSearch } = props;

  return (
    <input
      className="t-searcher"
      placeholder="Buscar"
      onChange={(event) => {
        onSearch(event.target.value);
      }}
    />
  );
}

interface Props {
  onSearch: (value: string) => void;
}

export default TODOSearcher;
