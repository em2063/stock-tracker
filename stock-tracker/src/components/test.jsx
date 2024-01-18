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

  return (
    <>
      <tr>
        <td>{props.ticker}</td>
        <td>{data.latestPrice}</td>
        <td>
          {new Date().getDate() +
            "/" +
            (new Date().getMonth() + 1) +
            "/" +
            new Date().getFullYear()}
        </td>
        <td>{data.latestTime}</td>
      </tr>
    </>
  );
}
export default StockRow;
