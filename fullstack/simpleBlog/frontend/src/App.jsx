import React from "react";
import { CookiesProvider } from "react-cookie";
import TopBar from "../components/TopBar/TopBar.jsx";
import { Toaster } from "react-hot-toast";
import Router from "../routes/router.jsx";
export default function App() {
  return (
    <CookiesProvider>
      {/* <TopBar /> */}
      <Router />
      <div className={" top-1 "}></div>
      <Toaster />
    </CookiesProvider>
  );
}
