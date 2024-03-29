import React, { useState } from "react";
import StockRow from "./watchlistCard.jsx";

/**
 * WatchList component displays a list of stocks users wish to keep an eye on.
 * @returns {JSX.Element} WatchList component.
 */
function WatchList() {
  const [stocks, setStocks] = useState([]);
  const [tickerInput, setTickerInput] = useState("");

  /**
   * Adds a stock to the watchlist.
   * @param {Event} e - The event object.
   */
  const addStock = (e) => {
    e.preventDefault();
    const stock = tickerInput;
    console.log(stock);
    setStocks([...stocks, stock]);
    console.log(stocks);
    setTickerInput("");
  };

  return (
    <>
      <div className="watchlist">
        <div className="watchlist-text m-3">
          <h1>
            Keep track of what's <span>popular</span>
          </h1>
        </div>
        <div className="watchlist-content">
          <div className="form-container">
            <form onSubmit={addStock}>
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="floatingInput"
                  name="ticker"
                  value={tickerInput}
                  onChange={(e) => setTickerInput(e.target.value)}
                />
                <label htmlFor="floatingInput">Search for a stock</label>
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
    </>
  );
}

export default WatchList;
