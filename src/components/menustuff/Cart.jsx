import React from "react";
import "../../App.css";
import { ImCart } from "react-icons/im";
import { Link } from "react-router-dom";
import "./Cart.css"

export const cartCSS = {
  border: "2px solid var(--borderColor)",
  borderRadius: "15px",
  padding: "20px",
  color: "var(--fontColor)",
  boxShadow: "inset 0 0 1em 0 var(--borderColor)",
  fontSize: "20px",
  flex: 1,
  backgroundColor:"var(--mainColor)"
};

const buttonStyle = {
  borderRadius: "10px",
};

export function Cart() {
  return (
    <>
      <div>
        <h1 className="plans"> {ImCart()}Корзина</h1>
        <div style={cartCSS}>Ваша корзина пуста :(</div>
        <div className="shopcardInfo">
          <p style={cartCSS}>Сумма потраченных денег: 0.00 сом</p>
          <p style={cartCSS}>Количество купленных вещей: 0.00 сом</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <button style={buttonStyle} className="seeMore">
            <Link to="/home" style={{ textDecoration: "none" }}>
              Главная страница
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
