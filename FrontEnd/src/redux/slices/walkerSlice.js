import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axioInstance";

const initialState = {
  walkers: [],
  isAvailable: false,
  loading: false,
  error: null,
  events: [],
};
//accion asincrona para obtener los datos y centralizarlos en la app
export const fetchWalkers = createAsyncThunk(
  "walker/fetchWalkers",
  async (_, { rejectWithValues }) => {
    try {
      const response = await axiosInstance.get("/api/walkers");
      return response.data;
    } catch (error) {
      return rejectWithValues(error.response.data);
    }
  },
);
const walkerSlice = createSlice({
  name: "walker",
  initialState,
  reducers: {
    toggleAvailability: (state) => {
      state.isAvailable = !state.isAvailable;
    },
    updateAvailability: (state, action) => {
      state.isAvailable = action.payload;
    },
    addEvent: (state, action) => {
      state.events.push(action.payload); //Agregando nuevo paseo a la sista
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWalkers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWalkers.fulfilled, (state, action) => {
        state.loading = false;
        state.walkers = action.payload;
      })
      .addCase(fetchWalkers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addEvent, toggleAvailability, updateAvailability } =
  walkerSlice.actions;
export default walkerSlice.reducer;
