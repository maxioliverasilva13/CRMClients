import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const initialState = {
  userInfo: null,
};

const userSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    changeUserInfo(state, { payload }) {
      state.userInfo = payload;
    },
  },
});

export const { actions } = userSlice;
export default userSlice.reducer;

export const useUserActions = () => {
  const dispatch = useDispatch();

  const changeUserInfo = (value) => {
    dispatch(userSlice.actions.changeUserInfo(value))
  };

  return {
    changeUserInfo,
  };
};
