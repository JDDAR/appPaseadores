import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./slices/adminSlice";
import userSlice from "./slices/userSlice";
import registerSlice from "./slices/registerSlice";
import walkerSlice from "./slices/walkerSlice";
import modalReducer from "./slices/modalSlice";
import ownerSlice from "./slices/ownerSlice";
export const store = configureStore({
  reducer: {
    admin: adminSlice,
    user: userSlice,
    register: registerSlice,
    walker: walkerSlice,
    modal: modalReducer,
    owner: ownerSlice,
  },
});
