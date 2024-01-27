import React, { useState } from "react";

function Portfolio() {
  const [stocks, setStocks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    setIsBlurred(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setIsBlurred(false);
  };

  const stockPortfolio = () => {
    if (stocks.length === 0) {
      return (
        <div className="portfolio-prompt-container">
          <h2 className="portfolio-prompt">
            It looks like your portfolio is empty...
          </h2>
          <button className="btn btn-outline-dark btn-lg" onClick={openModal}>
            Start your portfolio
          </button>
        </div>
      );
    }
  };

  const addStock = (stockTicker, userInvestment) => {
    const newStock = {
      ticker: stockTicker.toUpperCase(),
      investment: userInvestment,
    };
    setStocks(...stocks, newStock);
    closeModal();
  };

  return (
    <>
      <div className={`App ${isBlurred ? "blurred" : ""}`}>
        <div className="container-lg">
          <div className="asset-value">
            <h1></h1>
          </div>
          <div className="portfolio-content">{stockPortfolio()}</div>
        </div>
      </div>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close btn-close" onClick={closeModal}></span>
            <div className="modal-body">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const stockTicker = e.target.elements["stock-ticker"].value;
                  const userInvestment =
                    e.target.elements["user-investment"].value;
                  addStock(stockTicker, userInvestment);
                }}
              >
                <div className="mb-3">
                  <label className="col-form-label">
                    What stock do you own? (e.g AAPL)
                  </label>
                  <input required className="form-control" id="stock-ticker" />
                </div>
                <div className="mb-3">
                  <label className="col-form-label">
                    How much of this stock do you own? (e.g 100)
                  </label>
                  <input
                    required
                    className="form-control"
                    id="user-investment"
                  />
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Portfolio;
