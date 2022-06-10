import { configureStore } from "@reduxjs/toolkit";

import UserSlice from "./reducers/UserSlice"

const rootReducer = {
  UserSlice: UserSlice,
}

const store = configureStore({
  reducer: rootReducer,
});

export default store;
