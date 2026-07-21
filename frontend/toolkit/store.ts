import { configureStore } from "@reduxjs/toolkit";
import authSlice from "@/features/auth/authSlice/auth.slice";
import carouselSlice from "@/components/landing/toolkit/carousel.slice";
import topRatedSlice from "@/components/landing/toolkit/topRated.slice";
import cartSlice from "@/features/cart/toolkit/cart.toolkit";
import categoryProductSlice from "@/app/(user)/products/category/[category]/toolkit/product.slice";
import allProductsSlice from "@/app/(user)/products/components/toolkit/allProducts.slice";
import ordersSlice from "@/app/(user)/profile/toolkit/profile.slice";
import addressSlice from "@/app/(user)/profile/toolkit/address.slice";
import  dashboardSlice  from "@/app/admin/dashboard/toolkit/dashboard.toolkit";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    carousel: carouselSlice,
    topRatedProduct: topRatedSlice,
    cart: cartSlice,
    categoryProduct: categoryProductSlice,
    allProduct: allProductsSlice,
    orders: ordersSlice,
    address: addressSlice,
    dashboard: dashboardSlice
  },
});
