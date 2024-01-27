import React, { useState } from "react";
import Modal from "./modal.jsx";

/**
 * Portfolio is the main component here, this brings together what allows users to search and add a stock to their portfolio, selecting how much they own.
 * They can view their stocks, add new ones and also view their portfolio value ---> COMING SOON
 */
function Portfolio() {
  //State variables for managing stocks in portfolio, modal for adding a stock and the blur effect (modal)
  const [stocks, setStocks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

  //Function that opens modal and adds blur effect
  const openModal = () => {
    setModalOpen(true);
    setIsBlurred(true);
  };

  //Function to close modal and remove blur effect
  const closeModal = () => {
    setModalOpen(false);
    setIsBlurred(false);
  };

  //Function to render stock portfolio section
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

  //Function to add new stock to portfolio
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
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        onSubmit={(e) => {
          e.preventDefault();
          const stockTicker = e.target.elements["stock-ticker"].value;
          const userInvestment = e.target.elements["user-investment"].value;
          addStock(stockTicker, userInvestment);
        }}
      />
    </>
  );
}

export default Portfolio;
