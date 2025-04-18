import style from "./Sub.module.css";
import assets from "../../assets/image/assets";
export default function Sub({ userName, profile }) {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <img src={assets[profile]} alt="img" />
        <p>{userName}</p>
      </div>
      <span></span>
    </div>
  );
}
