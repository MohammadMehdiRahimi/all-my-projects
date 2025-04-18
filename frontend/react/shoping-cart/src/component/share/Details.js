import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContextProvider";
import { useParams, Link } from "react-router-dom";
import style from "./Details.module.css";
export default function Details() {
  const { id } = useParams();
  const data = useContext(ProductsContext);

  if (data[id]) {
    const { title, image, description, price, category } = data[id - 1];
    return (
      <div className={style.container}>
        <img src={image} alt="" />
        <div>
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>category : {category}</p>
          </div>
          <span>{price} $</span>
          <Link className={style.Link} to="/products">back</Link>
        </div>
      </div>
    );
  } else {
    return;
  }
}
