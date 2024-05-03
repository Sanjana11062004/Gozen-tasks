import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ConditionalRend() {
  const [message, setMessage] = useState(2);
  
  const increment = () => {
    setMessage((prevMessage) => prevMessage + 1);
  };
  
  useEffect(() => {
    const check = document.getElementById("check");
    check.innerHTML = `<p>This is to understand useEffect hook that works only when message value renders, the value changed is: ${message}</p>`;
    
    return () => {
      check.innerHTML = "";
    };
  }, [message]);
  
  return (
    <div style={{ marginLeft: "20%" }}>
      <h1>Conditional Rendering and useEffect Hook</h1>
      <h2>I'm {message}</h2>
      {message % 2 === 0 ? (
        <div>
          <h2>I'm a multiple of 2</h2>
          <button className="toggle-button" onClick={increment}>
            Click here to check the next number
          </button>
        </div>
      ) : (
        <div>
          <h2>I'm not a multiple of 2</h2>
          <button className="toggle-button" onClick={increment}>
            Click here to check the next number
          </button>
        </div>
      )}
      <div id="check"></div>
      <Link to="/task4">Click here to view next task</Link>
    </div>
  );
}

export default ConditionalRend;
