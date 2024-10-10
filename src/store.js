import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "../src/slices/customerSlice";

export const store = configureStore({
  devTools: true,
  reducer: {
    customers: customerReducer,
  },
});

