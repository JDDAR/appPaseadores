import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addEvent } from "../../redux/slices/walkerSlice"; // Acción para agregar evento (paseo)
import { reservationSchema } from "../../schemas/reservationShema";
// Datos iniciales del formulario
const initialReservationValues = {
  date: "",
  startTime: "",
  endTime: "",
  pets: "",
  observations: "",
};

const ReservationForm = () => {
  const dispatch = useDispatch();
  const userId = useSelector(
    (state) => state.register.userData.userDataGeneral.nameUser,
  ); // Obtener userId desde el estado global
  console.log(userId);
  // Función para manejar el envío del formulario
  const onSubmit = (values) => {
    // Se agrega el userId al objeto de evento
    const eventData = { ...values, userId: userId }; // Se agrega el ID del usuario a los datos del evento

    // Despachar la acción para agregar el evento
    dispatch(addEvent(eventData));
    console.log(eventData);
    // Limpiar los campos después de enviar (esto lo maneja Formik internamente)
  };

  return (
    <main>
      <h2>Formulario de Reserva de Paseo</h2>
      <div className="cardForm">
        <Formik
          initialValues={initialReservationValues}
          validationSchema={reservationSchema}
          onSubmit={onSubmit}
        >
          <Form autoComplete="on">
            <fieldset>
              <label htmlFor="date">Fecha</label>
              <Field name="date" type="date" id="date" autoFocus />
              <ErrorMessage name="date" component="p" className="errorInput" />
            </fieldset>
            <fieldset>
              <label htmlFor="startTime">Hora de Inicio</label>
              <Field name="startTime" type="time" id="startTime" />
              <ErrorMessage
                name="startTime"
                component="p"
                className="errorInput"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="endTime">Hora de Fin</label>
              <Field name="endTime" type="time" id="endTime" />
              <ErrorMessage
                name="endTime"
                component="p"
                className="errorInput"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="pets">Número de Mascotas</label>
              <Field name="pets" type="number" id="pets" min="1" />
              <ErrorMessage name="pets" component="p" className="errorInput" />
            </fieldset>
            <fieldset>
              <label htmlFor="observations">Observaciones</label>
              <Field
                name="observations"
                as="textarea"
                id="observations"
                placeholder="Detalles adicionales"
              />
            </fieldset>
            <button type="submit" className="button-primary">
              Reservar Paseo
            </button>
          </Form>
        </Formik>
      </div>
    </main>
  );
};

export default ReservationForm;
