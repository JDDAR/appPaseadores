import * as Yup from "yup";

export const loginUserShema = Yup.object().shape({
  email: Yup.string().required("Ingrese un correo registrado"),
  password: Yup.string().required("Ingrese Una contraseña"),
});
