import { useEffect, useState } from "react";
import "./effects.css";
import Message from "./Message";

const SimpleForm = (props) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    // console.log("hey!");
  }, []);

  useEffect(() => {
    // console.log("formState cambió");
  }, [formState]);

  useEffect(() => {
    // console.log("email cemail cambió");
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className="container">
        <div className="row col">
          <div className="form-inline">
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}
              />
            </div>

            <br />

            <div className="form-group">
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="email@gmail.com"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
              />
            </div>

            {name === "123" && <Message />}
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleForm;
