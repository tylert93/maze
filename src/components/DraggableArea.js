import Draggable from "react-draggable";
import { useState } from "react";
import isCollision from "../utils/isCollision";
import areArraysEqual from "../utils/areArraysEqual";
import Player from "./icons/Player";

const DraggableMaze = ({
  grid,
  collisions,
  setCollisions,
  coins,
  setCoins,
  setShowPopup,
}) => {
  const [position, setPosition] = useState({ x: 200, y: 600 });
  const [outOfBounds, setOutOfBounds] = useState(false);

  const getCollisionData = (coord, collisions) => {
    let data = {};

    collisions.forEach((collision, idx) => {
      if (areArraysEqual(collision.coord, coord)) {
        data = collision;
        data.index = idx;
        return;
      }
    });

    return data;
  };

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
      if (isCollision([xAxis, yAxis], collisions)) {
        const collisionData = getCollisionData([xAxis, yAxis], collisions);

        setCollisions(
          collisions.filter((c, idx) => idx !== collisionData.index)
        );
        setCoins(coins - collisionData.value);

        if (collisionData.isEnd) {
          setShowPopup(true);
        }
      }
      setPosition({ x, y });
    }
  };

  document.el.addEventListener("touchmove", handleDrag);

  document.addEventListener(
    "mouseup",
    (e) => {
      e.preventDefault();
      setOutOfBounds(false);
    },
    false
  );

  return (
    <div className="draggable-area">
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
            backgroundColor: "#c7c3c1",
            cursor: "grab",
            transition: "0.1s linear",
          }}
        >
          <Player
            height={40}
            width={40}
            color={outOfBounds ? "red" : "#09e026"}
          />
        </div>
      </Draggable>
    </div>
  );
};

export default DraggableMaze;
