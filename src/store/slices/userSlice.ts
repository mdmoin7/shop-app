import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    createSession: (state, action) => {
      return action.payload;
    },
    clearSession: () => {
      return null;
    },
  },
});
export const { createSession, clearSession } = userSlice.actions;
export default userSlice.reducer;
