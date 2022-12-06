import { createSlice } from "@reduxjs/toolkit";

const initialMailState = { mails: [], unread: 0 };

const mailSlice = createSlice({
  name: "mails",
  initialState: initialMailState,
  reducers: {
    addMail(state, action) {
      state.mails = action.payload;
      state.unread = 0;
      state.mails.forEach((mail) => {
        if (!mail.isRead) {
          state.unread++;
        }
      });
    },
    markRead(state){
      state.unread--;
    }
  },
});

export const mailActions = mailSlice.actions;
export default mailSlice.reducer;
