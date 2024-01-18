import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import StockRow from "./components/test.jsx";

function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <table className="table mt-5">
            <thead>
              <tr>
                <th>Ticker</th>
                <th>Price</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <StockRow ticker="aapl" />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
