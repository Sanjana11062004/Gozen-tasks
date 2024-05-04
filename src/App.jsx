import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Lazy-load components
const Home = React.lazy(() => import("./components/Home"));
const ToggleButton = React.lazy(() => import("./components/ToggleButton"));
const ConditionalRend = React.lazy(() => import("./components/ConditionalRend"));
const Form = React.lazy(() => import("./components/Form"));
const ErrorComponent = React.lazy(() => import("./components/ErrorComponent"));

function App() {
  return (
    <div>
      
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Define routes with lazy-loaded components */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/task2" element={<ToggleButton />} />
            <Route exact path="/task3" element={<ConditionalRend />} />
            <Route exact path="/task4" element={<Form />} />
            <Route exact path="/task5" element={<ErrorComponent />} />
          </Routes>
        </Suspense>
      
    </div>
  );
}

export default App;
