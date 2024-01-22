import React from "react";
import List from "./list.jsx";

function Portfolio() {
  return (
    <>
      <div className="App">
        <div className="container-lg">
          <div className="asset-value">
            <h6>0</h6>
          </div>
          <List />
        </div>
      </div>
    </>
  );
}

export default Portfolio;
