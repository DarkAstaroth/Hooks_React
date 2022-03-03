import "../02-useEffect/effects.css";
import useCounter from "../../hooks/useCounter";
import { useState, useMemo } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";

const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>
        Counter <small>{counter}</small>
      </h3>

      <hr />

      <p>{memoProcesoPesado}</p>

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

export default MemoHook;
