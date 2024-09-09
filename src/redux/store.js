import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/slice";
import {filtersReducer} from "./filters/slice"
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/slice"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
  export const store = configureStore({
    reducer: {
      contacts: contactsReducer,
      filters: filtersReducer,
      auth: persistedAuthReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  
  
  export const persistor = persistStore(store);
