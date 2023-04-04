import Board from "./Board";
import { useState } from "react";

const DND = () => {
  const [ballPosition, setBallPosition] = useState([0, 1]);
  return (
    <div style={{ height: 500, width: 500 }}>
      <Board ballPosition={ballPosition} setBallPosition={setBallPosition} />
    </div>
  );
};

export default DND;
