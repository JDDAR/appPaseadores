import React from "react";

import { LuCheck } from "react-icons/lu";
const OwnerExitRegister = () => {
  return (
    <main className="mainOwner">
      <h3>Registro Exitoso</h3>
      <header>
        <button className="buttonSelect">1</button> <hr />
        <button className="buttonSelect">2</button> <hr />
        <button className="buttonSelect">
          <LuCheck />
        </button>
      </header>
      <div className="cardForm"></div>
    </main>
  );
};

export default OwnerExitRegister;
