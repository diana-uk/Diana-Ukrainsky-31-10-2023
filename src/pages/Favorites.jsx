import { useSelector } from "react-redux";
import WeatherList from "../components/Weather/WeatherList";

const Favorites = () => {
  const favoriteLocations = useSelector(
    (state) => state.locations.favoriteLocations
  );

  return (
    <div className="c-container">
      <WeatherList weatherList={favoriteLocations} showFullDetails={true} />
    </div>
  );
};

export default Favorites;
