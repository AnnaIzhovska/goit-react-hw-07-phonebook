import { createSlice } from "@reduxjs/toolkit";
import { fetchContact, addContact, deleteContact } from "../operation.js";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    filter: "",
    isLoding: false,
    error: null,
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContact.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = null;
      state.error = null;
    },
    [fetchContact.pending]: (state) => {
      state.status = "loading";
    },
    [fetchContact.rejected]: (state) => {
      state.status = null;
      state.error = "Error";
    },
    [addContact.fulfilled]: (state, action) => {
      state.items = [action.payload, ...state.items];
      state.status = null;
      state.error = null;
    },
    [addContact.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [addContact.rejected]: (state) => {
      state.status = null;
      state.error = "Error";
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { changeFilter } = contactsSlice.actions;

export default contactsSlice.reducer;