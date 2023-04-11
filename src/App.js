import DraggableArea from "./components/DraggableArea";
import MazeLayout from "./components/MazeLayout";
import Flag from "./components/icons/Flag";
import Ticket from "./components/icons/Ticket";
import Cake from "./components/icons/Cake";
import { useState } from "react";
import Wallet from "./components/Wallet";
import Popup from "./components/Popup";
import "./App.css";

const App = () => {
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

  const [collisions, setCollisions] = useState([
    {
      coord: [8, 0],
      element: <Flag height={40} width={40} />,
      value: 0,
      isEnd: true,
    },
    {
      coord: [0, 3],
      element: <Ticket height={40} width={40} />,
      value: 2,
      isEnd: false,
    },
    {
      coord: [4, 7],
      element: <Cake height={40} width={40} />,
      value: 1,
      isEnd: false,
    },
  ]);
  const [coins, setCoins] = useState(5);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="container">
      <DraggableArea
        grid={grid}
        collisions={collisions}
        coins={coins}
        setCoins={setCoins}
        setCollisions={setCollisions}
        setShowPopup={setShowPopup}
      />
      <MazeLayout grid={grid} collisions={collisions} />
      <Wallet coins={coins} />
      {showPopup && <Popup setShowPopup={setShowPopup} />}
    </div>
  );
};

export default App;
