import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axioInstance";
// Estado inicial
const initialState = {
  pets: [], // Lista de mascotas
  status: " ",
};

// Acción asincrónica para obtener mascotas
export const fetchPets = createAsyncThunk(
  "owner/fetchPets", // Tipo de acción
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/api/${userId}/pets`);
      return response.data.pets; // Retornar las mascotas
    } catch (error) {
      console.error("Error Obteniendo mascotas :", error);
      return rejectWithValue(error.response?.data || "Error desconocido");
    }
  },
);

const ownerSlice = createSlice({
  name: "owner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Pets
      .addCase(fetchPets.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPets.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pets = action.payload;
      })
      .addCase(fetchPets.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export default ownerSlice.reducer;
