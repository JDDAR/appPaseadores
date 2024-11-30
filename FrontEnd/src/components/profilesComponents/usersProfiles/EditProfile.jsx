import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axiosInstance from "../../../api/axioInstance";
import ImageUploader from "../../images/ImageUpĺoader";
import InfoUserEdit from "./InfoUserEdit";
import { setUserData } from "../../../redux/slices/registerSlice";
import { openModal } from "../../../redux/slices/modalSlice";
import { fetchPets } from "../../../redux/slices/ownerSlice";

const EditProfile = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.register.userData);
  const petData = useSelector((state) => state.owner.pets);

  useEffect(() => {
    if (userData.userId) {
      dispatch(fetchPets(userData.userId));
      console.log(userData.userId);
    }
  }, [dispatch, userData.userId]);
  console.log(petData);

  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(userData.profileImage);

  /* actualizando la imagen de perfil del usuario ********** */
  const handleImageUpload = async (file, previewURL) => {
    if (!file) return;

    const formData = new FormData();
    formData.append("profileImage", file);

    try {
      const response = await axiosInstance.put(
        `/api/updateProfileImage/${userData.userId}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } },
      );

      setPreviewImage(previewURL);
      dispatch(setUserData(response.data.data));
    } catch (error) {
      console.error(
        "Error al subir la imagen:",
        error.response || error.message,
      );
    }
  };

  const handleSaveUserData = (data) => {
    dispatch({ type: "UPDATE_USER_DATA", payload: data });
  };

  const handleAddPet = () => {
    dispatch(
      openModal({
        modalContent: "ADD_PET_FORM",
        modalProps: { hideHeader: true },
      }),
    );
  };

  return (
    <div className="contentPerfilEdit">
      <div className="contentPerfilEdit__InfoContainers">
        {/* Bloque de datos del usuario */}
        <InfoUserEdit
          title="Mis datos"
          data={{
            nameUser: userData.nameUser,
            email: userData.email,
            telephone: userData.telephone,
            role: userData.role,
            address: userData.address,
          }}
          isEditable={true}
          onSave={handleSaveUserData}
        />

        {/* Bloque de información de mascotas */}
        <InfoUserEdit
          title="Mis Mascotas"
          data={
            petData.length > 0
              ? {
                  nombre: petData[0].name,
                  raza: petData[0].breed,
                  sexo: petData[0].sex,
                  edad: petData[0].age,
                  recomendaciones: petData[0].recommendations,
                }
              : {} // Renderiza vacío si no hay datos
          }
          isEditable={true}
          onSave={handleSaveUserData}
        />
        <button onClick={handleAddPet} className="button-primary">
          Nueva Mascota
        </button>
      </div>

      {/* Actualizar imagen */}
      <div className="profileImageSection">
        <div className="imageContainer">
          {previewImage || selectedImage ? (
            <img
              src={`http://localhost:2000${selectedImage || previewImage}`}
              alt="Foto de perfil"
              style={{
                maxWidth: "150px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          ) : (
            <div>
              {userData.nameUser
                ?.split(" ")
                .map((part) => part[0])
                .join("")
                .toUpperCase()}
            </div>
          )}
        </div>
        <ImageUploader
          onUpload={(file, previewURL) => {
            setSelectedImage(previewURL);
            handleImageUpload(file, previewURL);
          }}
          acceptedFormats={["image/jpeg", "image/png", "image/jpg"]}
          maxSizeMB={2}
        />
      </div>
    </div>
  );
};

export default EditProfile;
