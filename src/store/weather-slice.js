import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    currentWeather: null,
    dailyForecasts: [],
    currentTempUnit: "c",
  },
  reducers: {
    setCurrentWeather(state, action) {
      state.currentWeather = action.payload;
    },
    setDailyForecasts(state, action) {
      state.dailyForecasts = action.payload;
    },
    setTempUnit(state, action) {
      state.currentTempUnit = action.payload;
    },
  },
});

export const weatherActions = weatherSlice.actions;

export default weatherSlice.reducer;
