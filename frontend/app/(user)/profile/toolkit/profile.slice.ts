import {
  ProductsFetchingInterface,
  initialInterface,
} from "@/global/types/type";
import { createSlice } from "@reduxjs/toolkit";
import { InitialInterface } from "../components/types/type";

const initialState: InitialInterface = {
  activeTab: "profile",
  editMode: false,
  myOrders: {
    success: false,
    products: [],
    loading: false,
    error: "",
    message: "",
  },
  myProfile: {
    success: false,
    loading: false,
    err: "",
    message: "",
  },
};

export const ordersSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setEditMode: (state, action) => {
      state.editMode = action.payload;
    },
    setLoading: (state, action) => {
      state.myOrders.loading = action.payload;
    },
    setSuccess: (state, action) => {
      state.myOrders.success = action.payload;
    },
    setError: (state, action) => {
      state.myOrders.error = action.payload;
    },
    setData: (state, action) => {
      state.myOrders.products = action.payload;
    },
    setMessage: (state, action) => {
      state.myOrders.message = action.payload;
    },
    resetState: (state) => {
      state.myOrders = initialState.myOrders;
    },
    // profile states
    setProfileMessage: (state, action) => {
      state.myProfile.message = action.payload;
    },
    setProfileSuccess: (state, action) => {
      state.myProfile.success = action.payload;
    },
    setProfileError: (state, action) => {
      state.myProfile.err = action.payload;
    },
    setProfileResetState: (state) => {
      state.myProfile = initialState.myProfile;
    },
  },
});
export const {
  setActiveTab,
  setLoading,
  setSuccess,
  setError,
  setData,
  setMessage,
  resetState,
  setProfileMessage,
  setProfileSuccess,
  setProfileError,
  setProfileResetState,
  setEditMode
} = ordersSlice.actions;
export default ordersSlice.reducer;
