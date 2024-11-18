import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAvailable: false,
  events: [],
};
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
});

export const { addEvent, toggleAvailability, updateAvailability } =
  walkerSlice.actions;
export default walkerSlice.reducer;
