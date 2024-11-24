import * as Yup from "yup"; // Para validación del formulario

// Validación utilizando Yup
export const reservationSchema = Yup.object().shape({
  date: Yup.date().required("La fecha es obligatoria"),
  startTime: Yup.string().required("La hora de inicio es obligatoria"),
  endTime: Yup.string().required("La hora de fin es obligatoria"),
  selectedPet: Yup.string()
    .required("Debes seleccionar una mascota")
    .notOneOf([""], "Selecciona una mascota válida"), // Validar que no sea vacío
  observations: Yup.string(),
});
