import React from "react";
import style from "./MainCart.module.css";

export default function MainCart({ data }) {
  const { text, img, id } = data;
  return (
    <div className={style.cart}>
      <p pid={id}>{text}</p> 
      <span>{img}</span>
    </div>
  );
}
