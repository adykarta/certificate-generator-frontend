import React, { useState } from "react";
import { Wrapper } from "./style";

const Playground = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  const dragMouseDown = (e) => {
    e = e || window.event;
    e.preventDefault();
    setPos((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
    setIsPressed(true);
  };
  function closeDragElement(e) {
    console.log("in");
    setIsPressed(false);
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    let pos1 = pos.x - e.clientX;
    let pos2 = pos.y - e.clientY;
    setPos({
      x: e.clientX,
      y: e.clientY,
    });

    e.target.style.top = e.target.offsetTop - pos2 + "px";
    e.target.style.left = e.target.offsetLeft - pos1 + "px";
  }
  return (
    <Wrapper>
      <div
        id="mydiv"
        onMouseOut={closeDragElement}
        onMouseDown={dragMouseDown}
        onMouseMove={isPressed ? elementDrag : null}
        onMouseUp={closeDragElement}
      >
        move me
      </div>
      <div className="box"></div>
    </Wrapper>
  );
};
export default Playground;