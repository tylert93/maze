import Coin from "./icons/Coin";
import Coinslot from "./icons/Coinslot";
import { MAX_COINS } from "../config/constants";

const HUD = ({ coins, unit, title }) => {
  const coinsArr = Array.from(Array(coins));
  const emptyArr = Array.from(Array(MAX_COINS - coins));

  return (
    <div className="hud-container">
      <p>{title}</p>
      <div className="wallet-container">
        {emptyArr.map((c, idx) => (
          <Coinslot key={`empty-coin-${idx}`} unit={unit} />
        ))}
        {coinsArr.map((c, idx) => (
          <Coin key={`coin-${idx}`} unit={unit} />
        ))}
      </div>
    </div>
  );
};

export default HUD;
