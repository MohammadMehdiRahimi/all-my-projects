import { useEffect, useState } from "react";
import style from "./SearchBox.module.css";
import { assets } from "../../../assets/assets";
import { useSelector, useDispatch } from "react-redux";
import fetchData from "../../../Redux/geiminiResponse/geiminiResponseAction";
export default function SearchBox() {
  const [inputValue, setInputValue] = useState("");
  const geiminiResualt = useSelector((state) => state.responseState);
  const dispatch = useDispatch();
  const handelInput = (event) => {
    setInputValue(event.target.value);
  };
  const handleSend = (e) => {
    e.preventDefault();
    dispatch(fetchData(inputValue));
    setInputValue("");
  };
  return (
    <div className={style.wrapper}>
      <div className={style.inputWrapper}>
        <form onSubmit={handleSend}>
          <input
            type="text"
            placeholder="Enter a prompt here ..."
            onChange={handelInput}
            value={inputValue}
          />
        </form>
        <div className={style.imgForInput + " " + style.svg}>
          <span pid="1">{assets.gallery_icon}</span>
          <span pid="2">{assets.mic_icon}</span>
          <span pid="3" onClick={handleSend}>
            {assets.send_icon}
          </span>
        </div>
      </div>
      <p className={style.detail}>
        Gemini may display inaccurate info, including about people, so
        double-check its responses. Your privacy & Gemini Apps
      </p>
    </div>
  );
}
