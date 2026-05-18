import { createSlice } from "@reduxjs/toolkit";




export const carouselSlice = createSlice({
    name: "carousel",
    initialState: {
        carouselIdx: 0,
    },
    reducers: {
        setCarousel: (state, action:{payload: number}) => {
            state.carouselIdx = action.payload;
        },
       
    },
})


export const { setCarousel } = carouselSlice.actions;
export default carouselSlice.reducer;