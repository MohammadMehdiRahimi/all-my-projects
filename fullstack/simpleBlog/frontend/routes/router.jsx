import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import Dashboard from "../components/Dashboard/Dashboard.jsx";
import Single from "../components/Single/Single.jsx";
import Add from "../components/Add/Add.jsx";
import Setting from "../components/Setting/Setting.jsx";
import Login from "../components/Login/Login.jsx";
import Register from "../components/Register/Register.jsx";
import PageNotFound from "../components/PageNotFound/PageNotFound.jsx";
import EditPost from "../components/EditPost/EditPost.jsx";
import Home from "../components/Home/Home.jsx";
import { setUserIn } from "../Redux/auth/authSlice.js";
import Test from "../src/Test.jsx";

import { useDispatch } from "react-redux";
import { setError } from "../Redux/errors/errors.slice.js";
export default function Router() {
  axios.defaults.baseURL = "http://localhost:3003";
  const authToken = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const getAuth = async () => {
      if (authToken) {
        try {
          const { data } = await axios.get("/auth", {
            headers: { token: authToken },
          });
          if (data.access) {
            dispatch(setUserIn(true));
            setAuth(true);
          } else {
            dispatch(setUserIn(false)), setAuth(false);
            navigate("/");
          }
        } catch (error) {
          dispatch(setError(error?.message ?? error));
        }
      }
    };
    getAuth();
  }, [authToken]);
  return (
    <>
      {auth ? (
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/post/add" element={<Add />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/not-found" element={<PageNotFound />} />
          <Route path="/post/edit/:postid" element={<EditPost />} />
          {/* <Route path="*" element={<Navigate to="/not-found" />} /> */}
        </Routes>
      ) : (
        <Routes>
          <Route path="/post/:postId" element={<Single />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      )}
    </>
  );
}
