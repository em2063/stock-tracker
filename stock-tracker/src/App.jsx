import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./components/nav.jsx";
import WatchList from "./components/watchlist.jsx";
import Portfolio from "./components/portfolio.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";

//Main application with elements combined
function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
