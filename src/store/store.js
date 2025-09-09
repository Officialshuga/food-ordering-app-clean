import storage from "redux-persist/lib/storage";
import cartReducer from "../Slice/cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import authReducer from "../Slice/authSlice"



const persistConfig = {
  key: "root", //the key under which data is stored
  storage, //local storage
};

//wrap cart reducer with the persist reducer
const persistCartReducer = persistReducer(persistConfig, cartReducer);
const persistAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    cart: persistCartReducer,    //use the persist cart reducer
    auth: persistAuthReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore Redux-Persist actions that include non-serializable values
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

//persistor for persisting state
export const persistor = persistStore(store);
