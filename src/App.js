import DraggableArea from "./components/DraggableArea";
import MazeLayout from "./components/MazeLayout";
import Flag from "./components/icons/Flag";
import Ticket from "./components/icons/Ticket";
import Cake from "./components/icons/Cake";
import { useState, useRef, useEffect } from "react";
import Wallet from "./components/Wallet";
import Popup from "./components/Popup";
import "./App.css";

const App = () => {
  const ref = useRef();

  const [coins, setCoins] = useState(5);
  const [showPopup, setShowPopup] = useState(false);
  const [unit, setUnit] = useState(0);

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

  const [collisions, setCollisions] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const unit = ref.current.clientWidth / 9;

      setUnit(unit);
    };

    handleResize();

    setCollisions([
      {
        id: "finsh",
        coord: [8, 0],
        element: <Flag key="flag" unit={unit} />,
        value: 0,
        isEnd: true,
      },
      {
        id: "ticket",
        coord: [0, 3],
        element: <Ticket key="ticket" unit={unit} />,
        value: 2,
        isEnd: false,
      },
      {
        id: "cake",
        coord: [4, 7],
        element: <Cake key="cake" unit={unit} />,
        value: 1,
        isEnd: false,
      },
    ]);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [unit]);

  return (
    <div className="app-container" onResize={() => window.location.reload()}>
      <div className="maze-container" ref={ref}>
        <DraggableArea
          grid={grid}
          collisions={collisions}
          coins={coins}
          setCoins={setCoins}
          setCollisions={setCollisions}
          setShowPopup={setShowPopup}
          unit={unit}
        />
        <MazeLayout grid={grid} collisions={collisions} unit={unit} />
      </div>
      <Wallet coins={coins} unit={unit} />
      {showPopup && <Popup setShowPopup={setShowPopup} />}
    </div>
  );
};

export default App;
