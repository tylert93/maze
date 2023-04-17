import Coin from "./icons/Coin";
import Circle from "./icons/Circle";
import { MAX_COINS } from "../config/constants";

const Wallet = ({ coins, unit }) => {
  const coinsArr = Array.from(Array(coins));
  const emptyArr = Array.from(Array(MAX_COINS - coins));

  return (
    <div style={{ display: "flex", justifyContent: "end", marginTop: 30 }}>
      {emptyArr.map((c, idx) => (
        <Circle key={`empty-coin-${idx}`} unit={unit} />
      ))}
      {coinsArr.map((c, idx) => (
        <Coin key={`coin-${idx}`} unit={unit} />
      ))}
    </div>
  );
};

export default Wallet;
