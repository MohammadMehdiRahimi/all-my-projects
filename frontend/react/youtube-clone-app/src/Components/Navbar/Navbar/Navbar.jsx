import React, { useState, useRef } from "react";
import style from "./navbar.module.css";
import assets from "../../../assets/image/assets";
export default function Navbar() {
  const logo = useRef();
  const notif = useRef();
  const collapseSearchBox = useRef();
  const showSearch = useRef();

  const [currentTheme, setCurrentTheme] = useState("light");
  const showSearchBoxHandle = () => {
    console.log("slm");
    logo.current.style.opacity = 0;
    notif.current.style.opacity = 0;
    collapseSearchBox.current.style.width = "250%";
    collapseSearchBox.current.style.height = "100%";

    collapseSearchBox.current.style.zIndex = 999;

    showSearch.current.style.opacity = 0;
  };
  const hideCollapseHandle = () => {
    logo.current.style.opacity = 1;
    notif.current.style.opacity = 1;
    collapseSearchBox.current.style.width = 0;
    collapseSearchBox.current.style.height = "0%";

    showSearch.current.style.opacity = 1;
  };
  const changeTheme = (e) => {
    e.preventDefault();

    document.querySelector("body").getAttribute("data-theme") === null
      ? (document.querySelector("body").setAttribute("data-theme", "dark"),
        setCurrentTheme("dark"))
      : document.querySelector("body").getAttribute("data-theme") === "light"
      ? (document.querySelector("body").setAttribute("data-theme", "dark"),
        setCurrentTheme("dark"))
      : (document.querySelector("body").setAttribute("data-theme", "light"),
        setCurrentTheme("light"));
    console.log(currentTheme);
  };
  return (
    <nav className={style.container}>
      <div ref={logo} className={style.logo}>
        <img src={assets.menu} alt="menu" />
        <img src={assets.logo} alt="logo" />
      </div>
      <div className={style.search}>
        <div className={style.searchBox + " " + style.searchBoxNormal}>
          <div className={style.input}>
            <input type="text" placeholder="Search" />
            <img src={assets.search} alt="search" />
          </div>
          <div className={style.mic}>
            <img src={assets.voiceSearch} alt="voiceSearch" />
          </div>
        </div>
        <div className={style.searchBox + " " + style.searchBoxCollapse}>
          <img
            className={style.showSearchBox}
            src={assets.search}
            alt="search"
            onClick={showSearchBoxHandle}
            ref={showSearch}
          />
          <div className={style.input} ref={collapseSearchBox}>
            <input type="text" placeholder="Search" />
            <img
              src={assets.search}
              alt="search"
              onClick={hideCollapseHandle}
            />
            <img
              className={style.micCollapse}
              src={assets.voiceSearch}
              alt="voiceSearch"
            />
          </div>
        </div>
      </div>
      <div className={style.notif} ref={notif}>
        <button onClick={changeTheme}>
          {currentTheme === "light" ? assets.moon : assets.sun}
        </button>
        <img src={assets.upload} alt="upload" />
        <img src={assets.notification} alt="notification" />
        <img src={assets.userProfile} alt="userProfile" />
      </div>
    </nav>
  );
}
