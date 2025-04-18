import React from "react";
import style from "./sidebar.module.css";
import Content from "./Content";
import assets from "../../assets/image/assets";
import Sub from "./Sub";

export default function SideBar() {
  return (
    <div className={style.container}>
      <div className={style.section}>
        <Content img="home" text="Home" active="true" />
        <Content img="explore" text="Explore" />
        <Content img="subscription" text="Subscription" />
      </div>

      <div className={style.profileSection}>
        <div className={style.topic}>
          <span>You</span>
          <span>{assets.next}</span>
        </div>
        <Content svg="personalChannel" text="Your channel" />
        <Content svg="history" text="History" />
        <Content text="Play List" svg="playList" />
        <Content text="Your Videos" img="library" />
        <Content text="Watch Later" svg="watchLater" />
        <Content text="Liked Video" svg="like" />
      </div>
      <div className={style.section + " " + style.subscriptions}>
        <div className={style.topic}>
          <span>Subscriptions</span>
        </div>
        <Sub userName="Gerard Lvy" profile="gerard" />
        <Sub userName="Jack Williams" profile="jack" />
        <Sub userName="Megan Mars" profile="megan" />
        <Sub userName="Simon baby" profile="simon" />
        <Sub userName="Tommy24" profile="tom" />
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
