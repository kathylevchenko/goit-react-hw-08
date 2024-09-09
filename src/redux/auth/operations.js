// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";


// axios.defaults.baseURL = "https://connections-api.goit.global/";

// const setAuthHeader = token=> {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = "";
// };

// export const register = createAsyncThunk(
//   "auth/register",
//   async (newUser, thunkAPI) => {
//     try {
//       const res = await axios.post("/users/signup", newUser);
//       setAuthHeader(res.data.token);  
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );


// export const logIn = createAsyncThunk(
//   "auth/login",
//   async (userInfo, thunkAPI) => {
//     try {
//       const res = await axios.post("/users/login", userInfo);
//       setAuthHeader(res.data.token);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );


// export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
//   try {
//     await axios.post("/users/logout");
//     clearAuthHeader();
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const refreshUser = createAsyncThunk(
//   "auth/refresh",
//   async (_, thunkAPI) => {
//     const reduxState = thunkAPI.getState();
//     setAuthHeader(reduxState.auth.token);
//     const res = await axios.get("/users/current");   
//     return res.data;
//   },
//   {
//     condition(_, thunkAPI) {
//       const reduxState = thunkAPI.getState();
      
//       return reduxState.auth.token !== null;
//     },
//   }
// );


import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

const setAuthHeder = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
// axios.defaults.baseURL = "https://connections-api.goit.global/";

const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = "";
};


export const logIn = createAsyncThunk(
  "auth/login",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("users/login", formData);
      setAuthHeder(data.token);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("users/signup", formData);
      setAuthHeder(data.token);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      setAuthHeder(token);
      const { data } = await instance.get("users/current");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkApi) => {
      const state = thunkApi.getState();
      const token = state.auth.token;

      if (token) return true;

      return false;
    },
  }
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      await instance.post("/users/logout");
clearAuthHeader();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);