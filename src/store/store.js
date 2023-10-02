import operatorSlice from "./slices";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    operator: operatorSlice,
  },
});

export default store;
