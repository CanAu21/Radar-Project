import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "./actions";

const initialState = {
  flights: [],
  isLoading: true,
  isError: false,
};

const flightSlice = createSlice({
  name: "flightSlice",
  initialState,
  extraReducers: (builder) => {
    // cevap beklerken
    builder.addCase(getFlights.pending, (state) => {
      state.isLoading = true;
    });
    // olumlu cevap geldiğinde
    builder.addCase(getFlights.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.flights = action.payload;
    });
    // olumsuz cevap geldiğinde
    builder.addCase(getFlights.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default flightSlice.reducer;
