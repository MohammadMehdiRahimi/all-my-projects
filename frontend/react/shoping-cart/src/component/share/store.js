import React, { useContext } from "react";
import Product from "./Product";
import { ProductsContext } from "../context/ProductsContextProvider";
import style from './store.module.css'
export default function Store() {
  const products = useContext(ProductsContext);
  return (
    <div className={style.container}>
      {products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}

    </div>
  );
}
 