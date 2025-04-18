import React from "react";
import style from "./nav.module.css";
import { assets } from "../../../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import changeTheme from "../../../Redux/changeTheme/themeAction";
export default function Nav() {
  const currentTheme = useSelector((state) => state.themeState.currentTheme);

  const dispatch = useDispatch();
  const darkMode = (ct) => {
    if (ct == "Light") {
      document.querySelector("body").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("body").setAttribute("data-theme", "light");
    }
  };
  const handelTheme = () => {
    dispatch(changeTheme(currentTheme));
    darkMode(currentTheme);
  };
  return (
    <div className={style.nav}>
      <h1>Gemini</h1>
      <div className={style.user}>
        <button onClick={handelTheme}>
          {currentTheme === "Light" ? assets.moon_icon : assets.sun_icon}
        </button>
        <img src={assets.user_icon} alt="user Photo" />
      </div>
    </div>
  );
}
