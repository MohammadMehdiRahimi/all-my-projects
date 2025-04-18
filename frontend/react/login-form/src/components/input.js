import { useState, useContext, useEffect } from "react";
import { PassContext } from "./Signin";
import Errors from "./errors";
import style from "./input.module.css";
export default function Input(props) {
  /* -------------------------------------------------------------------------- */
  /*                            Variables &&  Uses                              */
  /* -------------------------------------------------------------------------- */
  const { type, name, label } = props;
  const [Data, setData] = useState({
    [name]: "",
  });
  const [focus, setFocus] = useState({
    name: false,
    email: false,
    password: false,
    confirmpassword: false,
  });
  const [isActived, setIsActived] = useState("false");
  const context = useContext(PassContext);
  useEffect(() => {
    if (context == undefined) {
    } else {
      console.log(context[0]);
      if (context[0] == true) {
        if (context[0][1].sign) {
          setFocus({
            name: true,
            email: true,
            password: true,
            confirmpassword: true,
          });
        }
      } else if (context[0] == true) {
        if (context[0][1].log) {
          console.log("log");
          setFocus({
            email: true,
            password: true,
          });
        }
      }
    }
    // console.log(focus);
  }, [context]);
  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */
  const InputValHandler = (e) => {
    if (e.target.name === "isActive") {
      setIsActived({ ...isActived, isActived: e.target.checked });
    } else {
      setData({ ...Data, [e.target.name]: e.target.value });
    }
  };
  const focusHandler = (e) => {
    setFocus({
      ...focus,
      [e.target.name]: true,
    });
  };
  //
  /* -------------------------------------------------------------------------- */
  /*                                 Exhausting                                 */
  /* -------------------------------------------------------------------------- */

  return (
    <div className={style.formField}>
      <div className={style.inputField}>
        <input
          type={type}
          value={Data[name]}
          onChange={InputValHandler}
          name={name}
          onFocus={focusHandler}
          id={name}
        />
        <label for={name} className={focus[name] && style.labelToTop}>
          {label}
        </label>
      </div>
      {focus[name] && <Errors name={name} data={Data} />}
    </div>
  );
}
