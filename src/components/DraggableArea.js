import { useState, useEffect } from "react";
import Draggable from "react-draggable";
import isCollision from "../utils/isCollision";
import areArraysEqual from "../utils/areArraysEqual";
import ActivePlayer from "./icons/ActivePlayer";
import InactivePlayer from "./icons/InactivePlayer";
import { mazes } from "../config/mazes";
import { MAX_COINS } from "../config/constants";

const DraggableMaze = ({
  grid,
  collisions,
  setCollisions,
  mazeNo,
  setMazeNo,
  coordPosition,
  setCoordPosition,
  coins,
  setCoins,
  unit,
}) => {
  const [gridPosition, setGridPosition] = useState({
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
    if (!grid[y][x]) return true;

    // check if movement is diagonal
    if (deltaX === deltaY) return true;

    return false;
  };

  const addPlayerMarker = (gridData) => {
    const newCollisions = [
      ...collisions,
      {
        id: "player",
        coord: [gridData.lastX, gridData.lastY],
        element: InactivePlayer,
        value: 0,
        isEnd: false,
      },
    ];
    setCollisions(newCollisions);
  };

  const handleOutOfBounds = (gridData) => {
    if (!outOfBounds) {
      addPlayerMarker(gridData);
    }

    setOutOfBounds(true);
    return false;
  };

  const handleDrag = (e, data) => {
    const { x, y, lastX, lastY, deltaX, deltaY } = data;

    const gridData = {
      x: Math.round(x / unit),
      y: Math.round(y / unit),
      lastX: Math.round(lastX / unit),
      lastY: Math.round(lastY / unit),
      deltaX: Math.abs(Math.round(deltaX / unit)),
      deltaY: Math.abs(Math.round(deltaY / unit)),
    };

    if (isMoveOutOfBounds(grid, gridData)) {
      return handleOutOfBounds(gridData);
    } else if (!outOfBounds) {
      const coord = [gridData.x, gridData.y];

      if (isCollision(coord, collisions)) {
        const collisionData = getCollisionData(gridData, collisions);

        if (collisionData.value > coins) return handleOutOfBounds(gridData);

        setCollisions(
          collisions.filter((c, idx) => idx !== collisionData.index)
        );
        setCoins(coins - collisionData.value);

        if (collisionData.isEnd) {
          if (mazeNo < mazes.length - 1) {
            setMazeNo((prev) => prev + 1);
          } else {
            setMazeNo(0);
            setCoins(MAX_COINS);
          }
        }
      }

      setCoordPosition({ x: gridData.x, y: gridData.y });
      setGridPosition({ x, y });
    }
  };

  const resetPlay = (e) => {
    e.preventDefault();
    const newCollisions = collisions.filter((c) => c.id !== "player");
    setCollisions(newCollisions);
    setOutOfBounds(false);
  };

  useEffect(() => {
    setGridPosition({ x: unit * coordPosition.x, y: unit * coordPosition.y });
  }, [unit, coordPosition]);

  return (
    <div
      className="draggable-area"
      onTouchEnd={resetPlay}
      onMouseUp={resetPlay}
      onMouseOut={resetPlay}
    >
      <Draggable
        axis="both"
        handle=".handle"
        grid={[unit, unit]}
        scale={1}
        onDrag={handleDrag}
        bounds="parent"
        position={gridPosition}
        disabled={outOfBounds}
      >
        <div
          className="handle draggable-element"
          style={{
            height: unit,
            width: unit,
            opacity: outOfBounds ? 0 : 1,
          }}
        >
          <ActivePlayer unit={unit} />
        </div>
      </Draggable>
    </div>
  );
};

export default DraggableMaze;
