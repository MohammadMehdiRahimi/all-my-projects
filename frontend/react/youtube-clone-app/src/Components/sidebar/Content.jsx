import style from "./content.module.css";
import assets from "../../assets/image/assets";
export default function Content({ img, text, active, svg }) {
  if (svg === undefined) {
    return (
      <div
        className={
          active ? style.container + " " + style.active : style.container
        }
      >
        <img src={assets[img]} alt="img" />
        <p>{text}</p>
      </div>
    );
  } else {
    return (
      <div
        className={
          active ? style.container + " " + style.active : style.container
        }
      >
        <span>{assets[svg]}</span>
        <p>{text}</p>
      </div>
    );
  }
}
