import React, { useState } from "react";
import { Link } from "react-router-dom";


function ToggleButton() {
    const [toggle, setToggle] = useState(false);

    const toggleFunction = () => {
        setToggle(prevToggle => !prevToggle);
    };

    return (
        <div className="toggle-component">
            <h1>State Management</h1>
            <button  className="toggle-button" onClick={toggleFunction}>{toggle ? 'Hide' : 'Show'}</button>
            <br></br><h2>
            {toggle && "I'm getting toggled"}</h2>
            
            <Link to="/task3">Click here to view next Task</Link>
        </div>
    );
}

export default ToggleButton;
