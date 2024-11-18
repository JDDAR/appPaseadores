import React from "react";
import { useSelector } from "react-redux";
import HeaderMenu from "../../header/HeaderMenu";
import WalkerRegister01 from "./WalkerRegister01";
import WalkerRegister02 from "./WalkerRegister02";
import WalkerExitRegister from "./WalkerExitRegister";

const WalkerRegister = () => {
  const step = useSelector((state) => state.register.step);
  return (
    <div className="container">
      <div className="containerRegister">
        <header className="headerLogin">
          <HeaderMenu />
        </header>
        <div className="containerForms">
          {step === "user01" && <WalkerRegister01 />}
          {step === "walker02" && <WalkerRegister02 />}
          {step === "exit03" && <WalkerExitRegister />}
        </div>
      </div>
    </div>
  );
};

export default WalkerRegister;
