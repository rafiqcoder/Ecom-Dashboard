import { configureStore } from "@reduxjs/toolkit";
import authSlice from "@/features/auth/authSlice/auth.slice";
import carouselSlice from "@/components/landing/toolkit/carousel.slice";
export const store = configureStore({
    reducer: {
        auth: authSlice,
        carousel: carouselSlice
    }
})