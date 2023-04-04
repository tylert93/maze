import React from "react";
import { ItemTypes } from "./ItemTypes";
import { useDrag } from "react-dnd";

const Ball = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BALL,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        height: "80%",
        width: "80%",
        borderRadius: "50%",
        backgroundColor: "red",
      }}
    />
  );
};

export default Ball;
