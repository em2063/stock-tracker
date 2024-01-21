import React from "react";
import "../index.css";
import StockRow from "./stockCard";

function List() {
  return (
    <>
      <div className="list-container">
        <ul class="list-group">
          <StockRow ticker="aapl" />
        </ul>
      </div>
    </>
  );
}

export default List;
