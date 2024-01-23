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
    formattedData = "+" + data.change + " (" + dataPercent + "%" + ")";
    return formattedData;
  }
}

function changeStyle(data) {
  return {
    color: data.change > 0 ? "#4caf50" : "#e53935",
    fontSize: "0.8em",
  };
}

function StockRow(props) {
  const [data, setData] = useState();

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
      <li class="list-group-item p-4">
        <div className="list-item-container">
          <h4>{props.ticker.toUpperCase()}</h4>
          <div className="stock-value-container">
            <h6>{data.latestPrice}</h6>
            <p style={changeStyle(data)}>{changePercent(data)}</p>
          </div>
        </div>
      </li>
    </>
  );
}
export default StockRow;
