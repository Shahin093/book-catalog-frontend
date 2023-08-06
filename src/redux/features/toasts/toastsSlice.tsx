import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum ToastType {
  Success = "success",
  Error = "error",
  Warning = "warning",
  Info = "info",
}

interface ToastState {
  message: string | null;
  type: ToastType | null;
}

const initialState: ToastState = {
  message: null,
  type: null,
};
const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast: (
      state,
      action: PayloadAction<{ message: string; type?: ToastType | null }>
    ) => {
      state.message = action.payload.message;
      if (state) {
        state.type =
          action.payload.type !== undefined
            ? action.payload.type
            : ("success" as ToastType | null);
      }
    },
    hideToast: (state) => {
      state.message = null;
      state.type = null;
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
