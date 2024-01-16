import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "../reducers/stateReducer";

const store = configureStore({
  reducer: {
    globalState: stateReducer,
  },
});

export default store;
