import React from "react";
import Button from "./Button";
import ErrorBoundary from "./ErrorBoundary";

function Home() {
  return (
    <div>
      <ErrorBoundary>
        <Button></Button>
      </ErrorBoundary>
    </div>
  );
}

export default Home;
