import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [lbtnCount, setLbtnCount] = useState();
  const [btnCount, setbtnCount] = useState([]);

  const displayLBtn = (cc) => {
    setLbtnCount(parseInt(cc) + 1);
  };

  const onAddBtnClick = () => {
    setCount(count + 1);
    setbtnCount(
      btnCount.concat(
        <button
          className="btn row2"
          value={count}
          onClick={(e) => displayLBtn(e.target.value)}
        >
          BUTTON - {count + 1}
        </button>
      )
    );
  };

  return (
    <div className="App">
      <>
        <div className="firstbox">
          <button className="btn row1">COUNTER - {count}</button>
          <button className="btn row1">
            LAST BUTTON CLICKED - {lbtnCount}
          </button>
        </div>
        <div className="lastbox">
          <button className="btn row12" onClick={onAddBtnClick}>
            ADD A BUTTON
          </button>
          {btnCount}
        </div>
      </>
    </div>
  );
}
