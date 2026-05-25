import { createSlice } from "@reduxjs/toolkit";

interface initialInterface {
    message: string;
    error: string;
}
const initialState: initialInterface = {
    message: "",
    error: ""
}
const globalMessageSlice = createSlice({
    name: "globalMessage",
    initialState,
    reducers: {
        setGlobalMessage: (state, action) => {
            state.message = action.payload;
            setTimeout(() => {
                state.message = "";
            }, 3000)
        },
        setGlobalError: (state, action) => {
            state.error = action.payload;
            setTimeout(() => {
                state.error = "";
            }, 3000)
        }
    }
})

export const { setGlobalMessage, setGlobalError } = globalMessageSlice.actions

export default globalMessageSlice.reducer