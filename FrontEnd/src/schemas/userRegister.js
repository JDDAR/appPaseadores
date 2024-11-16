import * as Yup from "yup";

export const userRegisterShema = Yup.object().shape({
  nameUser: Yup.string().required("Ingrese el nombre"),
  telUser: Yup.number()
    .typeError("Ingrese numeros")
    .required("El Telefono es necesario"),
  addressUser: Yup.string().required("La direccion es necesaria"),
  emailUser: Yup.string()
    .email("Digite un valor valido de Email")
    .required("El correo es necesario"),
  passwordUser: Yup.string()
    .min(6, "La contraseña debe contener minimo 6 caracteres")
    .required("Contraseña requerida"),
  passwordUser02: Yup.string().oneOf(
    [Yup.ref("passwordUser"), null],
    "Las contraseñas no coinciden ",
  ),
});
