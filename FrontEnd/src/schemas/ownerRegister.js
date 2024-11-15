import * as Yup from "yup";

export const ownerRegisterShema = Yup.object().shape({
  nameOwner: Yup.string().required("Ingrese el nombre"),
  telOwner: Yup.number()
    .typeError("Ingrese numeros")
    .required("El Telefono es necesario"),
  direccOwner: Yup.string().required("La direccion es necesaria"),
  emailOwner: Yup.string()
    .email("Digite un valor valido de Email")
    .required("El correo es necesario"),
  passwordOwner: Yup.string()
    .min(6, "La contraseña debe contener minimo 6 caracteres")
    .required("Contraseña requerida"),
  passwordOwner02: Yup.string().oneOf(
    [Yup.ref("passwordOwner"), null],
    "Las contraseñas no coinciden ",
  ),
});
