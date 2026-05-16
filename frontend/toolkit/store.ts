import { configureStore } from "@reduxjs/toolkit";
import authSlice from "@/components/auth/authSlice/auth.slice";
export const store = configureStore({
    reducer: {
        auth: authSlice
    }
})