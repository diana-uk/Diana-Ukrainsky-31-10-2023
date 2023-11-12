import { useSelector } from "react-redux";
import classes from "./Weather/WeatherCard.module.css";
import FavoritesButton from "./Buttons/FavoritesButton";

const LocationContainer = ({ currentWeather, toggleFavorite, isFavorite }) => {
  const tempUnit = useSelector((state) => state.weather.currentTempUnit);

  if (!currentWeather) {
    return null;
  }

  const {
    currentWeather: {
      weatherIcon = "",
      temperature: { metric = "", imperial = "" } = {},
      weatherText = "",
    } = {},
    name = "Unknown Location",
  } = currentWeather;

  return (
    <div className="c-current-weather">
      <div>
        <div className={classes["c-weather-card-image"]}>
          <img
            src={`https://raw.githubusercontent.com/diana-uk/Diana-Ukrainsky-31-10-2023/diana-abra-weather-app/src/assets/weather-icons/${weatherIcon}.png`}
            alt="weather icon"
          />
          <div>
            <div
              className="gray-text"
              style={{ color: "black", fontSize: "3rem" }}
            >
              {tempUnit.toLowerCase() === "c" ? metric : imperial}
              &deg;{tempUnit.toUpperCase()}
            </div>
            <div
              className="gray-text"
              style={{ color: "black", fontSize: "3rem" }}
            >
              {name}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            className="gray-text"
            style={{
              fontSize: "4.5rem",
              textAlign: "center",
              marginTop: "30px",
              paddingLeft: "30%",
              width: "70%",
            }}
          >
            {weatherText}
          </div>
          <div style={{ width: "30%", paddingLeft: "5%" }}>
            {
              <FavoritesButton
                location={currentWeather}
                toggleFavorite={toggleFavorite}
                isFavorite={isFavorite}
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationContainer;
