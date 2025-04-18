import { spliter } from "../../helper/helpFuncs";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";
import { useContext, useState } from "react";
import { isInCart } from "../../helper/helpFuncs";
import trash from "../../assets/icons/trash.svg";
import style from "./product.module.css";
export default function Product({ productData }) {
  const { state, dispatch } = useContext(CartContext);
  const { image, title, price, id } = productData;
  const { inCart, quantity } = isInCart(state, id);

  const handleProductButton = ({ target }) => {
    switch (target.name) {
      case "add":
        return dispatch({ type: "ADD_ITEM", payload: productData });
      case "increase":
        return dispatch({ type: "INCREASE", payload: productData });
      case "decrease":
        return dispatch({ type: "DECREASE", payload: productData });
      case "remove":
        return dispatch({ type: "REMOVE_ITEM", payload: productData });
      default:
        break;
    }
  };
  const handleDecreaseButton = () => {};
  return (
    <div className={style.cartWrapper}>
      <img
        src={image}
        style={{ width: "200px", height: "250px" }}
        alt="product"
      />

      <h1>{spliter(title)}</h1>
      <div className={style.detailWrapper}>
        <Link to={`/products/${id}`}>Details</Link>
        <p>{price} $</p>
      </div>

      <div className={style.buttonWrapper}>
        {/* ------------------------- add or increase buttons ------------------------ */}
        {inCart ? (
          <button name="increase" type="button" onClick={handleProductButton}>
            +
          </button>
        ) : (
          <button name="add" type="button" onClick={handleProductButton}>
            add to cart
          </button>
        )}
        {/* ------------------------- show quantity ------------------------ */}
        {quantity > 0 && <span>{quantity}</span>}

        {/* ------------------------- delete or decrease buttons ------------------------ */}

        {quantity === 1 && (
          <button type="button" name="remove" onClick={handleProductButton}>
            <img
              name="remove"
              onClick={handleProductButton}
              src={trash}
              alt="trash"
            />
          </button>
        )}
        {quantity > 1 && (
          <button type="button" name="decrease" onClick={handleProductButton}>
            -
          </button>
        )}
      </div>
    </div>
  );
}
