import "../02-useEffect/effects.css";
import { useRef } from "react";

const FocusScreen = (props) => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
    console.log(inputRef)
  };

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />
      <input
	ref={inputRef}
        className="form-control mb-3"
        type="text"
        placeholder="Su nombre"
      />
      <button onClick={handleClick} className="btn btn-outline-primary">
        Focus
      </button>
    </div>
  );
};

export default FocusScreen;
