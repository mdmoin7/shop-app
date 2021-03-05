import React from "react";
import { ThemeContext } from "../context";

type ColProps = {
  colSize: number;
};

const Column: React.FC<ColProps> = (props) => {
  const cls = "col-md-" + props.colSize;
  const theme = React.useContext(ThemeContext);
  const color = theme === "light" ? "text-dark" : "text-white";

  return <div className={`${cls} ${color}`}>{props.children}</div>;
};
export default Column;
