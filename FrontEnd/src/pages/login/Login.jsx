import HeaderMenu from "../../components/header/HeaderMenu";
import SignIn from "../../components/loginComponents/SignIn";
import ForgotPassword from "../../components/loginComponents/ForgotPassword";
import SingUp from "../../components/loginComponents/SignUp";

import { useSelector } from "react-redux";

const Login = () => {
  const stepLogin = useSelector((state) => state.register.stepLogin);

  return (
    <div className="container">
      <header className="headerLogin">
        <HeaderMenu buttonTo="" />
      </header>
      <div className="containerForms">
        {stepLogin === "signin" && <SignIn />}
        {stepLogin === "signup" && <SingUp />}
        {stepLogin === "forgot" && <ForgotPassword />}
      </div>
    </div>
  );
};

export default Login;
