import { useSelector } from "react-redux";
import OwnerRegister01 from "./OwnerRegister01";
import OwnerRegister02 from "./OwnerRegister02";
import OwnerExitRegister from "./OwnerExitRegister";
import HeaderMenu from "../../header/HeaderMenu";

const OwnerRegister = () => {
  const step = useSelector((state) => state.register.step);

  return (
    <div className="container">
      <div className="containerRegister">
        <header className="headerLogin">
          <HeaderMenu />
        </header>
        <div className="containerForms">
          {step === "user01" && <OwnerRegister01 />}
          {step === "owner02" && <OwnerRegister02 />}
          {step === "owner03" && <OwnerExitRegister />}
        </div>
      </div>
    </div>
  );
};

export default OwnerRegister;
