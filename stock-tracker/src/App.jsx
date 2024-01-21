import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./components/nav.jsx";
import StockRow from "./components/stockCard.jsx";
import "./index.css";
import List from "./components/list.jsx";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <div className="container-lg">
          <div className="assetValue">
            <h1>0</h1>
          </div>
          <List />
        </div>
      </div>
    </>
  );
}

export default App;
