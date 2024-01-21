import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./components/nav.jsx";
import StockRow from "./components/stockCard.jsx";
import "./index.css";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <div className="container">
          <table className="table mt-5">
            <thead>
              <tr>
                <th>Ticker</th>
                <th>Price</th>
                <th>Change</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <StockRow ticker="aapl" />
              <StockRow ticker="tsla" />
              <StockRow ticker="KO" />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
