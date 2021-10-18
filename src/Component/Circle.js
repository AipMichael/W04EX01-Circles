import "./circle.css";
import React, { useState } from "react";

function Circle() {
  const [state, setState] = useState(true);
  function changeColor() {
    setState(!state);
  }
  return (
    <div
      className="circles"
      onClick={changeColor}
      style={{ backgroundColor: state ? "orange" : "grey" }}
    ></div>
  );
}

export default Circle;
