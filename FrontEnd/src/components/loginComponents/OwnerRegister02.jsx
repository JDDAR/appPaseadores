import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const OwnerRegister02 = () => {
  let { setStep } = useContext(AuthContext);
  return (
    <>
      <main className="mainOwner">
        <h3>Datos de la mascota</h3>
        <header>
          <button onClick={() => setStep("owner01")} className="buttonSelect">
            1
          </button>{" "}
          <hr />
          <button className="buttonSelect">2</button> <hr />
          <button>3</button>
        </header>
        <div className="cardForm">
          <form autoComplete="off">
            <fieldset>
              <label htmlFor="email">Nombre de la mascota</label>
              <input type="email" id="nameOwner" autoFocus />
              <p className="errorInput">Nombre requerido</p>
            </fieldset>
            <div className="flexInput">
              <fieldset>
                <label htmlFor="password">Edad de la mascota</label>
                <input type="password" id="password" />
                <p className="errorInput">Edad requerida</p>
              </fieldset>{" "}
              <fieldset>
                <label htmlFor="password">Raza de la mascota</label>
                <input type="password" id="password" />
                <p className="errorInput">Raza requerida</p>
              </fieldset>
            </div>{" "}
            <div className="flexInput">
              <fieldset>
                <label htmlFor="password">Sexo de la mascota</label>
                <select name="pets" id="selectSex">
                  <option value=""> Ingrese el sexo </option>
                  <option value="macho">Macho</option>
                  <option value="hembra">Hembra</option>
                </select>
                <p className="errorInput">Sexo requerido</p>
              </fieldset>{" "}
              <fieldset>
                <label htmlFor="password">Imagen de la mascota</label>
                <input type="password" id="password" />
                <p className="errorInput">Raza requerida</p>
              </fieldset>
            </div>
            <fieldset>
              <label htmlFor="msg">Recomendaciones</label>
              <textarea id="msg" name="user_message"></textarea>
            </fieldset>
            <button type="submit" className="button-primary">
              siguiente
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default OwnerRegister02;
