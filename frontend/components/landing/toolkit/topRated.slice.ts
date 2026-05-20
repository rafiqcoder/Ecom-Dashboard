import { createSlice } from "@reduxjs/toolkit";
import type { TopRatedProduct, TopRatedState } from "../types/type";



const initialState: TopRatedState = {
    products: [] as TopRatedProduct[],
    loading: false,
    error: null,
    message: "",
}

export const topRatedSlice = createSlice({
    name: "topRated",
    initialState: initialState,
    reducers: {
        setTopRated: (state, action: { payload: TopRatedProduct[] }) => {
            state.products = action.payload;
        },
        setLoading: (state, action: { payload: boolean }) => {
            state.loading = action.payload;
        },
        setError: (state, action: { payload: string | null }) => {
            state.error = action.payload;

        },
        setMessage: (state, action: { payload: string }) => {
            state.message = action.payload;
        }
    },
})


export const { setTopRated, setLoading, setError, setMessage } = topRatedSlice.actions;
export default topRatedSlice.reducer;   