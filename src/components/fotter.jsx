import React from "react";
import "./fotter.css";

const footerStyle = {
  display: "flex",
  textAlign: "center",
};

const MainContainer = {
  display: "flex",
  width: "100%",
  justifyContent: "space-around",
  flexWrap: "wrap",
};


function fotter() {
  return (
    <div className="footer">
      <hr width="90%" />
      <div style={footerStyle}>
        <div style={MainContainer}>
          <div>
            <h3>Sneakers©</h3>
            <p>С 2015 года.</p>
            <p>Все права защищены.</p>
          </div>
          <div>
            <h3>О нас</h3>
            <p>Наш онлайн-магазин продает <br></br>только качественные товары <br></br>из натуральных материалов.</p>
          </div>
          <div>
            <h3>Контакты</h3>
            <p>Телефон: +996 232 454</p>
            <p>Почта: sneakers.kg@gmail.com
          <p></p>Инстаграм: @sneakers.kg
          </p>
          </div>
          <div>
            <h3>Служба поддержки</h3>
            <p>Политика конфиденциальности</p>
          <p>Условия продажи</p>
          <p>Условия использования</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default fotter;
