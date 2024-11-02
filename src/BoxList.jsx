import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css";

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  const add = (boxObj) => {
    setBoxes((boxes) => [...boxes, boxObj]);
  };

  const remove = (id) =>
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));

  const boxComponents = boxes.map((box) => (
    <Box
      id={box.id}
      key={box.id}
      backgroundColor={box.backgroundColor}
      width={box.width}
      height={box.height}
      handleRemove={remove}
    />
  ));

  return (
    <div className="BoxList">
      <NewBoxForm createBox={add} />
      {boxComponents}
    </div>
  );
}

export default BoxList;
