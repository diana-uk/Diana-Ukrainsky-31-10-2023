import { configureStore } from "@reduxjs/toolkit";
import locationsReducer from "./locations-slice";
import weatherReducer from "./weather-slice";
import uiReducer from "./ui-slice";

const store = configureStore({
  reducer: {
    locations: locationsReducer,
    weather: weatherReducer,
    ui: uiReducer,
  },
});

export default store;
