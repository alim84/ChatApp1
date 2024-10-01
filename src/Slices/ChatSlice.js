import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

const ChatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    chatingInfo: (state, action) => {
      state.value = action.payload;
      console.log(state.value);
    },
  },
});

export const { chatingInfo } = ChatSlice.actions;
export default ChatSlice.reducer;
