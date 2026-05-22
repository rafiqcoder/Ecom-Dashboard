import { configureStore } from "@reduxjs/toolkit";
import authSlice from "@/features/auth/authSlice/auth.slice";
import carouselSlice from "@/components/landing/toolkit/carousel.slice";
import topRatedSlice from "@/components/landing/toolkit/topRated.slice";
import cartSlice from "@/features/cart/toolkit/cart.toolkit";
import categoryProductSlice from "@/app/(user)/products/[category]/toolkit/product.slice";
export const store = configureStore({
    reducer: {
        auth: authSlice,
        carousel: carouselSlice,
        topRatedProduct: topRatedSlice,
        cart: cartSlice,
        categoryProduct: categoryProductSlice,
    }
})