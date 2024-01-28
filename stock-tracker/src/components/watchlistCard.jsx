import React, { useState } from "react";
import { useEffect } from "react";
import { fetchData } from "../config/api.js";

/**
 * Calculates the percentage change in stock price and formats it accordingly.
 * @param {Object} data - Stock data containing latest price and change.
 * @returns {string} Formatted string representing the percentage change.
 */
export function changePercent(data) {
  const dataPercent = ((data.change / data.latestPrice) * 100).toFixed(2);
  let formattedData = null;
  if (data.change < 0) {
    formattedData = data.change + " (" + dataPercent + "%" + ")";
    return formattedData;
  } else {
    formattedData = "+" + "$" + data.change + " (" + dataPercent + "%" + ")";
    return formattedData;
  }
}

/**
 * Determines the style for displaying stock data based on change in price and hover state.
 * @param {Object} data - Stock data containing latest price and change.
 * @param {boolean} isHovered - Flag indicating whether the stock row is being hovered.
 * @returns {Object} CSS style object for the stock row.
 */
export function changeStyle(data, isHovered) {
  const baseStyle = {
    fontSize: "0.8em",
    transition: "background-color 0.3s ease",
  };

  const positiveStyle = {
    ...baseStyle,
    backgroundColor: isHovered ? "#c7f3e9" : "#eafff6",
    color: "#4caf50",
  };

  const negativeStyle = {
    ...baseStyle,
    backgroundColor: isHovered ? "#ffae9f" : "#eafff6",
    color: "#e53935",
  };

  return data.change > 0 ? positiveStyle : negativeStyle;
}

/**
 * StockRow component represents a row in the stock list displaying stock information.
 * @param {Object} props - Component props.
 * @param {string} props.ticker - Stock ticker symbol.
 * @returns {JSX.Element} StockRow component.
 */
function StockRow(props) {
  const [data, setData] = useState();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchDataForStock = async () => {
      try {
        const stockData = await fetchData(props.ticker);
        setData(stockData);
      } catch (error) {
        console.error("Error fetching data for", props.ticker, ":", error);
      }
    };

    fetchDataForStock();
  }, [props.ticker]);

  if (!data) {
    return (
      <li className="list-group-item p-4">
        <div className="list-item-container">
          <h4>Loading...</h4>
          <div className="stock-value-container"></div>
        </div>
      </li>
    );
  }

  return (
    <>
      <li
        className="list-group-item p-4"
        style={changeStyle(data, isHovered)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="list-item-container">
          <h4>{props.ticker.toUpperCase()}</h4>
          <div className="stock-value-container">
            <h6>{"$" + data.latestPrice.toFixed(2)}</h6>
            <p style={changeStyle(data, false)}>{changePercent(data)}</p>
          </div>
        </div>
      </li>
    </>
  );
}
export default StockRow;
