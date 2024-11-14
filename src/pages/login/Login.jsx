import React, { useState } from "react";
import HeaderMenu from "../../components/header/HeaderMenu";
import SignIn from "../../components/loginComponents/SignIn";
import ForgotPassword from "../../components/loginComponents/ForgotPassword";
import SingUp from "../../components/loginComponents/SignUp";

const Login = () => {
  const [step, setStep] = useState("signin");
  return (
    <div className="container">
      <div className="containerLogin">
        <header className="headerLogin">
          <HeaderMenu />
        </header>
        <div className="containerForms">
          {step === "signin" && <SignIn />}
          {step === "signup" && <SignIn />}
          {step === "forgot" && <SignIn />}
        </div>
      </div>
    </div>
  );
};

export default Login;
