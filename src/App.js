import DraggableArea from "./components/DraggableArea";
import MazeLayout from "./components/MazeLayout";
import { useState, useRef, useEffect } from "react";
import Wallet from "./components/Wallet";
import Popup from "./components/Popup";
import { MAX_COINS, START_COORD } from "./config/constants";
import { mazes } from "./config/mazes";
import "./App.css";

const App = () => {
  const ref = useRef();

  const [mazeNo, setMazeNo] = useState(0);
  const [mazeConfig, setMazeConfig] = useState(mazes[mazeNo]);
  const [coordPosition, setCoordPosition] = useState(START_COORD);
  const [coins, setCoins] = useState(MAX_COINS);
  const [showPopup, setShowPopup] = useState(false);
  const [unit, setUnit] = useState(0);

  const [collisions, setCollisions] = useState([...mazeConfig.collisions]);

  console.log("No of collisions: ", collisions.length);

  useEffect(() => {
    const handleResize = () => {
      const unit = ref.current.clientWidth / 9;

      setUnit(unit);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setMazeConfig(mazes[mazeNo]);
    setCoordPosition(START_COORD);
  }, [mazeNo]);

  useEffect(() => {
    setCollisions([...mazeConfig.collisions]);
  }, [mazeConfig]);

  return (
    <div className="app-container">
      <div className="maze-container" ref={ref}>
        <DraggableArea
          grid={mazeConfig.grid}
          collisions={collisions}
          coins={coins}
          setCoins={setCoins}
          setCollisions={setCollisions}
          mazeNo={mazeNo}
          setMazeNo={setMazeNo}
          coordPosition={coordPosition}
          setCoordPosition={setCoordPosition}
          setShowPopup={setShowPopup}
          unit={unit}
        />
        <MazeLayout
          grid={mazeConfig.grid}
          collisions={collisions}
          unit={unit}
        />
      </div>
      <Wallet coins={coins} unit={unit} />
      {showPopup && <Popup setShowPopup={setShowPopup} />}
    </div>
  );
};

export default App;
