import React, { useState } from "react";
import { useEffect } from "react";
import { fetchData } from "../config/api.js";
import { changePercent } from "./watchlistCard.jsx";
import { changeStyle } from "./watchlistCard.jsx";

function PortfolioCard(props) {
  const [data, setData] = useState();

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
      <>
        <li className="list-group-item p-4">
          <div className="list-item-container">
            <h4>Loading...</h4>
            <div className="stock-value-container"></div>
          </div>
        </li>
      </>
    );
  }

  return (
    <>
      <li className="list-group-item p-4" style={changeStyle(data, false)}>
        <div className="list-item-container">
          <div className="stock-value-container">
            <h4>{props.ticker.toUpperCase()}</h4>
            <h5 style={changeStyle(data, false)}>
              {data.latestPrice} ({changePercent(data)})
            </h5>
          </div>
          <div className="user-investment-value">
            <h6>{"$" + props.investment}</h6>
          </div>
        </div>
      </li>
    </>
  );
}

export default PortfolioCard;
