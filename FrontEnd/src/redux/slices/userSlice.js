import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      //Guardo todo el objeto del usuario
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    clearUserData: (state) => {
      state.user = {}; //Limpiar los datos
      state.isAuthenticated = false;
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;
