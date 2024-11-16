import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const SignIn = () => {
  let { setStep } = useContext(AuthContext);

  return (
    <>
      <main>
        <h2>Iniciar Sesión</h2>
        <div className="cardForm">
          <form autoComplete="off">
            <fieldset>
              <label htmlFor="email">Correo</label>
              <input type="email" id="email" autoFocus />
              <p className="errorInput">Correo Requerido</p>
            </fieldset>
            <fieldset>
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" />
              <p className="errorInput"> Contraseña incorrecta</p>
              <div class="forgot" onClick={() => setStep("forgot")}>
                ¿Olvido su contraseña?
              </div>
            </fieldset>
            <button type="submit" className="button-primary">
              Iniciar Sesión
            </button>
          </form>
        </div>
        <p className="footerLogin">
          ¿no tiene una cuenta ?
          <span onClick={() => setStep("signup")}>Registrarse</span>
        </p>
      </main>
    </>
  );
};
export default SignIn;
