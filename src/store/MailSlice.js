import { createSlice } from "@reduxjs/toolkit";

const initialMailState = { mails: [],sentMails:[], unread: 0 };

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
    addSentMail(state, action) {
      state.sentMails = action.payload;
    },
    markRead(state){
      state.unread--;
    },
    deleteMail: (state, action) => {
      state.mails = state.mails.filter(
        (mail) => mail.id !== action.payload
      );
    },
    deleteSentMail: (state, action) => {
      state.sentMails = state.sentMails.filter(
        (mail) => mail.id !== action.payload
      );
    },
    updateMail:(state,action)=>{
      const mails = state.mails;
      const index = mails.findIndex((mail) => mail.id === action.payload);
      mails[index].isRead = true;
      state.mails = mails;
    }
  },
});

export const mailActions = mailSlice.actions;
export default mailSlice.reducer;
