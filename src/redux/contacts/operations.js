import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../auth/operations";

export const fetchContacts = createAsyncThunk(
    "contacts/getAll",
    async (_, thunkApi) => {
      try {
        const { data } = await instance.get("/contacts");
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );
  
  export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkApi) => {
      try {
        const { data } = await instance.post("/contacts", contact);
        console.log("New contact data:", newContact);
        return data;
      } catch (error) {
        console.error("Error adding contact:", error.response.data);
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkApi) => {
      try {
        const { data } = await instance.delete(`/contacts/${contactId}`);
  
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );