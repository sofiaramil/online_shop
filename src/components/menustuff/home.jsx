import React, { useState } from "react";
import "../../App.css";
import Photo1 from "../../photos/img1.jpg";
import Photo2 from "../../photos/img2.jpg";
import Photo3 from "../../photos/img3.jpg";
import Photo4 from "../../photos/img4.jpg";
import Photo5 from "../../photos/img5.jpg";
import Photo6 from "../../photos/img6.jpg";
import { FaUserSecret } from "react-icons/fa";
import "./Home.css"

const divStyle = {
  marginTop: "20px",
  textAlign: "end",
};

const btnStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "25px",
  color: "var(--fontColor)",
};

const Font = {
  fontSize: "20px",
};

const Cursor = {
  cursor: "pointer",
};

const buttonMinimalStyle = {
  border: "none",
  outline: "none",
  background: "none",
  textDecoration: "underline",
};

const Home = () => {
  const [data, setData] = useState([
    {
      name: "Мужские Кроссовки Nike Blazer Mid Suede",
      Prize: "4500 сом",
      Description:
        "Качественные кроссовки на каждый день ",
      image: Photo1,
      id: 0,
    },
    {
      name: "Мужские Кроссовки Nike Air Max 270",
      Prize: "5000 сом",
      Description:
        "Качественные кроссовки на каждый день ",
      image: Photo2,
      id: 1,
    },
    {
      name: "Мужские Кроссовки Nike Blazer Mid Suede",
      Prize: "3500 сом",
      Description:
        "Качественные кроссовки на каждый день ",
      image: Photo3,
      id: 2,
    },
    {
      name: "Кроссовки Puma X Aka Boku Future Rider",
      Prize: "4000 сом",
      Description:
        "Качественные кроссовки на каждый день ",
      image: Photo4,
      id: 3,
    },
    {
      name: "Мужские Кроссовки Under Armour Curry 8",
      Prize: "4500 сом",
      Description:
        "Качественные кроссовки на каждый день ",
      image: Photo5,
      id: 4,
    },
    {
      name: "Мужские Кроссовки Nike Kyrie 7",
      Prize: "4000 сом",
      Description:
        "Качественные кроссовки на каждый день ",
      image: Photo6,
      id: 5,
    },
  ]);

  const [term, setTerm] = useState("");

  const searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  const onUpdateSearch = (term) => {
    setTerm(term);
  };

  const finalResult = searchEmp(data, term);

  return (
    <>
      <div className="wrapper">
        <SearchBar onUpdateSearch={onUpdateSearch} />
        <h2 className="Welcome">
          <div>
            <b>Sneakers</b>
            <FaUserSecret />
          </div>
        </h2>
        <SellsOfTheMonth data={finalResult} />
        <CollectionOfStuff data={finalResult} />
        <Sections data={finalResult} />
        <div style={divStyle}>
          <Scrollbtn />
        </div>
      </div>
    </>
  );
};

function SearchBar(props) {
  const [searchInfo, setSearchInfo] = useState("");

  const searchOnClick = (e) => {
    setSearchInfo(e.target.value);
    props.onUpdateSearch(e.target.value);
  };

  return (
    <>
      <div className="SearchThings">
        <input
          style={Font}
          type="text"
          id="Searching"
          placeholder="Искать"
          onChange={(e) => searchOnClick(e)}
        />
        <button
          style={Font}
          id="searchButton"
          onClick={() => console.log(searchInfo)}
        >
          {" "}
          Поиск
        </button>
      </div>
    </>
  );
}
function SellsOfTheMonth(props) {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <>
      <div style={{ marginTop: "3em" }}>
        <h1>Лучшие новинки</h1>
        <div className="GridHolderForSelling">
          <div className="GridHolderForVeshi">
            {props.data.slice(0, 4).map((item, index) => {
              return (
                <div key={index} className="GridVeshi" style={Cursor}>
                  <p>{item.name}</p>
                  <p>{item.Prize}</p>
                  <p>
                    {item.Description.slice(0, 100)}
                    <button style={buttonMinimalStyle}>
                      <b>Читать больше</b>
                    </button>
                  </p>
                  <img src={item.image} alt="Item on sale" />
                </div>
              );
            })}

            {seeMore &&
              props.data.slice(3, props.data.length).map((item, index) => {
                return (
                  <div key={index} className="GridVeshi">
                    <p>{item.name}</p>
                    <p>{item.Prize}</p>
                    <p>
                      {item.Description.slice(0, 100)}
                      <button style={buttonMinimalStyle}>
                        <b>Читать больше</b>
                      </button>
                    </p>
                    <img src={item.image} alt="Item on sale" />
                  </div>
                );
              })}
          </div>
          <button className="seeMore" onClick={() => setSeeMore(!seeMore)}>
            {seeMore ? "Смотреть меньше" : "Смотреть больше"}
          </button>
        </div>
      </div>
    </>
  );
}

function Sections(props) {
  return (
    <>
      <div style={{ marginTop: "3em" }}>
        <h1>Все кроссовки</h1>
        <div className="HolderForSections">
          <div
            className="GridHolderForVeshi"
            id="SectionsHolderForVeshi"
            style={{ gap: "3em" }}
          >
            {props.data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="GridVeshiSections"
                  style={{
                    border: "5px solid var(--borderColor)",
                    textAlign: " center",
                    padding: "15px",
                    cursor: "pointer",
                  }}
                >
                  <p>{item.name}</p>

                  <img src={item.image} alt="Item on sale" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

function CollectionOfStuff(props) {
  return (
    <>
      <div style={{ marginTop: "3em" }}>
        <h1>Самые популярные</h1>
        <div className="HolderForSelling">
          <div className="HolderForVeshi">
            <button
              id="btnLeft"
              className="btnScroll"
              onClick={(event) => {
                event.target.parentElement.scrollBy(
                  -event.target.parentElement.children[1].getBoundingClientRect()
                    .width,
                  0
                );
              }}
            ></button>
            {props.data.map((item, index) => {
              return (
                <div key={index} className="Veshi" style={Cursor}>
                  <p>{item.name}</p>
                  <p>{item.Prize}</p>
                  <p>
                    {item.Description.slice(0, 100)}
                    <button style={buttonMinimalStyle}>
                      <b>Читать больше</b>
                    </button>
                  </p>
                  <img src={item.image} alt="Item on sale" height="150" />
                </div>
              );
            })}
            <button
              id="btnRight"
              className="btnScroll"
              onClick={(event) => {
                event.target.parentElement.scrollBy(
                  event.target.parentElement.children[1].getBoundingClientRect()
                    .width,
                  0
                );
              }}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
}

function Scrollbtn() {
  return (
    <button
      style={btnStyle}
      className="seeMore"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
     Вверх
    </button>
  );
}

export default Home;
