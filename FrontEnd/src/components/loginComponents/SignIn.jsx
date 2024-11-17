import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setStepLogin } from "../../redux/slices/registerSlice";
import { loginUserShema } from "../../schemas/loginShema";

const initialLoginValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const dispatch = useDispatch();
  const stepLogin = useSelector((state) => state.register.stepLogin);

  const handleForgotPassword = () => {
    dispatch(setStepLogin("forgot"));
  };

  const handleSignUp = () => {
    dispatch(setStepLogin("signup"));
  };
  return (
    <>
      <main>
        <h2>Iniciar Sesión</h2>
        <div className="cardForm">
          <Formik
            initialValues={initialLoginValues}
            validationSchema={loginUserShema}
          >
            <Form autoComplete="off">
              <fieldset>
                <label htmlFor="email">Correo</label>
                <Field name="email" type="email" id="email" autoFocus />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="errorInput"
                />
              </fieldset>
              <fieldset>
                <label htmlFor="password">Contraseña</label>
                <Field name="password" type="password" id="password" />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="errorInput"
                />
                <div className="forgot" onClick={handleForgotPassword}>
                  ¿Olvido su contraseña?
                </div>
              </fieldset>
              <button type="submit" className="button-primary">
                Iniciar Sesión
              </button>
            </Form>
          </Formik>
        </div>
        <p className="footerLogin">
          ¿no tiene una cuenta ?<span onClick={handleSignUp}>Registrarse</span>
        </p>
      </main>
    </>
  );
};
export default SignIn;
