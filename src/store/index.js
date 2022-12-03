import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./authSlice";
import MailSlice from "./MailSlice";

const store = configureStore({
  reducer: { auth: AuthSlice , mail:MailSlice },
});

export default store;