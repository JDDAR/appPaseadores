import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../../api/axioInstance";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { LuCheck } from "react-icons/lu";
import { setStep, setUserData } from "../../../redux/slices/registerSlice";
import { walkerRegisterShema } from "../../../schemas/walkerShema";

const initialWalkerValues = {
  tipoIdent: "",
  numberIdent: "",
  paseadorImage: "",
  tarifaHora: "",
  localidad: "",
  barrioName: "",
};

const WalkerRegister02 = () => {
  const dispatch = useDispatch();
  const { userDataGeneral } = useSelector((state) => state.register);

  const onSubmit = async (values) => {
    console.log("Formulario enviado:", values);
    const completeData = {
      userDataGeneral,
      walkerData: values,
    };

    try {
      const response = await axiosInstance.post(
        "/api/createUser",
        completeData,
      );
      console.log("Datos enviados correctamente:", completeData);
      console.log(completeData);

      const userId = response.data.userId;
      console.log("El ID del usuario generado por MongoDB es:", userId);

      //Actualizamos el user data en redux
      dispatch(setUserData({ userId, userDataGeneral, walkerData: values }));

      //navegando al siguiente nivel
      dispatch(setStep("exit03", userId));
    } catch (error) {
      if (error.response) {
        console.error("Error del servidor:", error.response.data);
      } else {
        console.error("Error de la solicitud:", error.message);
      }
    }
  };

  return (
    <>
      <main className="mainOwner">
        <h3>Otros datos del Paseador</h3>
        <header>
          <button onClick={() => setStep("owner01")} className="buttonSelect">
            1
          </button>{" "}
          <hr />
          <button className="buttonSelect">2</button> <hr />
          <button>
            <LuCheck />
          </button>
        </header>
        <div className="cardForm">
          <Formik
            initialValues={initialWalkerValues}
            onSubmit={onSubmit}
            validationSchema={walkerRegisterShema}
          >
            <Form autoComplete="on">
              <div className="flexInput">
                <fieldset>
                  <label htmlFor="tipoIdent">Tipo de identidicación</label>
                  <Field as="select" name="tipoIdent" id="tipoIdent">
                    <option value=""> Tipo</option>
                    <option value="cc">C.c</option>
                    <option value="ti">T.i</option>
                    <option value="extrangeria">Extrangeria</option>
                    <option value="otro">Otro</option>
                  </Field>
                  <ErrorMessage
                    name="tipoIdent"
                    component="p"
                    className="errorInput"
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="numberIdent">Numero de identidad</label>
                  <Field name="numberIdent" type="text" id="numberIdent" />
                  <ErrorMessage
                    name="numberIdent"
                    component="p"
                    className="errorInput"
                  />
                </fieldset>
              </div>

              <div className="flexInput">
                <fieldset>
                  <label htmlFor="paseadorImage">Fotografia del paseador</label>
                  <Field name="paseadorImage" type="text" id="paseadorImage" />
                  <ErrorMessage
                    name="paseadorImage"
                    component="p"
                    className="errorInput"
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="tarifaHora">Tarifa por Hora</label>
                  <Field name="tarifaHora" type="text" id="tarifaHora" />
                  <ErrorMessage
                    name="tarifaHora"
                    component="p"
                    className="errorInput"
                  />
                </fieldset>
              </div>
              <div className="flexInput">
                <fieldset>
                  <label htmlFor="localidad">Ubicación</label>
                  <Field as="select" name="localidad" id="localidad">
                    <option value="">Localidad</option>
                    <option value="19">Localidad Ciudad Bolívar</option>
                    <option value="18">Localidad Rafael Uribe Uribe</option>
                    <option value="17"> Localidad La Candelaria</option>
                    <option value="16">Localidad Puente Aranda</option>
                    <option value="15">Localidad Antonio Nariño</option>
                    <option value="14">Localidad Los Mártires</option>
                    <option value="13">Localidad Teusaquillo</option>
                    <option value="12">Localidad Barrios Unidos</option>{" "}
                    <option value="11">Localidad Suba</option>
                    <option value="10">Localidad Engativá</option>
                    <option value="09">Localidad Fontibón</option>
                    <option value="08">Localidad Kennedy</option>{" "}
                    <option value="07">Localidad Bosa</option>
                    <option value="06">Localidad Tunjuelito</option>
                    <option value="05">Localidad Usme</option>
                    <option value="04">Localidad San Cristobal</option>{" "}
                    <option value="03">Localidad Santa Fe</option>
                    <option value="02">Localidad Chapinero</option>
                    <option value="01">Localidad Usaquén</option>
                    <option value="massssssssss">Otro</option>
                  </Field>
                  <ErrorMessage
                    name="localidad"
                    component="p"
                    className="errorInput"
                  />
                </fieldset>{" "}
                <fieldset>
                  <label htmlFor="barrioName">Nombre del barrio</label>
                  <Field name="barrioName" type="text" id="barrioName" />
                  <ErrorMessage
                    name="barrioName"
                    component="p"
                    className="errorInput"
                  />
                </fieldset>
              </div>
              <button type="submit" className="button-primary">
                siguiente
              </button>
            </Form>
          </Formik>
        </div>
      </main>
    </>
  );
};
export default WalkerRegister02;
