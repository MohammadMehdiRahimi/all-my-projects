import React from "react";
import Sidebar from "./components/sideBar/sidebar";
import Main from "./components/main/Main";
import store from "./Redux/store";
import { Provider } from "react-redux";
export default function App() {
  return (
    <>
      <Provider store={store}>
        <Sidebar />
        <Main />
      </Provider>
    </>
  );
}
