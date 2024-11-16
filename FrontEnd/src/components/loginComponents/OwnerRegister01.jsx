import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";

import { useContext } from "react";
import axiosInstance from "../../api/axioInstance";
import AuthContext from "../../context/AuthContext";
import { userRegisterShema } from "../../schemas/userRegister";

const initialValues = {
  nameUser: "",
  telUser: "",
  addressUser: "",
  emailUser: "",
  passwordUser: "",
  passwordUser02: "",
};

const OwnerRegister01 = () => {
  let { setStep } = useContext(AuthContext);

  const onSubmit = async (values) => {
    try {
      const response = await axiosInstance.post("/api/createUser", values);
      console.log("respuesta : " + JSON.stringify(response));
    } catch (error) {
      console.log("error al enviar datos");
    }
  };
  return (
    <>
      <main className="mainOwner">
        <h3>Datos del dueño</h3>
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
            <Form autoComplete="off">
              <fieldset>
                <label htmlFor="nameUser">Nombre del dueño</label>
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
              <button
                type="submit"
                //onClick={() => setStep("owner02")}
                className="button-primary"
              >
                Siguiente
              </button>
            </Form>
          </Formik>
        </div>
      </main>
    </>
  );
};

export default OwnerRegister01;
