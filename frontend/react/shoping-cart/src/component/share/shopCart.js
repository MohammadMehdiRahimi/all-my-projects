import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContextProvider";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import style from "./shopCart.module.css";
export default function ShopCart() {
  const { state, dispatch } = useContext(CartContext);
  const handleButton = ({ target }) => {
    console.log(state);
    switch (target.name) {
      case "checkOut":
        return dispatch({ type: "CHECK_OUT" });
      case "clear":
        return dispatch({ type: "CLEAR" });

      default:
        return state;
    }
  };

  return (
    <div className={style.container}>
      <div className={style.billWrapper}>
        <p>total : {state.total} $ </p>
        <p>
          The total number of products you have ordered : {state.itemCounter}
        </p>
        {state.checkout && (
          <p>
            you are checkouted{" "}
            <Link style={{ color: "blue" }} to="/products">
              get to buy more proudcts
            </Link>
          </p>
        )}
        {state.selectedItem.length === 0 && !state.checkout && (
          <p>
            Your are clear your cart
            <Link style={{ color: "blue" }} to="/products">
              {`  get to buy more proudcts`}
            </Link>
          </p>
        )}
        <div className={style.buttonWrapper}>
          <button name="checkOut" onClick={handleButton}>
            Check Out
          </button>
          <button name="clear" onClick={handleButton}>
            Clear
          </button>
        </div>
      </div>

      <div className={style.cartContainer}>
        {state.selectedItem.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
