import areArraysEqual from "../utils/areArraysEqual";
import isCollision from "../utils/isCollision";

const MazeLayout = ({ grid, collisions, unit, coins }) => {
  const renderCollisionElement = (coord, collisions) => {
    let Element;
    let collisionData;

    if (!isCollision(coord, collisions)) return Element;

    collisions.forEach((collision) => {
      if (areArraysEqual(collision.coord, coord)) {
        Element = collision.element;
        collisionData = collision;
      }
    });

    return Element ? (
      <Element
        unit={unit}
        color={coins >= collisionData.value ? collisionData.color : "#747A87"}
      />
    ) : null;
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
