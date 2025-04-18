import Navbar from "./Components/Navbar/Navbar/Navbar";
import SideBar from "./Components/sidebar/SideBar";
import Home from "./Pages/Home/Home";
import style from "./app.module.css";
export default function App() {
  return (
    <div className={style.container}>
      <Navbar />
      <Home />
      <SideBar />
    </div>
  );
}
