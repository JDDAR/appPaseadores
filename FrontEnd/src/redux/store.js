import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./slices/adminSlice";
import userSlice from "./slices/userSlice";
import registerSlice from "./slices/registerSlice";
import walkerSlice from "./slices/walkerSlice";

export const store = configureStore({
  reducer: {
    admin: adminSlice,
    user: userSlice,
    register: registerSlice,
    walker: walkerSlice,
  },
});
