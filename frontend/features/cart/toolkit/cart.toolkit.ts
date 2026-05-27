import { createSlice } from "@reduxjs/toolkit";
import { CartSliceInterface } from "./types/type";
import { Product } from "@/components/landing/types/type";

const initialState: CartSliceInterface = {
    products: [],
    loading: false,
    error: null,
    message: "",
    success: false
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        setProducts: (state: CartSliceInterface, action: { payload: (Product & {quantity: number})[] }) => {
            state.products = action.payload;
            state.success = true;
        },
        setLoading: (state: CartSliceInterface, action: { payload: boolean }) => {
            state.loading = action.payload
        },
        setError: (state: CartSliceInterface, action: { payload: string | null }) => {
            state.error = action.payload;
            state.success = false
        },
        setMessage: (state: CartSliceInterface, action: { payload: string }) => {
            state.message = action.payload
        },
       
    }
})

export const { setProducts, setLoading, setError, setMessage } = cartSlice.actions;
export default cartSlice.reducer;