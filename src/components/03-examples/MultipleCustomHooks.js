import useCounter from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";
import "../02-useEffect/effects.css";

const MultipleCustomHooks = (props) => {
  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];
  console.log(author, quote);

  return (
    <div>
      <h1>Custom Hooks!</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center"> Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-3">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button onClick={increment} className="btn btn-primary">
        Siguiente quote
      </button>
    </div>
  );
};

export default MultipleCustomHooks;
