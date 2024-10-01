import { configureStore } from "@reduxjs/toolkit";

import ChatSlice from "../Slices/ChatSlice";
import UserSlice from "../Slices/UserSlice";

export const store = configureStore({
  reducer: {
    userInfo: UserSlice,
    chatuserInfo: ChatSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
