import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  infoAdmin: [],
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setInfoUsers: (state, action) => {
      state.infoAdmin = action.payload;
    },
  },
});

export const { setInfoUsers } = adminSlice.actions;
export default adminSlice.reducer;
