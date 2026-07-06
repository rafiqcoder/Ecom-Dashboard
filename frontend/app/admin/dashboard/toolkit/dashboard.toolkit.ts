import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Data {
  totalOrder: number;
  totalSales: number;
  pendingOrder: number;
  cancelledOrder: number;
}

interface WeaklyData {
  weakly_customer: unknown[];
  weakly_product: unknown[];
  stock_product: unknown[];
  out_of_stock_product: unknown[];
  weakly_revenue: unknown[];
}
export interface WeaklyInitialState {
  message: string;
  loading: boolean;
  data: Data | null;
  success: boolean;
  error: string | null;

  // weakly data
  weaklyData: WeaklyData | null;
  weaklyLoading: boolean;
  weaklySuccess: boolean;
  weaklyError: string | null;
  weaklyMessage: string;
}

const initialState: WeaklyInitialState = {
  message: "",
  loading: false,
  data: null,
  success: false,
  error: null,

  /// weakly data reducer
  weaklyData: null,
  weaklyLoading: false,
  weaklySuccess: false,
  weaklyError: null,
  weaklyMessage: "",
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  // dashboard data reducer
  reducers: {
    setLoading: (state: WeaklyInitialState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
      state.success = false;
    },
    setError: (state: WeaklyInitialState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.success = false;
    },
    setSuccess: (state: WeaklyInitialState, action: PayloadAction<boolean>) => {
      state.success = action.payload;
    },
    setData: (state: WeaklyInitialState, action: PayloadAction<Data | null>) => {
      state.data = action.payload;
      state.success = true;
    },
    setMessage: (state: WeaklyInitialState, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    resetState: (state: WeaklyInitialState) => {
      state.message = "";
      state.loading = false;
      state.data = null;
      state.success = false;
      state.error = null;
    },

    // weakly data reducer
    setWeaklyData: (
      state: WeaklyInitialState,
      action: PayloadAction<WeaklyData | null>,
    ) => {
      state.weaklyData = action.payload;
      state.weaklySuccess = true;
    },
    setWeaklyLoading: (state: WeaklyInitialState, action: PayloadAction<boolean>) => {
      state.weaklyLoading = action.payload;
      state.weaklySuccess = false;
    },
    setWeaklyError: (state: WeaklyInitialState, action: PayloadAction<string>) => {
      state.weaklyError = action.payload;
      state.weaklySuccess = false;
    },
    setWeaklySuccess: (state: WeaklyInitialState, action: PayloadAction<boolean>) => {
      state.weaklySuccess = action.payload;
    },
    setWeaklyMessage: (state: WeaklyInitialState, action: PayloadAction<string>) => {
      state.weaklyMessage = action.payload;
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
  setWeaklyData,
  setWeaklyLoading,
  setWeaklyError,
  setWeaklySuccess,
  setWeaklyMessage,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
