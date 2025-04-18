import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import {
  setAbout,
  setEmail,
  setProfileImg,
  setUserName,
  setUserId,
} from "../../Redux/profileDetails/profileSlice.js";
import { setError } from "../../Redux/errors/errors.slice.js";

import { setUserIn } from "../../Redux/auth/authSlice.js";
import { constance } from "../../constance/constance.js";
import style from "./TopBar.module.css";
import toast from "react-hot-toast";
export default function TopBar() {
  /*   redux tools  */
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userIn = useSelector((state) => state.auth.userIn);
  const changeProfile = useSelector((state) => state.auth.changeProfile);
  const { error } = useSelector((state) => state.error);

  /* ---------------------------------- Hooks --------------------------------- */

  const profileImageRight = useRef();
  useEffect(() => {
    const getDetails = async () => {
      try {
        let token = localStorage.getItem("token");
        const { data } = await axios.get("/details", {
          headers: {
            token,
          },
        });
        if (data.success) {
          const { email, aboutMe, profileImg, userName, userId } = data.body;
          dispatch(setEmail(email));
          dispatch(setAbout(aboutMe));
          dispatch(setProfileImg(profileImg));
          dispatch(setUserName(userName));
          dispatch(setUserId(userId));
          console.log(profileImg);
          if (userIn) {
            profileImageRight.current.src = `${constance.baseUrl}/profileImage/${profileImg}`;
          }
        } else {
          dispatch(setError("اطلاعات بارگیری نمی شود"));
        }
      } catch (error) {
        dispatch(setError(error));
      }
    };
    if (userIn) {
      getDetails();
    }
    if (!!error) toast.error(error);
  }, [userIn, changeProfile]);

  /*  functions  */
  const topBarHandle = (e) => {
    e.preventDefault();
    if (e.target.innerText == "خروج") {
      dispatch(setUserIn(false));
      localStorage.removeItem("token");
      navigate("/");
    } else if (e.target.innerText === "ورود") {
      navigate("/login");
    } else if (e.target.innerText === "ارسال پست") {
      navigate("/post/add");
    } else if (e.target.innerText === "داشبورد") {
      navigate("/dashboard");
    }
  };
  return (
    <div className="container-fluid sticky-top z-3 ">
      <div
        className={
          "row align-items-center  text-brown " + style.backgroundTopBar
        }
      >
        <div className={"col-12 d-flex align-items-center "}>
          <div
            className={
              "d-flex justify-content-center align-items-center fs-20 " +
              style.rightTop
            }
          >
            <i className="fa-solid fa-magnifying-glass ml-4  cursor-pointer"></i>
            {userIn ? (
              <img
                className=""
                src=""
                alt=""
                ref={profileImageRight}
                onClick={() => navigate("/setting")}
              />
            ) : (
              ""
            )}
          </div>
          <div className={" " + style.centerTop}>
            <ul
              className="fs-16 d-flex  align-items-center  "
              onClick={topBarHandle}
            >
              <li
                className={"cursor-pointer mx-4 mt-2 " + style.menuIcon}
                onClick={() => navigate("/")}
              >
                صفحه اصلی
              </li>
              {userIn ? (
                <li className={"cursor-pointer mx-4 mt-2 " + style.menuIcon}>
                  ارسال پست
                </li>
              ) : (
                ""
              )}

              {userIn ? (
                <li className={"cursor-pointer mx-4 mt-2 " + style.menuIcon}>
                  داشبورد
                </li>
              ) : (
                ""
              )}

              {userIn ? (
                <li className={"cursor-pointer mx-4 mt-2 " + style.menuIcon}>
                  خروج
                </li>
              ) : (
                <li className={"cursor-pointer mx-4 mt-2 " + style.menuIcon}>
                  ورود
                </li>
              )}
            </ul>
          </div>
          <div
            className={
              "d-flex justify-content-center   cursor-pointer  " + style.leftTop
            }
          >
            <i className="fa-brands fa-instagram fs-24 mx-2"></i>
            <i className="fa-brands fa-telegram fs-24 mx-2"></i>
            <i className="fa-brands fa-twitter fs-24 mx-2"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
