import { createSlice } from "@reduxjs/toolkit";




export const carouselSlice = createSlice({
    name: "carousel",
    initialState: {
        carouselIdx: 0,
        productCarouselIdx: 0,
    },
    reducers: {
        setCarousel: (state, action:{payload: number}) => {
            state.carouselIdx = action.payload;
        },
        setProductCarousel: (state, action:{payload: number}) => {
            state.productCarouselIdx = action.payload;
        },
    },
})


export const { setCarousel, setProductCarousel } = carouselSlice.actions;
export default carouselSlice.reducer;