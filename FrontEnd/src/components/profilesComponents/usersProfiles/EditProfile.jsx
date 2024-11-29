import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axiosInstance from "../../../api/axioInstance";
import ImageUploader from "../../images/ImageUpĺoader";
import { setUserData } from "../../../redux/slices/registerSlice";

const EditProfile = () => {
  const userData = useSelector((state) => state.register.userData);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [editableData, setEditableData] = useState({ ...userData });

  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(userData.profileImage);

  // Manejar carga de imagen al backend
  const handleImageUpload = async (file, previewURL) => {
    if (!file) {
      console.error("No hay imagen seleccionada para subir.");
      return;
    }

    const formData = new FormData();
    formData.append("profileImage", file); // "profileImage" debe coincidir con el campo esperado en el backend

    try {
      const response = await axiosInstance.put(
        `/api/updateProfileImage/${userData.userId}`, // userData.id es el ID del usuario
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      console.log("Respuesta del servidor:", response.data.data);

      // Actualizar Redux con la nueva imagen
      setPreviewImage(previewURL);

      console.log("espuesta data.data ", response.data.data);

      dispatch(setUserData(response.data.data));
    } catch (error) {
      console.error(
        "Error al subir la imagen:",
        error.response || error.message,
      );
    }
  };
  useEffect(() => {
    console.log("Estado actualizado en Redux:", userData);
  }, [userData]);

  // Manejar actualización de datos del usuario
  const handleSave = () => {
    setIsEditing(false);
    dispatch({
      type: "UPDATE_USER_DATA",
      payload: editableData,
    });
    console.log("Datos guardados:", editableData);
  };

  const initialName = (name) => {
    if (name) {
      const nameParts = name.split(" ");
      return nameParts
        .map((part) => part[0])
        .join("")
        .toUpperCase();
    }
    return "";
  };

  return (
    <>
      <h2>Mi Perfil</h2>
      <div className="contentPerfilEdit">
        <div className="infoUser">
          {isEditing ? (
            <div>
              <label>
                Nombre:
                <input
                  type="text"
                  name="nameUser"
                  value={editableData.nameUser}
                  onChange={(e) =>
                    setEditableData({
                      ...editableData,
                      nameUser: e.target.value,
                    })
                  }
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={editableData.email}
                  onChange={(e) =>
                    setEditableData({ ...editableData, email: e.target.value })
                  }
                />
              </label>
            </div>
          ) : (
            <div>
              <h3>Nombre: {userData.nameUser}</h3>
              <h3>Email: {userData.email}</h3>
              <h3>Rol: {userData.role}</h3>
            </div>
          )}
          <button
            onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          >
            {isEditing ? "Guardar datos" : "Editar datos"}
          </button>
        </div>
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
              <div
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#ccc",
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                {initialName(userData.nameUser)}
              </div>
            )}
          </div>

          <ImageUploader
            onUpload={(file, previewURL) => {
              setSelectedImage(previewURL); // Actualizar previsualización
              handleImageUpload(file, previewURL); // Subir la imagen al servidor
            }}
            acceptedFormats={["image/jpeg", "image/png", "image/jpg"]}
            maxSizeMB={2}
          />
        </div>
      </div>
    </>
  );
};

export default EditProfile;
