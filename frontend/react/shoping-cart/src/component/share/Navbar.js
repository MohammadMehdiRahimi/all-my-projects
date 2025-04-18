import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";
import shopingCart from "../../assets/icons/shopingcart.svg";
import style from "./Navbar.module.css";
function Navbar() {
  const { state } = useContext(CartContext);
  let { selectedItem, itemCounter } = state;
  if (state.selectedItem.length === 0) {
    itemCounter = 0;
  }
  return (
    <div className={style.contaienr}>
      <Link to="/products">
        <span>Productd</span>
      </Link>

      {selectedItem.length === 0 ? (
        <div className={style.navCart}>
          {" "}
          <img src={shopingCart} alt="shop" />
        </div>
      ) : (
        <div className={style.navCart}>
          <span>{itemCounter}</span>
          <Link to="/cart">
            <img src={shopingCart} alt="shop" />
          </Link>
        </div>
      )}


    </div>
  );
}
export default Navbar;
