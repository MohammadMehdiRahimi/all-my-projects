import React from "react";
import Store from "./component/share/store";
import { Routes, Route } from "react-router-dom";
import Details from "./component/share/Details";
import CartContextProvider from "./component/context/CartContextProvider";
import ProductsContextProvider from "./component/context/ProductsContextProvider";
import { BrowserRouter as Router } from "react-router-dom";
import ShopCart from "./component/share/shopCart";
import Navbar from "./component/share/Navbar";
export default function App() {
  return (
    <div>
      <ProductsContextProvider>
        <CartContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Store />} />
              <Route path="/products" element={<Store />} />
              <Route path="/products/:id" element={<Details />} />
              <Route path="/cart" element={<ShopCart />} />
            </Routes>
          </Router>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}
