import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //Alamenado los datos en user
  user: JSON.parse(localStorage.getItem("user")) || {},
  isAuthenticated: Boolean(localStorage.getItem("user")),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      // Actualizo el estado del los datos
      state.user = {
        ...state.user, //mantengo los datos
        ...action.payload, // Actualizo los datos
      };
      state.isAuthenticated = true;
      // Persistir los datos en localStorage
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    clearUserData: (state) => {
      state.user = {};
      state.isAuthenticated = false;
      localStorage.removeItem("user");
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;
