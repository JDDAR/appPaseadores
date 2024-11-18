import * as Yup from "yup";

export const walkerRegisterShema = Yup.object().shape({
  tipoIdent: Yup.string().required("Ingrese el tipo de identidad"),
  numberIdent: Yup.string()
    .matches(/^\d+$/, "Ingrese solo números")
    .required("El número de identificación es necesario"),
  paseadorImage: Yup.string().required("Ingrese una imagen"),
  tarifaHora: Yup.string()
    .matches(/^\d+(\.\d{1,2})?$/, "Ingrese un número válido")
    .required("La tarifa es necesaria"),
  localidad: Yup.string().required("Localidad requerida"),
  barrioName: Yup.string().required("Nombre de barrio solicitado"),
});
