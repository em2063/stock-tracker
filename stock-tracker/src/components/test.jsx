import React, { useState } from "react";
import { useEffect } from "react";
import { api } from "../config/api.js";

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
  }, [props.ticker]);

  if (!data) {
    return (
      <>
        <tr>
          <td>Loading...</td>
        </tr>
      </>
    );
  }

  const dataPercent = ((data.change / data.latestPrice) * 100).toFixed(2);
  let formattedData = null;
  if (data.change < 0) {
    formattedData = "-" + dataPercent + "%";
  } else {
    formattedData = "+" + dataPercent + "%";
  }

  return (
    <>
      <tr>
        <td>{props.ticker}</td>
        <td>{data.latestPrice}</td>
        <td>{formattedData}</td>
        <td>{data.latestTime}</td>
      </tr>
    </>
  );
}
export default StockRow;
