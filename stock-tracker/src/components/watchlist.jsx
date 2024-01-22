import React from "react";

function WatchList() {
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
            <div class="form-floating mb-3">
              <input
                class="form-control"
                id="floatingInput"
                placeholder="aapl"
              />
              <label for="floatingInput">Search for a stock</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WatchList;
