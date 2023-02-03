import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./reducer/authSlice";
import utilitySlice from "./reducer/utilitySlice";

export const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        utilities: utilitySlice
    },
  })
  
  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch
  