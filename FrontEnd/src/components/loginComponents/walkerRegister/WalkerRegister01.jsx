import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { userRegisterShema } from "../../../schemas/userRegister";
import {
  setUserDataGeneral,
  setStep,
} from "../../../redux/slices/registerSlice";

const initialValues = {
  role: "walker",
  nameUser: "",
  telUser: "",
  addressUser: "",
  emailUser: "",
  passwordUser: "",
  passwordUser02: "",
};

const WalkerRegister01 = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(setUserDataGeneral(values));
    console.log(values);
    dispatch(setStep("walker02"));
  };

  return (
    <>
      <main className="mainOwner">
        <h3>Datos del Paseador</h3>
        <header>
          <button className="buttonSelect">1</button> <hr />
          <button>2</button> <hr />
          <button>3</button>
        </header>
        <div className="cardForm">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={userRegisterShema}
          >
            <Form autoComplete="on">
              <Field
                name="role"
                type="text"
                id="role"
                value="walker"
                style={{ display: "none" }}
              ></Field>
              <fieldset>
                <label htmlFor="nameUser">Nombre del Paseador</label>
                <Field name="nameUser" type="text" id="nameUser" autoFocus />
                <ErrorMessage
                  name="nameUser"
                  component="p"
                  className="errorInput"
                />
              </fieldset>
              <div className="flexInput">
                <fieldset>
                  <label htmlFor="telUser">Telefono de contacto</label>
                  <Field name="telUser" type="text" id="telUser" />
                  <ErrorMessage
                    name="telUser"
                    component="p"
                    className="errorInput"
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="addressUser">Dirección del dueño</label>
                  <Field name="addressUser" type="text" id="addressUser" />
                  <ErrorMessage
                    name="addressUser"
                    component="p"
                    className="errorInput"
                  />
                </fieldset>
              </div>
              <fieldset>
                <label htmlFor="emailUser"> Correo Electronico</label>
                <Field
                  name="emailUser"
                  type="text"
                  placeholder="Ingrese el correo electronico"
                  id="emailUser"
                />
                <ErrorMessage
                  name="emailUser"
                  component="p"
                  className="errorInput"
                />
              </fieldset>
              <fieldset>
                <label htmlFor="passwordUser"> Ingrese su contraseña</label>
                <Field
                  name="passwordUser"
                  id="passwordUser"
                  type="password"
                  placeholder="Ingrese su contraseña "
                />
                <ErrorMessage
                  name="passwordUser"
                  component="p"
                  className="errorInput"
                />
              </fieldset>
              <fieldset>
                <label htmlFor="passwordUser02">
                  {" "}
                  Ingrese de nuevo la contraseña{" "}
                </label>
                <Field
                  name="passwordUser02"
                  id="passwordUser02"
                  type="password"
                  placeholder="Ingrese de nuevo la contraseña "
                />
                <ErrorMessage
                  name="passwordUser02"
                  component="p"
                  className="errorInput"
                />
              </fieldset>
              <button type="submit" className="button-primary">
                Siguiente
              </button>
            </Form>
          </Formik>
        </div>
      </main>
    </>
  );
};
export default WalkerRegister01;
