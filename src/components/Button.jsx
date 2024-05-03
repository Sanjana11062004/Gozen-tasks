import React from "react";
import { Link } from "react-router-dom";

function Button(){
    const displayContent=()=>{
        const content=document.getElementById("content");
        content.innerHTML=`<h2>Welcome</h2>`;
    }
    return(
        <div id="button" className="button-component">
            <h1>Basic Component Creation</h1>
            <button onClick={displayContent}>Click Me</button>
            <div id="content"></div>
            
            <Link to={"/task2"}>Click here to view next task</Link>
        </div>
    );
}

export default Button;