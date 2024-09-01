import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginuserinfo: (state, action) => {
      state.value = action.payload;
      console.log(state.value);
    },
  },
});

export const { loginuserinfo } = userSlice.actions;
export default userSlice.reducer;
