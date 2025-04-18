import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import style from "./SideBar.module.css";
import { constance } from "../../../constance/constance";
import pen from "/images/pen.svg";
import { useSelector, useDispatch } from "react-redux";
import { setError } from "../../../Redux/errors/errors.slice";

export default function SideBar() {
  /* -------------------------------- redux tools ------------------------------- */

  const dispatch = useDispatch();
  const userName = useSelector((state) => state.profileDetails.userName);
  const about = useSelector((state) => state.profileDetails.about);
  const userIn = useSelector((state) => state.auth.userIn);
  const {profileImg}= useSelector(
    (state) => state.profileDetails
  );
  /* -------------------------------- use Refs -------------------------------- */
  const image = useRef();
  const aboutText = useRef();

  /* -------------------------------- useEffect ------------------------------- */
  useEffect(() => {
    if (!!profileImg) {
      image.current.src = `${constance.baseUrl}/profileImage/${profileImg}`;
    }
    if (!!about) {
      aboutText.current.innerText = about;
    } else {
      aboutText.current.innerText = "درباره خودت یه متن بنویس...";
    }

  }, [userName, userIn]);

  return (
    <div className={"col-2 mr-5 fs-14 " + style.SideBar}>
      <div className={"  " + style.aboutMe + " " + style.SideBarItem}>
        <Link
          className="align-self-start fs-18 text-brown cursor-pointer"
          to="/setting"
        >
          <img src={pen} alt="" className={"position-absolute  " + style.pen} />
        </Link>
        <h4 className={" mt-4 " + style.title}>درباره من</h4>
        <img src="" alt="" ref={image} />
        <p ref={aboutText}> </p>
      </div>

      <div className={"  " + " " + style.SideBarItem}>
        <h4 className={"  " + style.title}> دنبال کردن</h4>
        <div className={"  " + style.socialItem}>
          <i className="fa-brands fa-instagram fs-24 mx-2"></i>
          <i className="fa-brands fa-telegram fs-24 mx-2"></i>
          <i className="fa-brands fa-twitter fs-24 mx-2"></i>
        </div>
      </div>
    </div>
  );
}
