import "../02-useEffect/effects.css";
import useCounter from "../../hooks/useCounter";
import Small from "./Small";
import { useState } from "react";

const Memorize = (props) => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>Memorize</h1>
      <h2>
        Counter <Small value={counter} />{" "}
      </h2>

      <hr />

      <button onClick={increment} className="btn btn-primary m-3">
        +1
      </button>

      <button
        className="btn btn-primary"
        onClick={() => {
          setShow(!show);
        }}
      >
        show/hide {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default Memorize;
