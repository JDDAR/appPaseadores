import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../../api/axioInstance";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { petRegisterShema } from "../../../schemas/petRegisterShema";
import { LuCheck } from "react-icons/lu";
import { setStep, setUserData } from "../../../redux/slices/registerSlice";

const initialPetValues = {
  petName: "",
  petAge: "",
  petBreed: "",
  petSex: "",
  petImage: "",
  petRecommendations: "",
};

const OwnerRegister02 = () => {
  const dispatch = useDispatch();
  const { userDataGeneral } = useSelector((state) => state.register);

  const onSubmit = async (values) => {
    const completeData = {
      userDataGeneral,
      petData: values,
    };

    try {
      const response = await axiosInstance.post(
        "/api/createUser",
        completeData,
      );
      console.log("Datos enviados correctamente:", completeData);

      const userId = response.data.userId;
      console.log("El ID del usuario generado por MongoDB es:", userId);

      //Actualizamos el user data en redux
      dispatch(setUserData({ userId, userDataGeneral, petData: values }));

      //navegando al siguiente nivel
      dispatch(setStep("owner03", userId));
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
        <h3>Datos de la mascota</h3>
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
            initialValues={initialPetValues}
            onSubmit={onSubmit}
            validationSchema={petRegisterShema}
          >
            <Form autoComplete="on">
              <fieldset>
                <label htmlFor="petName">Nombre de la mascota</label>
                <Field name="petName" type="text" id="petName" autoFocus />
                <ErrorMessage
                  name="petName"
                  component="p"
                  className="errorInput"
                />
              </fieldset>
              <div className="flexInput">
                <fieldset>
                  <label htmlFor="petAge">Edad de la mascota</label>
                  <Field name="petAge" type="text" id="petAge" />
                  <ErrorMessage
                    name="petAge"
                    component="p"
                    className="errorInput"
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="petBreed">Raza de la mascota</label>
                  <Field name="petBreed" type="text" id="petBreed" />
                  <ErrorMessage
                    name="petBreed"
                    component="p"
                    className="errorInput"
                  />
                </fieldset>
              </div>
              <div className="flexInput">
                <fieldset>
                  <label htmlFor="petSex">Sexo de la mascota</label>
                  <Field as="select" name="petSex" id="petSex">
                    <option value=""> Ingrese el sexo </option>
                    <option value="macho">Macho</option>
                    <option value="hembra">Hembra</option>
                  </Field>
                  <ErrorMessage
                    name="petSex"
                    component="p"
                    className="errorInput"
                  />
                </fieldset>{" "}
                <fieldset>
                  <label htmlFor="petImage">Imagen de la mascota</label>
                  <Field name="petImage" type="text" id="petImage" />
                  <ErrorMessage
                    name="petImage"
                    component="p"
                    className="errorInput"
                  />
                </fieldset>
              </div>
              <fieldset>
                <label htmlFor="petRecommendations">Recomendaciones</label>
                <Field
                  as="textarea"
                  name="petRecommendations"
                  id="petRecommendations"
                  rows="4"
                  placeholder="Escribe las recomendaciones de la mascota"
                />
                <ErrorMessage
                  name="petRecommendations"
                  component="p"
                  className="errorInput"
                />
              </fieldset>
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
export default OwnerRegister02;
