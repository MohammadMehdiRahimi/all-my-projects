import React, { useState, useEffect, createContext } from "react";
import { GetProducts } from "../service/api";
export const ProductsContext = createContext();
export default function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const productdone = await GetProducts();
       return setProducts(productdone);
    };
    fetchData();
  }, []);
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}
