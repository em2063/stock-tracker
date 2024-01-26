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
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h1>fefewef</h1>
          </div>
        </div>
      )}
    </>
  );
}

export default Portfolio;
