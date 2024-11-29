import HeaderMenu from "../../components/header/HeaderMenu";
import { useSelector } from "react-redux";

const Profiles = () => {
  const userData = useSelector((state) => state.register.userData);

  return (
    <>
      <div className="container">
        <header className="headerLogin">
          <HeaderMenu buttonTo="" />
        </header>
        <h2>Perfiles</h2>
      </div>
    </>
  );
};

export default Profiles;
