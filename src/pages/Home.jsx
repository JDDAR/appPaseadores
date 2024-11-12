import React from "react";
import HeaderMenu from "../components/header/HeaderMenu";

const Home = () => {
  return (
    <>
      <div className="containerHome">
        <div className="containerHome__content">
          <HeaderMenu buttonTo="/login" />
        </div>
      </div>
    </>
  );
};

export default Home;
