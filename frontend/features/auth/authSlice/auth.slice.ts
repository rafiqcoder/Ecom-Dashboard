import { createSlice } from "@reduxjs/toolkit";
import { data, initialInterface } from "./types/type";

const initialState: initialInterface = {
  err: "",
  data: {
    name: "",
    email: "",
    role: "",
    phone: "",
    location: "",
    profile: "",
    lastLogin: "",
    lastSeen: "",
    onlineStatus: "",
    socketId: "",
    createdAt: "",
  },
  loading: false,
  success: false,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUserState: (state: initialInterface, action: { payload: data }) => {
      state.data = action.payload;
      state.success = true;
    },
    setLoading: (state: initialInterface, action: { payload: boolean }) => {
      state.loading = action.payload;
    },
    setErrorState: (state: initialInterface, action: { payload: string }) => {
      state.err = action.payload;
      state.success = false;
    },
    setMessage: (state: initialInterface, action: { payload: string }) => {
      state.message = action.payload;
    },
    resetState: (state: initialInterface) => {
      state.data = initialState.data;
      state.err = "";
      state.success = false;
      state.loading = false;
      state.message = "";
    },
  },
});
export const { setErrorState, setUserState, setLoading, setMessage, resetState } = authSlice.actions;
export default authSlice.reducer;
