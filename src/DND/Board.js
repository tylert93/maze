import React from "react";
import Square from "./Square";
import Ball from "./Ball";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const grid = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

export default function Board({ ballPosition, setBallPosition }) {
  const squares = [];
  grid.map((row, y) => {
    row.map((canMove, x) => {
      squares.push(renderSquare(x, y, canMove, ballPosition));
    });
  });

  function renderSquare(x, y, canMove, [ballX, ballY]) {
    const isballHere = x === ballX && y === ballY;
    const piece = isballHere ? <Ball /> : null;

    return (
      <div key={`${x},${y}`} style={{ width: "10%", height: "10%" }}>
        <Square
          canMove={canMove}
          coord={[x, y]}
          setBallPosition={setBallPosition}
        >
          {piece}
        </Square>
      </div>
    );
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {squares}
      </div>
    </DndProvider>
  );
}
