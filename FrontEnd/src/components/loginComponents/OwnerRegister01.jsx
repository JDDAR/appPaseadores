import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";

import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { ownerRegisterShema } from "../../schemas/ownerRegister";

const initialValues = {
  nameOwner: "",
  telOwner: "",
  direccOwner: "",
  emailOwner: "",
  passwordOwner: "",
  passwordOwner02: "",
};

const OwnerRegister01 = () => {
  let { setStep } = useContext(AuthContext);

  const onSubmit = (values) => {
    console.log(values);
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
            validationSchema={ownerRegisterShema}
          >
            <Form autoComplete="off">
              <fieldset>
                <label htmlFor="email">Nombre del dueño</label>
                <Field name="nameOwner" type="text" id="nameOwner" autoFocus />
                <ErrorMessage
                  name="nameOwner"
                  component="p"
                  className="errorInput"
                />
              </fieldset>
              <div className="flexInput">
                <fieldset>
                  <label htmlFor="telOwner">Telefono de contacto</label>
                  <Field name="telOwner" type="text" id="telOwner" />
                  <ErrorMessage
                    name="telOwner"
                    component="p"
                    className="errorInput"
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="direccOwner">Dirección del dueño</label>
                  <Field name="direccOwner" type="text" id="direccOwner" />
                  <ErrorMessage
                    name="direccOwner"
                    component="p"
                    className="errorInput"
                  />
                </fieldset>
              </div>
              <fieldset>
                <label htmlFor="emailOwner"> Correo Electronico</label>
                <Field
                  name="emailOwner"
                  type="text"
                  placeholder="Ingrese el correo electronico"
                  id="emailOwner"
                />
                <ErrorMessage
                  name="emailOwner"
                  component="p"
                  className="errorInput"
                />
              </fieldset>
              <fieldset>
                <label htmlFor="passwordOwner"> Ingrese su contraseña</label>
                <Field
                  name="passwordOwner"
                  id="passwordOwner"
                  type="password"
                  placeholder="Ingrese su contraseña "
                />
                <ErrorMessage
                  name="passwordOwner"
                  component="p"
                  className="errorInput"
                />
              </fieldset>
              <fieldset>
                <label htmlFor="passwordOwner02">
                  {" "}
                  Ingrese de nuevo la contraseña{" "}
                </label>
                <Field
                  name="passwordOwner02"
                  id="passwordOwner02"
                  type="password"
                  placeholder="Ingrese de nuevo la contraseña "
                />
                <ErrorMessage
                  name="passwordOwner02"
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
