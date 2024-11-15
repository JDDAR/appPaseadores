import { useState } from "react";
import HeaderMenu from "../header/HeaderMenu";
import OwnerRegister01 from "./OwnerRegister01";
import OwnerRegister02 from "./OwnerRegister02";

import AuthContext from "../../context/AuthContext";

const OwnerRegister = () => {
  const [step, setStep] = useState("owner01");
  return (
    <>
      <div className="container">
        <div className="containerRegister">
          <header className="headerLogin">
            <HeaderMenu />
          </header>
          <AuthContext.Provider value={{ step, setStep }}>
            <div className="containerForms">
              {step === "owner01" && <OwnerRegister01 />}
              {step === "owner02" && <OwnerRegister02 />}
            </div>
          </AuthContext.Provider>
        </div>
      </div>
    </>
  );
};

export default OwnerRegister;
