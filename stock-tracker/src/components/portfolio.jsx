import React, { useState } from "react";
import Modal from "./modal.jsx";
import PortfolioCard from "./portfolioCard.jsx";

/**
 * Portfolio is the main component here, this brings together what allows users to search and add a stock to their portfolio, selecting how much they own.
 * They can view their stocks, add new ones and also view their portfolio value ---> COMING SOON
 */
function Portfolio() {
  //State variables for managing stocks in portfolio, modal for adding a stock and the blur effect (modal)
  const [stocks, setStocks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const [balance, setBalance] = useState(0);

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
    } else {
      return (
        <div className="portfolio-container">
          <div className="portfolio-balance-container">
            <div className="portfolio-balance-value">
              <h1 className="portfolio-value">${balance}</h1>
            </div>
          </div>
          <ul className="portfolio-list">
            {stocks.map((stock, index) => (
              <PortfolioCard
                key={index}
                investment={stock.investment.toString()}
                ticker={stock.ticker.toString()}
              />
            ))}
          </ul>
          <div className="open-modal-button">
            <button className="btn btn-outline-dark btn-lg" onClick={openModal}>
              Add Stock
            </button>
          </div>
        </div>
      );
    }
  };

  //Function to add new stock to portfolio
  const addStock = (stockTicker, userInvestment) => {
    const existingStockIndex = stocks.findIndex(
      (stock) => stock.ticker === stockTicker.toUpperCase()
    );
    const investmentAmount = parseFloat(userInvestment);

    if (existingStockIndex !== -1) {
      console.log("Existing Stock Index:", existingStockIndex);
      console.log("Investment Amount:", investmentAmount);

      const updatedStocks = [...stocks];
      updatedStocks[existingStockIndex].investment =
        parseFloat(updatedStocks[existingStockIndex].investment) +
        investmentAmount;

      console.log(
        "Updated Investment Amount:",
        updatedStocks[existingStockIndex].investment
      );
      setStocks(updatedStocks);
      setBalance(balance + investmentAmount);
    } else {
      const newStock = {
        ticker: stockTicker.toUpperCase(),
        investment: investmentAmount,
      };
      setStocks([...stocks, newStock]);
      setBalance(balance + investmentAmount);
    }
    closeModal();
  };

  // Returns the main UI elements of the portfolio section
  return (
    <>
      <div className={`App ${isBlurred ? "blurred" : ""}`}>
        <div className="container-lg">
          <div className="asset-value"></div>
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
