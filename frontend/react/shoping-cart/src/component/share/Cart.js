import { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";
import { spliter } from "../../helper/helpFuncs";
import trash from "../../assets/icons/trash.svg";
import style from "./Cart.module.css";
export default function Cart({ data }) {
  const { dispatch } = useContext(CartContext);
  const { image, id, price, title, quantity } = data;
  const handleButoon = ({ target }) => {
    const { name } = target;
    switch (name) {
      case "increase":
        return dispatch({ type: "INCREASE", payload: data });
      case "decrease":
        return dispatch({ type: "DECREASE", payload: data });
      case "remove":
        return dispatch({ type: "REMOVE_ITEM", payload: data });
      default:
        break;
    }
  };
  return (
    <div className={style.wrapper}>
      <div className={style.imageWrapper}>
        <img src={image} alt="product" />
        <h1>{spliter(title)}</h1>
      </div>

      <div className={style.detailWrapper}>
        <p> price:{price} $</p>
        <p>total : {price * quantity.toFixed(2)} $</p>
      </div>
      <div className={style.buttonWrapper}>
        <button onClick={handleButoon} name="increase">
          +
        </button>
        <p>{quantity}</p>
        {quantity === 1 ? (
          <button onClick={handleButoon} name="remove">
            <img src={trash} alt="trash" name="remove" />
          </button>
        ) : (
          <button onClick={handleButoon} name="decrease">
            -
          </button>
        )}
      </div>
    </div>
  );
}
