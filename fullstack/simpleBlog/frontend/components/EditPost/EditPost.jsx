

import React, { useEffect, useState, useRef } from "react";
import style from "./EditPost.module.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function EditPost() {
  const [postImage, setPostImage] = useState(null); 
  const { postid } = useParams();
  const image = useRef();
  const title = useRef();
  const text = useRef();

  const navigate = useNavigate();

  const submitHandle = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title.current.value);
    formData.append("text", text.current.value);
    if (postImage) {
      formData.append("postImg", postImage); 
    }
    formData.append("postId", postid);
    try {
      const { data } = await axios.put("/user/posts/edit", formData, {
        headers: { token: localStorage.getItem("token") },
      });
      console.log(data);
      if (data.success) {
        toast("پست با موفقیت ویرایش شد.");
      }
    } catch (error) {
      // console.log(error);
      toast.error("خطا در ویرایش پست.");
    }
  };

  const changeImageHandler = (e) => {
    const selectedImage = e.target.files[0];
    setPostImage(selectedImage); 
  };

  useEffect(() => {
    const getPost = async () => {
      try {
        const { data } = await axios.get("/user/posts", {
          headers: {
            token: localStorage.getItem("token"),
            postid,
          },
        });
        console.log(data);
        if (data.success) {
          title.current.value = data.body.title;
          text.current.value = data.body.text;
          if (data.body.postImg != null) {
            setPostImage(data.body.postImg); 
          }
        }
      } catch (error) {
        toast.error("مشخصات پست به درستی بارگیری نمی‌شود");
        setTimeout(() => {
          navigate("/dashboard");
        }, [2000]);
      }
    };
    if (postid) {
      getPost();
    }
  }, [postid]);

  return (
    <div className="container">
      <form className={"row mt-4 " + style.wrapper} onSubmit={submitHandle}>
        <div className="col-8 offset-2 rounded d-flex align-items-center flex-column justify-content-around">
          <input
            type="file"
            name="addFile"
            id="addFile"
            className="d-none z-3"
            ref={image}
            onChange={changeImageHandler} 
          />
          <div id="showImage">
            <label htmlFor="addFile">
      
              {postImage ? (
                <img
                  src={
                    postImage instanceof File
                      ? URL.createObjectURL(postImage)
                      : `http://localhost:3003/postImage/${postImage}`
                  }
                  alt="post"
                  id="imageWrapper"
                  className="w-100"
                />
              ) : (
                <i className={"fa-regular fa-image " + style.imageWrapper}>
                  <span>اضافه کردن تصویر</span>
                </i>
              )}
            </label>
          </div>

          <div className={style.addTitle}>
            <div className={style.inputGroup}>
              <label htmlFor="title">عنوان :</label>
              <input
                type="text"
                placeholder="عنوان را وارد نمایید ..."
                id="title"
                ref={title}
              />
            </div>
            <textarea
              id="describtion"
              placeholder="متن مورد نظر را وارد نمایید ..."
              ref={text}
            ></textarea>
            <div className={style.button}>
              <button type="submit">ارسال</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
