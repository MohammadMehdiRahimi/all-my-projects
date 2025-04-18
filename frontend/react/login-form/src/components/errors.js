import styel from "./errors.module.css";
import { useState, useEffect } from "react";
import { Validity } from "./Validity";
import { PassContext } from "./Signin";
import { useContext } from "react";
export default function Errors(props) {
  /* -------------------------------------------------------------------------- */
  /*                            Variables &&  Uses                              */
  /* -------------------------------------------------------------------------- */
  const passVal = useContext(PassContext);
  const { name, data } = props;
  let errors = Validity(data, passVal);
  useEffect(() => {
    errors = Validity(data, passVal);
  }, [data]);

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */
  if (name === "password") {
    return (
      <ul>
        <li>At lease one lowercase character</li>
        <li>At lease one uppercase character</li>
        <li>At lease one special character</li>
        <li>At lease one number character</li>
        <li>At lease 8 characters</li>
      </ul>
    );
  } else {
    return <>{errors[name] && <p>{errors[name]}</p>}</>;
  }
}
