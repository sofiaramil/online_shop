import React from "react";
import "../../App.css";

const styling = {
  display: "flex",
  gap: "10%",
  fontSize: "15px",
  textAlign: "start",
};

function info() {
  return (
    <>
      <div className="ContainerForInfo" style={styling}>
        <div className="aboutUs" style={{ flex: 1 }}>
          <h1>Sneakers©</h1>
          <p>С 2015 года.</p>
          <h1>О нас</h1>
          <p>Наш онлайн-магазин продает только качественные товары из натуральных материалов. Вы можете сполностью доверять нам, ведь все делается с любовью!</p>
          <h1>Контакты</h1>
          <p>Телефон: +996 232 454</p>
          <p>Почта: sneakers.kg@gmail.com
          <p></p>Инстаграм: @sneakers.kg
          </p>
        </div>
        <div className="learn" style={{ flex: 1 }}>
          <h1>Служба поддержки</h1>
          <p>Статус заказа</p>
          <p>Отправка и доставка</p>
          <p>Возврат</p>
          <p>Политика конфиденциальности</p>
          <p>Условия продажи</p>
          <p>Условия использования</p>
        </div>
      </div>
    </>
  );
}

export default info;
