import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../../api/axioInstance";
import { toggleAvailability } from "../../../redux/slices/walkerSlice";

const ToggleButton = () => {
  const dispatch = useDispatch();
  const available = useSelector((state) => state.walker.isAvailable);
  const userId = useSelector((state) => state.register.userData.userId);

  const hadleToggle = async () => {
    try {
      console.log("Enviando datos:", { userId, isAvailable: !available });
      const response = await axiosInstance.put(
        `/api/updateAvailability/${userId}`,
        {
          userId: userId,
          isAvailable: !available,
        },
      );

      console.log("Respuesta del servidor:", response.data);
      dispatch(toggleAvailability());
      console.log(response.data.msg);
    } catch (error) {
      console.log("Error al actualizar disponibilidad", error);
    }
  };

  return (
    <>
      <div className="">
        <button
          onClick={hadleToggle}
          style={{ color: available ? "green" : "red" }}
        >
          {available ? "Disponible" : "No Disponible"}
        </button>
      </div>
    </>
  );
};

export default ToggleButton;
