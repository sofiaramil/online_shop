import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";

import { Link } from "react-router-dom";
import Profile from "./menustuff/profile";

const MenuItems = [
  {
    title: "Главная",
    link: "/",
    class: "nav-links",
  },
  {
    title: "Корзина",
    link: "cart",
    class: "nav-links",
  },
  {
    title: "Информация",
    link: "Info",
    class: "nav-links",
  },

  {
    title: "Регистрация",
    link: "register",
    class: "nav-links",
  },
];

function Navbar() {
  const ref = useRef();
  const refToMenu = React.createRef();
  const [profileOpened, setprofileOpened] = useState(false);
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (profileOpened && ref.current && !ref.current.contains(e.target)) {
        setprofileOpened(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [profileOpened]);

  function DesktopMenu() {
    return (
      <>
        <div className="HolderForMenu" ref={ref}>
          
          {MenuItems.map((item, index) => {
            return (
              <Link to={item.link} key={index}>
                <button
                  className={item.class}
                  onClick={() => {
                    setprofileOpened(false);
                  }}
                >
                  {item.title}
                </button>
              </Link>
            );
          })}
          <button
            className="nav-links"
            onClick={() => {
              setprofileOpened(!profileOpened);
            }}
          >
           Профиль
          </button>
        </div>
          
      </>
    );
  }
  

  function PhoneMenu(){
    return (
      <>
        <div className="HolderForMenuPhone" ref={ref}>
          {MenuItems.map((item, index) => {
            return (
              <Link to={item.link} key={index}>
                <button
                  className={item.class}
                  onClick={() => {
                    setprofileOpened(false);
                    setClicked(!clicked);
                  }}
                >
                  {item.title}
                </button>
              </Link>
            );
          })}
          <button
            className="nav-links"
            onClick={() => {
              setprofileOpened(!profileOpened);
              setClicked(!clicked);
            }}
          >
          Профиль
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      <div id="navbar">
        
        <button
          id="borger"
          onClick={() => {
            setprofileOpened(false);
            setClicked(!clicked);
          }}
        >
          ==
        </button>
        <DesktopMenu />
        {clicked && (
          <div className="PhoneMenuHolder" ref={refToMenu}>
            <PhoneMenu />
          </div>
        )}

        {profileOpened && <Profile />}
      </div>
    </>
  );
}

export default Navbar;
