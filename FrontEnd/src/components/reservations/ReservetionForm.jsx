import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPets } from "../../redux/slices/ownerSlice"; // Acción para obtener mascotas
import { addEvent } from "../../redux/slices/walkerSlice"; // Acción para agregar evento
import { reservationSchema } from "../../schemas/reservationShema";
import axiosInstance from "../../api/axioInstance";
// Datos iniciales del formulario
const initialReservationValues = {
  date: "",
  startTime: "",
  endTime: "",
  selectedPet: "",
  observations: "",
};

const ReservationForm = ({ walker }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.register.userData.userId); // Obtener ID del usuario
  const pets = useSelector((state) => state.owner.pets); // Obtener mascotas del estado global
  const status = useSelector((state) => state.owner.status);

  // Cargar las mascotas del usuario cuando el componente se monte
  useEffect(() => {
    if (userId) {
      dispatch(fetchPets(userId));
      console.log(userId);
    }
  }, [dispatch, userId]);

  const onSubmit = async (values) => {
    const eventData = {
      ...values,
      userId,
      walkerId: walker._id,
    };
    try {
      const response = await axiosInstance.post("/api/reservation", eventData);
      console.log("reserva creada con exito ", response.data);
      alert("Reserva creada con exito.");
    } catch (error) {
      console.log(
        "Error al crear la reserva... ",
        error.response?.data || error.message,
      );
      alert("ocurrio un error al crar la reserva");
    }

    console.log("Datos enviados desde el formulario:", eventData);
  };

  return (
    <main className="formReserva">
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
            <div className="horarioContainer">
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
            </div>
            <fieldset>
              <label htmlFor="selectedPet">Seleccionar Mascota</label>
              <Field as="select" name="selectedPet" id="selectedPet">
                <option value="" disabled>
                  {status === "loading"
                    ? "Cargando mascotas..."
                    : "Selecciona una mascota"}
                </option>
                {pets.map((pet) => (
                  <option key={pet._id} value={pet._id}>
                    {pet.name} {/* Mostrar el nombre de la mascota */}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="selectedPet"
                component="p"
                className="errorInput"
              />
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
