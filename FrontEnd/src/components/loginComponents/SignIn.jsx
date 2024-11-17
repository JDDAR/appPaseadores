import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { setStepLogin, setUserData } from "../../redux/slices/registerSlice";
import { loginUserShema } from "../../schemas/loginShema";
import axiosInstance from "../../api/axioInstance";
import { useNavigate } from "react-router-dom";

const initialLoginValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  //Se realizara la funcion para manejar el envio del formulario
  const onSubmit = async (values) => {
    try {
      const response = await axiosInstance.post("/api/login", values);

      //Si la respuesta del serviudor es exitosa : obtendo los datos
      const userData = response.data.userData;
      console.log("Inicio de sesion exitoso : ", userData);

      //Almaceno los datos en el estado y en localstorea
      dispatch(setUserData(userData));

      const role = userData.role;

      switch (role) {
        case "owner":
          //Redirecciono a pagina profiles
          //dispatch(setStepLogin("dashboardOwner"));
          navigate("/ownerProfile");
          break;
        case "walker":
          dispatch(setStepLogin("dashboardWalker"));
          break;
        case "admin":
          dispatch(setStepLogin("dashboardAdmin"));
          break;
        default:
          break;
      }
    } catch (error) {
      if (error.response) {
        console.log("Error de autenticacion :: ", error.response.data.info);
      } else {
        console.error("Error del servidor : ", error.Message);
      }
    }
  };

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
            onSubmit={onSubmit}
          >
            <Form autoComplete="on">
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
