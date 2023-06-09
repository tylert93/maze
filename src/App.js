import DraggableArea from "./components/DraggableArea";
import MazeLayout from "./components/MazeLayout";
import { useState, useRef, useEffect } from "react";
import HUD from "./components/HUD";
import { MAX_COINS, START_COORD } from "./config/constants";
import { mazes } from "./config/mazes";
import "./App.css";

const App = () => {
  const ref = useRef();

  const [mazeNo, setMazeNo] = useState(0);
  const [mazeConfig, setMazeConfig] = useState(mazes[mazeNo]);
  const [coordPosition, setCoordPosition] = useState(START_COORD);
  const [coins, setCoins] = useState(MAX_COINS);
  const [unit, setUnit] = useState(0);

  const [collisions, setCollisions] = useState([...mazeConfig.collisions]);

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
          setCollisions={setCollisions}
          mazeNo={mazeNo}
          setMazeNo={setMazeNo}
          coordPosition={coordPosition}
          setCoordPosition={setCoordPosition}
          coins={coins}
          setCoins={setCoins}
          unit={unit}
        />
        <MazeLayout
          grid={mazeConfig.grid}
          collisions={collisions}
          unit={unit}
          coins={coins}
        />
      </div>
      <HUD coins={coins} unit={unit} title={mazeConfig.title} />
    </div>
  );
};

export default App;
