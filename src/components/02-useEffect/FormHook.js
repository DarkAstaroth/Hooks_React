import { useState, useEffect } from "react";
import useForm from "../../hooks/useForm";
import "./effects.css";

const FormHook = (props) => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues;

  useEffect(() => {
    console.log("email cambio");
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formValues);
  };

  return (
    <>
      <h1>Form with custom hook! </h1>
      <hr />

      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <div className="form-group m-3">
            <label htmlFor="">Name</label>
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

          <div className="form-group m-3">
            <label htmlFor="">Email</label>
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

          <div className="form-group m-3">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="******"
              autoComplete="off"
              value={password}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group m-3">
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormHook;
