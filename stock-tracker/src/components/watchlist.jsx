import React from "react";

function WatchList() {
  return (
    <>
      <div className="watchlist">
        <div className="form-container">
          <div class="form-floating mb-3">
            <input class="form-control" id="floatingInput" placeholder="aapl" />
            <label for="floatingInput">Search for a stock</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default WatchList;
