// src/redux/slices/registrationSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: "user01",
  stepLogin: "signin",
  userDataGeneral: {},
  petData: {},
  walkerData: {},
  userId: null,
  //Cargo los datos desde el localstorage
  userData: JSON.parse(localStorage.getItem("userData")) || {},
  isAuthenticated: Boolean(localStorage.getItem("userData")),
};

const registerSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setStep(state, action) {
      state.step = action.payload;
    },
    setUserDataGeneral: (state, action) => {
      state.userDataGeneral = action.payload;
    },
    setPetData: (state, action) => {
      state.petData = action.payload;
    },
    setWalkerData: (state, action) => {
      state.walkerData = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
      state.isAuthenticated = true;
      //Voy a guardar los datos en el localStorage
      localStorage.setItem("userData", JSON.stringify(action.payload));
    },
    setStepLogin: (state, action) => {
      state.stepLogin = action.payload;
    },
    clearUserData: (state) => {
      //Limpiar todos los datos del usuario
      state.userData = {};
      state.userDataGeneral = {};
      state.petData = {};
      state.isAuthenticated = false;
      state.stepLogin = "signin";
      localStorage.removeItem("userData");
    },
  },
});

export const {
  setStep,
  setUserDataGeneral,
  setPetData,
  setWalkerData,
  setUserId,
  setStepLogin,
  setUserData,
  clearUserData,
} = registerSlice.actions;

export default registerSlice.reducer;
