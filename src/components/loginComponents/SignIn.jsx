const SignIn = () => {
  return (
    <>
      <main>
        <h2>Iniciar Sesión</h2>
        <div class="cardForm">
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
              <div class="forgot">¿Olvido su contraseña?</div>
            </fieldset>
            <button type="submit" className="button-primary">
              Iniciar Sesión
            </button>
          </form>
        </div>
        <p className="footerLogin">
          ¿no tiene una cuenta ? <span>Registrarse</span>
        </p>
      </main>
    </>
  );
};
export default SignIn;
