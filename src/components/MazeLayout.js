import areArraysEqual from "../utils/areArraysEqual";
import isCollision from "../utils/isCollision";

const MazeLayout = ({ grid, collisions, unit }) => {
  const renderCollisionElement = (coord, collisions) => {
    let element = <></>;

    collisions.forEach((collision) => {
      if (areArraysEqual(collision.coord, coord)) {
        element = collision.element;
      }
    });

    return element;
  };

  return (
    <div className="maze-layout">
      {grid.map((row, rowIdx) => (
        <div key={`row ${rowIdx}`} style={{ display: "flex" }}>
          {row.map((col, colIdx) => {
            const coord = [colIdx, rowIdx];

            return col ? (
              isCollision(coord, collisions) ? (
                renderCollisionElement(coord, collisions)
              ) : (
                <div
                  key={`${colIdx}, ${rowIdx}`}
                  style={{
                    height: unit,
                    width: unit,
                    backgroundColor: "#c7c3c1",
                  }}
                />
              )
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
