import React, { useState, useRef, useEffect } from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Signin.module.css";
import Input from "./input";
export const PassContext = React.createContext();
export default function Signin() {
  /* --------------------------------- States --------------------------------- */
  const [passVal, setPassVal] = useState("");
  const [buttonVal, setButtonVal] = useState({
    sign: false,
    log: false,
  });

  const transWrapper = useRef();
  const leftMarkWrapper = useRef();
  const LoginTranslate = useRef();
  const markTranslate = useRef();
  const rihghtMarkWrapper = useRef();
  const [setHeading, setsetHeading] = useState(false);
  useEffect(() => {
    setcontext([[passVal, buttonVal]]);
  }, [buttonVal, passVal]);
  const [context, setcontext] = useState([passVal, buttonVal]);
  /* -------------------------------- Functions ------------------------------- */
  const inputVal = (e) => {
    setPassVal(e.target.value);
  };
  const buttonHandler = (e) => {
    if (e.target.name === "signin") {
      setButtonVal({
        sign: true,
        log: false,
      });
 
    } else {
      setButtonVal({
        sign: false,
        log: true,
      });

    }
  };
  const translateFunc = (e) => {
    if (e.target.name === "Leftlogin") {
      transWrapper.current.classList.add(style.goToRight);
      leftMarkWrapper.current.style.opacity = 0;
      rihghtMarkWrapper.current.style.opacity = 1;
      rihghtMarkWrapper.current.style.transform = "translateX(190%)";
      setsetHeading(true);
      LoginTranslate.current.classList.add(style.formTranslateToLeft);
      leftMarkWrapper.current.style.transform = "translateX(190%)";
    } else {
      transWrapper.current.classList.remove(style.goToRight);
      rihghtMarkWrapper.current.style.removeProperty("transform");
      leftMarkWrapper.current.style.removeProperty("transform");

      leftMarkWrapper.current.style.opacity = 1;
      rihghtMarkWrapper.current.style.opacity = 0;
      setsetHeading(false);
      LoginTranslate.current.classList.remove(style.formTranslateToLeft);
    }
  };


  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col sm={{ span: 8, offset: 2 }} className="mt-5">
            <Row className={style.container + " " + "d-flex g-0"}>
              <Col
                md={{ span: 6 }}
                className={style.leftWrapper + " " + "d-sm-none d-md-block"}
              >
                <div className={style.orange + " "} ref={transWrapper}></div>
                <div ref={markTranslate} className={style.spans}>
                  <section
                    className={style.rihghtMarkWrapper}
                    ref={rihghtMarkWrapper}
                  >
                    <h2>NOT A MEMBER?</h2>
                    <Button
                      variant="warning"
                      name="SignUp"
                      onClick={translateFunc}
                    >
                      Sign Up
                    </Button>
                  </section>

                  <section
                    className={style.LeftmarkWrapper}
                    ref={leftMarkWrapper}
                  >
                    <h2>DO YOU HAVE AN ACCOUNT</h2>
                    <Button
                      variant="warning"
                      name="Leftlogin"
                      onClick={translateFunc}
                    >
                      Log in
                    </Button>
                  </section>
                </div>
              </Col>
              <Col md={{ span: 6 }} className={style.rightWrapper}>
                <form ref={LoginTranslate} className={style.formContainer}>
                  {/* ------------------------------- left panel ------------------------------- */}
                  {setHeading ? (
                    <div>
                      <h1>Login</h1>

                      <div>
                        <Input type="text" name="email" label="Email" />
                      </div>
                      <PassContext.Provider value={context}>
                        <div onChange={inputVal}>
                          <Input type="text" name="password" label="Password" />
                        </div>
                      </PassContext.Provider>
                      <Button
                        variant="danger"
                        name="login"
                        className={style.signInBtn}
                        onClick={buttonHandler}
                      >
                        Login
                      </Button>
                    </div>
                  ) : (
                    /* ------------------------------- Right Panel ------------------------------ */
                    <div>
                      <h1>Sign in</h1>
                      <div>
                        <Input type="text" name="name" label="Name" id="its" />
                      </div>
                      <div>
                        <Input type="text" name="email" label="Email" />
                      </div>
                      <PassContext.Provider value={context}>
                        <div onChange={inputVal}>
                          <Input type="text" name="password" label="Password" />
                        </div>
                        <div>
                          <Input
                            type="text"
                            name="confirmpassword"
                            label="Confirm Password"
                          />
                        </div>
                      </PassContext.Provider>

                      <Button
                        variant="danger"
                        name="signin"
                        className={style.signInBtn}
                        onClick={buttonHandler}
                      >
                        Sign in
                      </Button>
                    </div>
                  )}
                </form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
