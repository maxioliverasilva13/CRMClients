import { configureStore } from "@reduxjs/toolkit";

import MensajeReducer from "./reducers/MensajeReducer";
import UserSlice from "./reducers/UserSlice";

const rootReducer = {
  UserSlice: UserSlice,
  MensajeReducer: MensajeReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
