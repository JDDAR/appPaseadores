import React, { useState } from "react";
import HeaderMenu from "../../components/header/HeaderMenu";
import SignIn from "../../components/loginComponents/SignIn";
import ForgotPassword from "../../components/loginComponents/ForgotPassword";
import SingUp from "../../components/loginComponents/SignUp";

import AuthContext from "../../context/AuthContext";

const Login = () => {
  const [step, setStep] = useState("signin");
  return (
    <div className="container">
      <div className="containerLogin">
        <header className="headerLogin">
          <HeaderMenu />
        </header>
        {/* Utilizando context pára "navegar */}
        <AuthContext.Provider value={{ step, setStep }}>
          <div className="containerForms">
            {step === "signin" && <SignIn />}
            {step === "signup" && <SingUp />}
            {step === "forgot" && <ForgotPassword />}
          </div>
        </AuthContext.Provider>
      </div>
    </div>
  );
};

export default Login;
