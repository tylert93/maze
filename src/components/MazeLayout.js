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
        <div className="maze-row" key={`row ${rowIdx}`}>
          {row.map((col, colIdx) => {
            const coord = [colIdx, rowIdx];

            return col ? (
              <div
                className="maze-playable-tile"
                key={`${colIdx}, ${rowIdx}`}
                style={{
                  height: unit,
                  width: unit,
                }}
              >
                {renderCollisionElement(coord, collisions)}
              </div>
            ) : (
              <div
                className="maze-non-playable-tile"
                key={`${colIdx}, ${rowIdx}`}
                style={{
                  height: unit,
                  width: unit,
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
