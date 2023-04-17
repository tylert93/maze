import { useState, useEffect } from "react";
import Draggable from "react-draggable";
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
  unit,
}) => {
  const [coordPosition, setCoordPosition] = useState({ x: 4, y: 12 });
  const [position, setPosition] = useState({
    x: unit * coordPosition,
    y: unit * coordPosition,
  });
  const [outOfBounds, setOutOfBounds] = useState(false);

  const getCollisionData = (gridData, collisions) => {
    let collisionData = {};
    const coord = [gridData.x, gridData.y];

    collisions.forEach((collision, idx) => {
      if (areArraysEqual(collision.coord, coord)) {
        collisionData = collision;
        collisionData.index = idx;
        return;
      }
    });

    return collisionData;
  };

  const isMoveOutOfBounds = (grid, gridData) => {
    const { x, y, deltaX, deltaY } = gridData;

    // check if player is on non-playable square
    if (!grid[y][x]) {
      console.log("here", grid[y][x]);
      return true;
    }

    // check if movement is diagonal
    //if (deltaX === deltaY) return true;

    return false;
  };

  const addPlayerMarker = (gridData) => {
    const newCollisions = [
      ...collisions,
      {
        id: "player",
        coord: [gridData.lastX, gridData.lastY],
        element: (
          <Player unit={unit} color={"red"} backgroundColor={"#c7c3c1"} />
        ),
        value: 0,
        isEnd: false,
      },
    ];
    setCollisions(newCollisions);
  };

  const handleDrag = (e, data) => {
    console.log("Event: ", e);
    console.log("Data: ", data);

    const { x, y, lastX, lastY, deltaX, deltaY } = data;

    const gridData = {
      x: Math.round(x / unit),
      y: Math.round(y / unit),
      lastX: Math.round(lastX / unit),
      lastY: Math.round(lastY / unit),
      deltaX: Math.abs(Math.round(deltaX / unit)),
      deltaY: Math.abs(Math.round(deltaY / unit)),
    };

    console.log("UNIT: ", unit);
    console.log("GRID DATA: ", gridData);

    if (isMoveOutOfBounds(grid, gridData)) {
      if (!outOfBounds) {
        addPlayerMarker(gridData);
      }

      setOutOfBounds(true);
      return false;
    } else if (!outOfBounds) {
      const coord = [gridData.x, gridData.y];

      if (isCollision(coord, collisions)) {
        const collisionData = getCollisionData(gridData, collisions);

        setCollisions(
          collisions.filter((c, idx) => idx !== collisionData.index)
        );
        setCoins(coins - collisionData.value);

        if (collisionData.isEnd) {
          setShowPopup(true);
        }
      }

      setCoordPosition({ x: gridData.x, y: gridData.y });
      setPosition({ x, y });
    }
  };

  const resetPlay = (e) => {
    e.preventDefault();
    const newCollisions = collisions.filter((c) => c.id !== "player");
    setCollisions(newCollisions);
    setOutOfBounds(false);
  };

  useEffect(() => {
    setPosition({ x: unit * coordPosition.x, y: unit * coordPosition.y });
  }, [unit]);

  return (
    <div
      className="draggable-area"
      onTouchEnd={resetPlay}
      onMouseUp={resetPlay}
    >
      <Draggable
        axis="both"
        handle=".handle"
        grid={[unit, unit]}
        scale={1}
        onDrag={handleDrag}
        bounds="parent"
        position={position}
      >
        <div
          className="handle draggable-element"
          style={{
            height: unit,
            width: unit,
            opacity: outOfBounds ? 0 : 1,
          }}
        >
          <Player unit={unit} color={outOfBounds ? "red" : "#09e026"} />
        </div>
      </Draggable>
    </div>
  );
};

export default DraggableMaze;
