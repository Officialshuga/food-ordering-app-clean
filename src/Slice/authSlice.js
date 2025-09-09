import { createSlice } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer';
import storage from "redux-persist/lib/storage";
 

const persistConfig = {
  key: "auth",
  storage
}

const authSlice = createSlice({
    name: "auth",
    initialState:{
        isAuthenticated: false
    },
    reducers:{
        login: (state)=>{
            state.isAuthenticated = true;
        },
        logout: (state)=>{
            state.isAuthenticated = false;
        }
    }
});

export const {login, logout} = authSlice.actions;
export default persistReducer(persistConfig, authSlice.reducer);