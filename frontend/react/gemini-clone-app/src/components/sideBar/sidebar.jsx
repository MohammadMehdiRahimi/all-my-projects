import { useState, useEffect } from "react";
import style from "./sidebar.module.css";
import { assets } from "../../assets/assets";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { newChat } from "../../Redux/geiminiResponse/geiminiResponseAction";
import fetchData from "../../Redux/geiminiResponse/geiminiResponseAction";
export default function Sidebar() {
  const [extended, setExtended] = useState(true);
  const { inputValue } = useSelector((state) => state.responseState);
  const [recentArray, setRecentArray] = useState([]);
  const dispatch = useDispatch();
  const newChats = () => {
    dispatch(newChat());
  };
  useEffect(() => {
    const index = recentArray.indexOf(inputValue);
    if (inputValue !== "" && index === -1) {
      console.log(index);
      if (recentArray.length >= 6) {
        console.log("slm1");
        const newAr = recentArray.slice(1, 7);
        setRecentArray([...newAr, inputValue]);
      } else {
        console.log("slm2");
        setRecentArray([...recentArray, inputValue]);
      }
    }
  }, [inputValue]);

  const handleExtend = () => {
    setExtended((prev) => !prev);
  };

  const recentHandle = (e) => {
    console.log(recentArray);
    recentArray.forEach((item) => console.log(item));
    e.target.parentElement.classList.add(style.active);

    const inputval = e.target.innerText.split("...").join("");

    dispatch(fetchData(inputval));
  };
  return (
    <aside
      className={
        extended ? style.sideBar + " " + style.sideBarExtended : style.sideBar
      }
    >
      <section className={style.topMenu}>
        <div
          className={style.iconeMenu + " " + style.svg}
          onClick={handleExtend}
        >
          {assets.menu_icon}
        </div>

        <div
          className={extended ? style.newChat : style.newChat + " " + style.svg}
        >
          {assets.plus_icon}
          {extended && (
            <p onClick={newChats} className={style.pNewChat}>
              New chat{" "}
            </p>
          )}
        </div>

        <div
          className={
            extended
              ? style.recentSection
              : style.recentSection + " " + style.hide
          }
        >
          <p>Recent</p>
          {recentArray.map((item) => (
            <div className={style.recentText + " " + style.svg}>
              {assets.message_icon}
              <p onClick={recentHandle}>{item.slice(0, 18)}... </p>
            </div>
          ))}
        </div>
      </section>
      <section className={style.bottomMenu}>
        <div className={style.bottomMenuChild + " " + style.svg}>
          <span>{assets.question_icon}</span>
          <p className={extended ? style.bottomChildText : style.hide}>Help</p>
        </div>
        <div className={style.bottomMenuChild + " " + style.svg}>
          <span> {assets.history_icon}</span>
          <p className={extended ? style.bottomChildText : style.hide}>
            Activity
          </p>
        </div>
        <div className={style.bottomMenuChild + " " + style.svg}>
          <span>{assets.setting_icon}</span>
          {/* {extended ? <p>Setting</p>:<p clsn></p>} */}
          <p className={extended ? style.bottomChildText : style.hide}>
            Setting
          </p>
        </div>
      </section>
    </aside>
  );
}
