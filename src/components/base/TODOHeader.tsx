import React from "react";
import "../../resources/styles/components/todoHeader.css";

function TODOHeader(props: Props) {
  const { children } = props;
  return <header className="t-header">{children}</header>;
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default TODOHeader;
