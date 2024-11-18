import * as Yup from "yup"; // Para validación del formulario
// Validación utilizando Yup
export const reservationSchema = Yup.object().shape({
  date: Yup.date().required("La fecha es obligatoria"),
  startTime: Yup.string().required("La hora de inicio es obligatoria"),
  endTime: Yup.string().required("La hora de fin es obligatoria"),
  pets: Yup.number()
    .min(1, "Debe haber al menos una mascota")
    .required("El número de mascotas es obligatorio"),
  observations: Yup.string(),
});
