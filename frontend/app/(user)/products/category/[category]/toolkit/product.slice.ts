import { createSlice } from "@reduxjs/toolkit";
import { CategoryProductInterface, Product } from "./types/type";

const initialState: CategoryProductInterface = {
  products: [],
  message: "",
  error: null,
  loading: false,
  success: false,
};

const categoryProductSlice = createSlice({
  name: "categoryProduct",
  initialState,
  reducers: {
    setProducts: (state, action: { payload: Product[] }) => {
      state.products = action.payload;
      state.success = true;
    },
    setMessage: (state, action: { payload: string }) => {
      state.message = action.payload;
    },
    setError: (state, action: { payload: string }) => {
      state.error = action.payload;
      state.success = false;
    },
    setLoading: (state, action: { payload: boolean }) => {
      state.loading = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
  },
});

export const { setProducts, setMessage, setError, setLoading, setSuccess } =
  categoryProductSlice.actions;
export default categoryProductSlice.reducer;
