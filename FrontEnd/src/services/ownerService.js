import axiosInstance from "../api/axioInstance";

const registerOwner = async (ownerData) => {
  try {
    const response = await axiosInstance.post("/owners", ownerData);
    return response.ownerData;
  } catch (error) {
    console.log("Error Registrando al dueño : ", error);
    throw error;
  }
};

export default registerOwner;
