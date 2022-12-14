import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import { Cart } from "./components/menustuff/Cart";

import Info from "./components/menustuff/info";
import Register from "./components/menustuff/register";
import Home from "./components/menustuff/home";
import Footer from "./components/fotter";
import Where from "./components/where";

function App() {
  return (
    <div className="WholePage">
      <div className="content-wrap">
        <Router>
          <Navbar />
          <div style={{margin:"5em 10%"}}>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="info" element={<Info />} />
              <Route path="register" element={<Register />} />
              <Route path="home" element={<Home />} />
              <Route path="*" element={<Where />} />
            </Routes>
          </div>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
