import { createSlice } from "@reduxjs/toolkit"
import { logIn, logOut, refreshUser, register } from "./operations";


const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
}
const authSlice = createSlice({
    name: "auth",
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state,action) => {
          state.isLoading = true;
          state.error = action.payload;

        })
        .addCase(logIn.pending, (state) => {
          state.error = null;
        })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected,(state, action) => {
        state.error = action.payload;
      })
      .addCase(logOut.pending,(state) => {
        state.error = null;
      })
      .addCase(logOut.fulfilled, () => {
        // state.user = {
        //   name: null,
        //   email: null,
        // };
        // state.token = null;
        // state.isLoggedIn = false;
         return INITIAL_STATE;
    
      })
      .addCase(logOut.rejected,(state, action) => {
        state.error = action.payload;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected,(state, action) => {
        state.error = action.payload;
        state.isRefreshing = false;
      })
});

export default authSlice.reducer;