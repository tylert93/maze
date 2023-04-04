import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

export default function Square({ canMove, coord, setBallPosition, children }) {
  const fill = canMove ? "black" : "white";

  const handleDrop = () => {
    if (canMove) {
      setBallPosition(coord);
    }
  };

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.BALL,
      drop: () => handleDrop(),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    coord
  );

  return (
    <div
      ref={drop}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: fill,
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </div>
  );
}
