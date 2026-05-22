import { createSlice } from "@reduxjs/toolkit";
import { CategoryProductInterface, Product } from "./types/type";

const initialState: CategoryProductInterface = {
  products: [],
  message: "",
  error: null,
  loading: false,
};

const categoryProductSlice = createSlice({
  name: "categoryProduct",
  initialState,
  reducers: {
    setProducts: (state, action: { payload: Product[] }) => {
      state.products = action.payload;
    },
    setMessage: (state, action: { payload: string }) => {
      state.message = action.payload;
    },
    setError: (state, action: { payload: string }) => {
      state.error = action.payload;
    },
    setLoading: (state, action: { payload: boolean }) => {
      state.loading = action.payload;
    },
  },
});

export const { setProducts, setMessage, setError, setLoading } =
  categoryProductSlice.actions;
export default categoryProductSlice.reducer;
