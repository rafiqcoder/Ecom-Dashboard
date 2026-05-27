import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderDetails: [],
  isLoading: false,
  isError: null,
  message: "",
  success: false,
};

const orderDetailsSlice = createSlice({
  name: "orderDetails",
  initialState,
  reducers: {},
});
export const {} = orderDetailsSlice.actions;
export default orderDetailsSlice;
