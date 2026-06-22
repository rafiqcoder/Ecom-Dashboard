import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Data {
  totalOrder: number;
  totalSales: number;
  pendingOrder: number;
  cancelledOrder: number;
}
interface InitialState {
  message: string;
  loading: boolean;
  data: Data | null;
  success: boolean;
  error: string | null;
}

const initialState: InitialState = {
  message: "",
  loading: false,
  data: null,
  success: false,
  error: null,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setLoading: (state: InitialState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
      state.success = false;
    },
    setError: (state: InitialState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.success = false;
    },
    setSuccess: (state: InitialState, action: PayloadAction<boolean>) => {
      state.success = action.payload;
    },
    setData: (state: InitialState, action: PayloadAction<Data | null>) => {
      state.data = action.payload;
      state.success = true;
    },
    setMessage: (state: InitialState, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    resetState: (state: InitialState) => {
      state.message = "";
      state.loading = false;
      state.data = null;
      state.success = false;
      state.error = null;
    },
  },
});

export const {
  setLoading,
  setError,
  setSuccess,
  setData,
  setMessage,
  resetState,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
