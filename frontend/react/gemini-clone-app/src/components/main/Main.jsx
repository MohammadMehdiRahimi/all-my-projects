import style from "./main.module.css";
import Nav from "./navbar/Nav";
import MainContainer from "./mainContainer/MainContainer";
import SearchBox from "./searchBox/SearchBox";

export default function Main() {
  return (
    <div className={style.wrapper}>
      <div className={style.main}>
        <Nav />
        <MainContainer />
      </div>
      <div className={style.search}>
        <SearchBox />
      </div>
    </div>
  );
}
