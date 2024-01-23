import React, { useState } from "react";
import StockRow from "./stockCard";
import List from "./list.jsx";

function WatchList() {
  const [stocks, setStocks] = useState([]);

  const addStock = (e) => {
    e.preventDefault();
    const stock = e.target.elements.ticker.value;
    console.log(stock);
    setStocks([...stocks, stock]);
    console.log(stocks);
    e.target.reset;
  };

  return (
    <>
      <div className="watchlist">
        <div className="watchlist-text m-3">
          <h1>
            Keep track of what's <span>popular</span>
          </h1>
        </div>
        <div className="watchlist-outer-container">
          <div className="watchlist-content">
            <div className="form-container">
              <form onSubmit={addStock}>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="floatingInput"
                    name="ticker"
                  />
                  <label htmlFor="floatingInput">Search for a stock</label>
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
            <div className="list-grid">
              {stocks.map((stock) => (
                <StockRow key={stock} ticker={stock} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WatchList;
