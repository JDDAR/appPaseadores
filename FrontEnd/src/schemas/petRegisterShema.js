import * as Yup from "yup";

export const petRegisterShema = Yup.object().shape({
  petName: Yup.string().required("Ingrese el nombre de la mascota"),
  petAge: Yup.string().required("Edad de mascota requerida"),
  petBreed: Yup.string().required("ingrese la raza"),
  //petSex: Yup.string().required().oneOf(["macho", "hembra"]).label("Sexo"),
  petImage: Yup.string().required("Agrege una imagen"),
  //petRecommendations: Yup.string().required("es necesaria una descripcion"),
});
