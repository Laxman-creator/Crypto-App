import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Coin from "./Components/coin";
import Exchanges from "./Components/Exchanges";
import Coindetails from "./Components/Coindetails";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coin />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/coin/:id" element={<Coindetails />} />
      </Routes>
    </Router>
  );
}

export default App;
