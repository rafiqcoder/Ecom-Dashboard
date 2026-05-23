import { Product, ProductsFetchingInterface } from "@/global/types/type";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ProductsFetchingInterface = {
  products: [],
  loading: false,
  error: null,
  success: false,
  message: "",
};

export const allProductSlice = createSlice({
  name: "allProduct",
  initialState,
  reducers: {
    setProducts: (state: ProductsFetchingInterface, action: {payload: Product[]}) => {
      state.products = action.payload;
      state.success = true;
    },
    setLoading: (state: ProductsFetchingInterface, action: {payload: boolean}) => {
      state.loading = action.payload;
    },
    setError: (state: ProductsFetchingInterface, action: {payload: string}) => {
      state.error = action.payload;
      state.success = false;
    },
    setMessage: (state: ProductsFetchingInterface, action: {payload: string}) => {
      state.message = action.payload;
    },
  },
});

export const { setProducts, setLoading, setError, setMessage } = allProductSlice.actions;
export default allProductSlice.reducer;
