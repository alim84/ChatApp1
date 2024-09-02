import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slices/UserSlice";

export const store = configureStore({
  reducer: {
    userInfo: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
