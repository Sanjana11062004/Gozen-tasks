import React, { useState } from "react";
import ContentwithBackgroundColor from "./ContentwithBackgroundColor";
import { Link } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import ErrorComponent from "./ErrorComponent";

function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(1);
  const [email, setEmail] = useState("");
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (age <= 0 || !re.test(String(email).toLowerCase())) {
      setError("Invalid email or age");
      setShow(false);
      return;
    }

    setShow(true);
    setError("");
  };

  return (
    <div style={{ margin: "0% 20%" }}>
      <h1>Forms and Controlled Components</h1>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <br />
        <input
          name="username"
          value={name}
          type="text"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Age: </label>
        <br />
        <input
          name="age"
          value={age}
          type="number"
          required
          onChange={(e) => setAge(parseInt(e.target.value))}
        />
        <br />
        <label>Email: </label>
        <br />
        <input
          name="email"
          value={email}
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
        {error && <p>{error}</p>}
        {show && <p>Form submitted</p>}
      </form>
      <h1>Component Composition</h1>
      <p>
        Used HOC where the age and the name is displayed by changing the
        background color
      </p>
      <ContentwithBackgroundColor text={age}></ContentwithBackgroundColor>
      <br></br>
      <ContentwithBackgroundColor text={name}></ContentwithBackgroundColor>
      
        <h1>The next task is creating error boundary</h1>
        <ErrorBoundary><ErrorComponent></ErrorComponent></ErrorBoundary>
      
    </div>
  );
}

export default Form;
