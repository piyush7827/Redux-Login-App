import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { login } from "./features/userSlice";
import GetData from "./GetData";

function App() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const dispatch = useDispatch();

  const pushData = (e) => {
    e.preventDefault();
    let name = nameRef.current.value;
    let email = emailRef.current.value;
    dispatch(
      login({
        user_name: name,
        user_email: email,
      })
    );
  };

  return (
    <div className="app">
      <h1> redux</h1>
      <form>
        <div className="app-input">
          <label className="label">Name:</label>
          <input ref={nameRef} type="text" />
        </div>
        <div className="app-input">
          <label className="label">Email:</label>
          <input ref={emailRef} type="text" />
        </div>
        <button type="submit" className="button" onClick={pushData}>
          Submit
        </button>
      </form>
      <GetData />
    </div>
  );
}

export default App;
