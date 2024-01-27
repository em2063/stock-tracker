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
              <form>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">
                    What stock do you own? (e.g AAPL)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>
                <div className="mb-3">
                  <label for="message-text" className="col-form-label">
                    How much of this stock do you own? (e.g 100)
                  </label>
                  <textarea class="form-control" id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Portfolio;
