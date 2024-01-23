import React, { useState } from "react";
import { useEffect } from "react";
import { api } from "../config/api.js";

function changePercent(data) {
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

function changeStyle(data, isHovered) {
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

function StockRow(props) {
  const [data, setData] = useState();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const url = `${api.base_url}/${props.ticker}?token=${api.api_token}`;

      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData[jsonData.length - 1]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <li class="list-group-item p-4">
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
        class="list-group-item p-4"
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
