//Configuration object for API endpoint
const api = {
  base_url: "https://api.iex.cloud/v1/data/core/quote",
  api_token: "pk_4f5eb3bd4ff34c2b99f7a6a0657e6469",
};

// Function to fetch data from the API for a given stock ticker
export const fetchData = async (ticker) => {
  const url = `${api.base_url}/${ticker}?token=${api.api_token}`;

  try {
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData[jsonData.length - 1];
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
