import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import ToggleButton from "./components/ToggleButton";
import ConditionalRend from "./components/ConditionalRend";
import Form from "./components/Form";
import ErrorComponent from "./components/ErrorComponent";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/task2" element={<ToggleButton/>}></Route>
        <Route exact path="/task3" element={<ConditionalRend/>}></Route>
        <Route exact path="/task4" element={<Form></Form>}></Route>
        <Route exact path="/task5" element={<ErrorComponent></ErrorComponent>}></Route>
      </Routes>
    </div>
  );
}

export default App;
