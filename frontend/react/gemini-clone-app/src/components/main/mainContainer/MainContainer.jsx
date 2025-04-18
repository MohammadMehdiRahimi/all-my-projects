import { useRef, useEffect } from "react";
import style from "./MainContainer.module.css";
import { assets } from "../../../assets/assets";
import MainCart from "./cart/MainCart";
import { useSelector } from "react-redux";
export default function MainContainer() {
  /* ------------------------ gt data from geimini api ----------------------- */
  const geimniResponse = useSelector((state) => state.responseState);
  const { inputValue, currentResponse, loading, showResualt, error } =
    geimniResponse;
  /* ------------------------- apply changens to data ------------------------- */
  const showResponseSection = useRef();
  let newTextArray = " ";
  const getBold = (text) => {
    const textSplit = text.split("**");
    for (let i = 0; i < textSplit.length; i++) {
      i === 0 || i % 2 !== 1
        ? (newTextArray += textSplit[i])
        : (newTextArray += "<br/><b>" + textSplit[i] + "</b>");
    }

    return newTextArray.split("*").join(" ");
  };

  let resualts = "";
  let out = "";
  const createNextWordForTypeAnimation = (text) => {
    const splitedText = text.split(" ");
    for (let i = 0; i < splitedText.length; i++) {
      setTimeout(() => {
        resualts += splitedText[i] + " ";
        showResponseSection.current.innerHTML = resualts;
      }, 75 * i);
    }
  };

  useEffect(() => {
    !loading &&
      showResualt &&
      createNextWordForTypeAnimation(getBold(currentResponse));
  }, [currentResponse]);
  const cartData = [
    {
      id: 1,
      text: "Suggest beautiful places to see on an upcoming raod trip",
      img: assets.compass_icon,
    },
    {
      id: 2,
      text: "Briefly summarize this concept:urban planning",
      img: assets.bulb_icon,
    },
    {
      id: 3,
      text: "Brainstorm team bonding activities for out work retrat",
      img: assets.message_icon,
    },
    {
      id: 4,
      text: "Improve the readability of following code",
      img: assets.code_icon,
    },
  ];
  return (
    <div className={style.main}>
      {!showResualt ? (
        <div className={style.wrapper}>
          <div className={style.hellow}>
            <p>Hello , Dev .</p>
            <p>How can i help you today?</p>
          </div>
          <div className={style.cartWrapper}>
            {cartData.map((cart) => (
              <MainCart key={cart.id} data={cart} />
            ))}
          </div>
        </div>
      ) : (
        <div className={style.resualt}>
          <div className={style.user}>
            <span>
              <img src={assets.user_icon} alt="user" />
            </span>
            <p>{inputValue}</p>
          </div>
          <div className={style.response}>
            <span>
              <img src={assets.gemini_icon} alt="" />
            </span>
            <div className={style.paragraph}>
              {loading ? (
                <div className={style.loading}>
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : error == "false" ? (
                <span ref={showResponseSection}></span>
              ) : (
                <span>{`${error}`}</span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
