import { createSlice } from "@reduxjs/toolkit";
import { createLocationObject } from "../utils/locationUtils";

const initialState = {
  favoriteLocations: [],
  searchTerm: "",
  value: "",
  suggestions: [],
};

const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setValue: (state, action) => {
      const { id, name, Key = id, LocalizedName = name } = action.payload;
      state.value = createLocationObject(Key, LocalizedName);
    },
    setSuggestions: (state, action) => {
      state.suggestions = action.payload;
    },
    addLocationToFavorites: (state, action) => {
      state.favoriteLocations.push(action.payload);
    },
    removeLocationFromFavorites: (state, action) => {
      state.favoriteLocations = state.favoriteLocations.filter(
        (location) => location.id !== action.payload.id
      );
    },
  },
});

export const {
  setSearchTerm,
  setValue,
  setSuggestions,
  addLocationToFavorites,
  removeLocationFromFavorites,
} = locationsSlice.actions;

export default locationsSlice.reducer;
