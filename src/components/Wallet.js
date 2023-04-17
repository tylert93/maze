import Coin from "./icons/Coin";
import Circle from "./icons/Circle";

const Wallet = ({ coins, unit }) => {
  const coinsArr = Array.from(Array(coins));
  const emptyArr = Array.from(Array(5 - coins));

  return (
    <div style={{ display: "flex", justifyContent: "end", marginTop: 30 }}>
      {emptyArr.map((c) => (
        <Circle key={c} height={unit * 0.8} width={unit * 0.8} />
      ))}
      {coinsArr.map((c) => (
        <Coin key={c} height={unit * 0.8} width={unit * 0.8} />
      ))}
    </div>
  );
};

export default Wallet;
