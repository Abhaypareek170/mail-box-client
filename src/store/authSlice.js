import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  token: "",
  userId: "",
  recieverId: "",
};
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = "";
      localStorage.removeItem("token");
      localStorage.removeItem("email");
    },
    setRecieverId(state, action) {
        localStorage.setItem("reciever", action.payload);
        state.recieverId = action.payload.replace(/[@,.]/g, "");
      },
    setUserId(state, action) {
      localStorage.setItem("email", action.payload);
      state.userId = action.payload.replace(/[@,.]/g, "");
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;