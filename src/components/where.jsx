import React from "react";
import { Link } from "react-router-dom";
import { cartCSS } from "./menustuff/Cart";
import "./where.css";


function where() {
  return (
    <div style={{textAlign:"center"}}>
      <h1>404 страница не найдена</h1>
      <Link to="/home">
        <button style={cartCSS} id="btn">
          Главная
        </button>
      </Link>
    </div>
  );
}

export default where;
