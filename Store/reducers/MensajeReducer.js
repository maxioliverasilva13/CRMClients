import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const initialState = {
  type: null,
  message: null,
};

const mensajeSlice = createSlice({
  name: "MensajeReducer",
  initialState,
  reducers: {
    changeMessage(state, { payload }) {
      state.message = payload?.message;
      state.type = payload?.type;
    },
    resetMessage(state) {
      state.message = null;
      state.type = null;
    },
  },
});

export const { actions } = mensajeSlice;
export default mensajeSlice.reducer;

export const useMensajeActions = () => {
  const dispatch = useDispatch();

  const changeMessage = (value) => {
    dispatch(mensajeSlice.actions.changeMessage(value));
  };

  const resetMessage = () => {
    dispatch(mensajeSlice.actions.resetMessage());
  };

  return {
    changeMessage,
    resetMessage,
  };
};
