import areArraysEqual from "../utils/areArraysEqual";
import isCollision from "../utils/isCollision";
import { Fragment } from "react";

const MazeLayout = ({ grid, collisions, unit }) => {
  const renderCollisionElement = (coord, collisions) => {
    let Element = Fragment;

    if (!isCollision(coord, collisions)) return Element;

    collisions.forEach((collision) => {
      if (areArraysEqual(collision.coord, coord)) {
        Element = collision.element;
      }
    });

    return <Element unit={unit} {...Element.elementProps} />;
  };

  return (
    <div className="maze-layout">
      {grid.map((row, rowIdx) => (
        <div key={`row ${rowIdx}`} style={{ display: "flex" }}>
          {row.map((col, colIdx) => {
            const coord = [colIdx, rowIdx];

            return col ? (
              <div
                key={`${colIdx}, ${rowIdx}`}
                style={{
                  height: unit,
                  width: unit,
                  backgroundColor: "#c7c3c1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {renderCollisionElement(coord, collisions)}
              </div>
            ) : (
              <div
                key={`${colIdx}, ${rowIdx}`}
                style={{
                  height: unit,
                  width: unit,
                  backgroundColor: "white",
                }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default MazeLayout;
