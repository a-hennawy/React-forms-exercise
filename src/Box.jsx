import React from "react";
import "./Box.css";

function Box({
  id,
  handleRemove,
  backgroundColor = "green",
  width = "20",
  height = "20",
}) {
  const remove = () => handleRemove(id);
  return (
    <div
      style={{ backgroundColor, width: `${width}em`, height: `${height}em` }}
    >
      <button onClick={remove}>X</button>
    </div>
  );
}

export default Box;
