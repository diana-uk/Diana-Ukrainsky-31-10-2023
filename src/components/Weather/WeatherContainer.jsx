import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addLocationToFavorites,
  removeLocationFromFavorites,
} from "../../store/locations-slice";
import LocationContainer from "../LocationContainer.jsx";

const WeatherContainer = ({ cityName, currentWeather }) => {
  const dispatch = useDispatch();
  const favoriteLocations = useSelector(
    (state) => state.locations.favoriteLocations
  );
  const currentLocation = useSelector((state) => state.weather.currentWeather);

  const isFavorite = favoriteLocations.some(
    (fav) => fav.id === currentLocation.id
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeLocationFromFavorites(currentLocation));
    } else {
      dispatch(addLocationToFavorites(currentLocation));
    }
  };

  return (
    <div>
      <LocationContainer
        cityName={cityName}
        currentWeather={currentWeather}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
      />
    </div>
  );
};

export default WeatherContainer;
