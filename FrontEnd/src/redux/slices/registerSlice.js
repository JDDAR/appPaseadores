// src/redux/slices/registrationSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: "owner01",
  ownerData: {},
  petData: {},
  userId: null,
};

const registerSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setStep(state, action) {
      state.step = action.payload;
    },
    setOwnerData: (state, action) => {
      state.ownerData = action.payload;
    },
    setPetData: (state, action) => {
      state.petData = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { setStep, setOwnerData, setPetData, setUserId } =
  registerSlice.actions;

export default registerSlice.reducer;
