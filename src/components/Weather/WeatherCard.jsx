import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import humidityIcon from "../../assets/weather-icons/ic-humidity.png";
import windIcon from "../../assets/weather-icons/ic-wind.png";
import classes from "./WeatherCard.module.css";
import { setValue } from "../../store/locations-slice"; // Assuming you have an action for selecting a city
import { convertTemperature, getDayOfWeek } from "../../utils/weatherFunctions";

// WeatherItem can be a city with weather(Favorites page)
//  or a 5-day forecast item (Home page)
const WeatherCard = ({ showFullDetails, weatherItem }) => {
  const tempUnit = useSelector((state) => state.weather.currentTempUnit);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setValue({ id: weatherItem.id, name: weatherItem.name }));
  };

  const renderWeatherInfo = () => {
    const { dayWeather } = weatherItem;
    return (
      <div className={classes["c-weather-card-data-container"]}>
        {renderWeatherData(
          "Rain",
          `${dayWeather.rain.value}${dayWeather.rain.unit}`,
          humidityIcon
        )}
        {renderWeatherData(
          "Wind Speed",
          `${dayWeather.windSpeed.value} ${dayWeather.windSpeed.unit}`,
          windIcon
        )}
      </div>
    );
  };

  const renderWeatherData = (label, value, icon) => (
    <div className={classes["c-weather-card-data-item"]}>
      <img
        src={icon}
        alt="weather icon"
        className={classes["c-weather-icon"]}
      />
      <div className={classes["c-data"]}>
        <div className={classes["c-weather-text"]}>{label}</div>
        <div className={classes["c-weather-data-value"]}>{value}</div>
      </div>
    </div>
  );

  const renderDayInfo = () => (
    <>
      <div style={{ color: "white", fontSize: "1.5em" }}>
        {getDayOfWeek(weatherItem.date) || "Unknown Day"}
      </div>
      <div className={classes["c-weather-card-image"]}>
        <img
          src={`/assets/weather-icons/${weatherItem?.dayWeather.icon}.png`}
          alt="weather icon"
        />
      </div>
      <div className={classes["c-weather-card-temp"]}>
        {`${convertTemperature(weatherItem?.temperature.max, tempUnit)}`}&deg;
        {tempUnit.toUpperCase()}
      </div>
      <div style={{ color: "white", marginTop: "10px" }}>
        Min: {`${convertTemperature(weatherItem?.temperature.min, tempUnit)}`}
        &deg;{tempUnit.toUpperCase()}
      </div>
      {renderWeatherInfo()}
    </>
  );

  const renderFullDetails = () => (
    <Link
      to="/Diana-Ukrainsky-31-10-2023/"
      onClick={handleClick}
      style={{ textDecoration: "none" }}
    >
      <div
        className={classes["c-weather-card-weather"]}
        style={{
          color: "white",
          fontSize: "1.5em",
        }}
      >
        {weatherItem?.name || "Unknown Location"}
        <div className={classes["c-weather-card-image"]}>
          <img
            src={`/assets/weather-icons/${weatherItem?.currentWeather.weatherIcon}.png`}
            alt="weather icon"
          />
        </div>
        <div className={classes["c-weather-card-temp"]}>
          {tempUnit.toLowerCase() === "c"
            ? weatherItem?.currentWeather.temperature.metric
            : weatherItem?.currentWeather.temperature.imperial}
          &deg;{tempUnit.toUpperCase()}
        </div>
      </div>
    </Link>
  );

  return (
    <div className={classes["c-weather-card"]}>
      {!showFullDetails ? renderDayInfo() : renderFullDetails()}
    </div>
  );
};

export default WeatherCard;
