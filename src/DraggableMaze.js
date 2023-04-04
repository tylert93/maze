import Draggable from "react-draggable";
import { useState } from "react";
import MazeLayout from "./MazeLayout";

const DraggableMaze = () => {
  const grid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0],
  ];

  const [position, setPosition] = useState({ x: 200, y: 600 });
  const [outOfBounds, setOutOfBounds] = useState(false);

  const handleDrag = (e, data) => {
    console.log("Event: ", e);
    console.log("Data: ", data);

    const { x, y } = data;

    const xAxis = x / 50;
    const yAxis = y / 50;

    if (!grid[yAxis][xAxis]) {
      setOutOfBounds(true);
      return false;
    } else {
      if (xAxis === 8 && yAxis === 0) {
        setPosition({ x, y });
        setTimeout(() => alert("You won!"), 0);
        setPosition({ x: 200, y: 600 });
      }
      setPosition({ x, y });
    }
  };

  document.addEventListener(
    "mouseup",
    (e) => {
      e.preventDefault();
      setOutOfBounds(false);
    },
    false
  );

  return (
    <div style={{ position: "relative" }}>
      <div className="container">
        <Draggable
          axis="both"
          handle=".handle"
          grid={[50, 50]}
          scale={1}
          onDrag={handleDrag}
          bounds="parent"
          position={position}
        >
          <div
            className="handle"
            style={{
              height: 50,
              width: 50,
              borderRadius: "50%",
              backgroundColor: "#c7c3c1",
              cursor: "grab",
            }}
          >
            <div
              style={{
                height: 40,
                width: 40,
                borderRadius: "50%",
                backgroundColor: outOfBounds ? "red" : "#09e026",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        </Draggable>
      </div>
      <MazeLayout grid={grid} />
    </div>
  );
};

export default DraggableMaze;
