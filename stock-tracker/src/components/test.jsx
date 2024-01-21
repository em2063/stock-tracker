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
      <>
        <tr>
          <td>Loading...</td>
        </tr>
      </>
    );
  }

  return (
    <>
      <tr>
        <td>{props.ticker}</td>
        <td>{"$" + data.latestPrice}</td>
        <td style={changeStyle(data)}>{changePercent(data)}</td>
        <td>{data.latestTime}</td>
      </tr>
    </>
  );
}
export default StockRow;
