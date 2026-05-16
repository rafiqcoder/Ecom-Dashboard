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
  },
  loading: false,
  success: false,
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
  },
});
export const { setErrorState, setUserState, setLoading } = authSlice.actions;
export default authSlice.reducer;
