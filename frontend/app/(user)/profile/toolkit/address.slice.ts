import { AddressData, AddressInterface } from "@/global/types/type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: AddressInterface = {
  loading: false,
  error: "",
  message: "",
  data: [],
  success: false,
};
export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setAddressLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setAddressError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.success = false;
    },
    setAddressMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    setAddressData: (state, action: PayloadAction<AddressData[]>) => {
      state.success = true;
      state.data = action.payload;
    },
  },
});
export const {
  setAddressLoading,
  setAddressError,
  setAddressMessage,
  setAddressData,
} = addressSlice.actions;
export default addressSlice.reducer;
