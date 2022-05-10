import React from "react";
import { useState } from "react";
import "./SignIn.css";
import netflix from "../image/netflix.png";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepSignIn, setKeepSignIn] = useState(false);

  function onSubmit(event) {
    alert(
      JSON.stringify({
        email: email,
        password: password,
        keepSignIn: keepSignIn,
      })
    );

    event.preventDefault();
  }
  return (
    // <div className="sign-in">
    //   <div className="row mask">
    //     <div className="row">
    //       <div className="col">
    //         <img
    //           className="sign_in_logo image-fluid"
    //           src={netflix}
    //           alt="Netflix logo"
    //           style={{
    //             marign: "0%",
    //           }}
    //         />
    //       </div>
    //     </div>
    //     <div className="row">
    //       <div className="sigin_in_box col-12 col-md-5 col-lg-5">
    //         <h1>Sign In</h1>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="signin">
      <div className="signin_mask">
        <div className="row">
          <div className=" col-12 col-md-5 col-lg-5">
            <img
              className="sigin_logo image-fluid"
              src={netflix}
              alt="Netflix logo"
            />
          </div>
        </div>
        <div className="signin_content row">
          <div className="signin_box col-12 col-md-5 col-lg-3">
            <form onSubmit={onSubmit}>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col col-lg-12">
                    <h2
                      style={{
                        paddingTop: "30px",
                        fontWeight: "bolder",
                      }}
                    >
                      Sign In
                    </h2>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col col-lg-12">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      ></label>
                      <input
                        type="email"
                        className="form-control signin_input"
                        id="exampleInputEmail1"
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value);
                        }}
                        aria-describedby="emailHelp"
                        placeholder="Email or phone number"
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                        value={password}
                        
                      ></label>
                      <input
                        type="password"
                        className="form-control signin_input"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={(event) => {
                            setPassword(event.target.value);
                          }}
                      />
                    </div>
                    <div className="mb-2">
                      <button type="submit" className="btn signin_btn">
                        Sign In
                      </button>
                    </div>
                    <div className="mb-3 form-check lg-3">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                        checked={keepSignIn}
                        onChange={(event) => {
                          setKeepSignIn(!keepSignIn);
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Remember Me
                      </label>
                    </div>
                    <div style={{
                        paddingTop:'100px'
                    }}>

                    </div>
                    <p
                      style={{
                        color: "rgb(87, 93, 93)",
                        display:'inline',
                        paddingTop: '150px',

                      }}
                    >
                      New to Netflix?
                    </p>
                    <p style={{
                        display: 'inline'
                    }}>  Sign up now</p>
                    <p className="reCAPTCHA">
                      This page is protected by Google reCAPTCHA to ensure
                      you're not a bot. Learn more.
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
