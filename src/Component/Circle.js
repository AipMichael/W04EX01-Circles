import "./circle.css";
import React, { useState } from "react";

function Circle() {
  const [selected, setState] = useState(false);
  function changeColor() {
    setState(!selected);
  }
  return (
    <div
      className="circles"
      onClick={changeColor}
      style={{ backgroundColor: selected ? "orange" : "grey" }}
    ></div>
  );
}

export default Circle;
