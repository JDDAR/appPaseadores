import { useState } from "react";
import HeaderMenu from "../header/HeaderMenu";
import OwnerRegister01 from "./OwnerRegister01";
import OwnerRegister02 from "./OwnerRegister02";

import AuthContext from "../../context/AuthContext";
import OwnerExitRegister from "./OwnerExitRegister";

const OwnerRegister = () => {
  const [step, setStep] = useState("owner01");
  //Agregaremos un estado para almacenar los datos temporalmente
  const [userData, setUserData] = useState({
    ownerData: {
      role: "",
      nameUser: "",
      telUser: "",
      addressUser: "",
      emailUser: "",
      passwordUser: "",
      passwordUser02: "",
    },
    petData: {
      petName: "",
      petAge: "",
      petBreed: "",
      petSex: "",
      petImage: "",
      petRecommendations: "",
    },
  });
  return (
    <>
      <div className="container">
        <div className="containerRegister">
          <header className="headerLogin">
            <HeaderMenu />
          </header>
          <AuthContext.Provider
            value={{ step, setStep, userData, setUserData }}
          >
            <div className="containerForms">
              {step === "owner01" && <OwnerRegister01 />}
              {step === "owner02" && <OwnerRegister02 />}
              {step === "owner03" && <OwnerExitRegister />}
            </div>
          </AuthContext.Provider>
        </div>
      </div>
    </>
  );
};

export default OwnerRegister;
