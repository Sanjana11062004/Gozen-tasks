import React from "react";

function ErrorComponent() {
  
  return (
    <div>
        {/*The javascript error here is that displayContent function is not defined*/}
      <div id="button" className="button-component">
        <h1>Basic Component Creation</h1>
        <button onClick={displayContent}>Click Me</button>
        <div id="content"></div>

        <Link to={"/task2"}>Click here to view next task</Link>
      </div>
    </div>
  );
}

export default ErrorComponent;