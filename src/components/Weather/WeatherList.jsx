import { useSelector } from "react-redux";
import styles from "./WeatherList.module.css";
import WeatherCard from "./WeatherCard";

// WeatherList can be list of cities with weather (Favorites page)
//  or a 5-day forecast list (Home page)
const WeatherList = ({ weatherList, showFullDetails }) => {
  return (
    <div className={styles["c-container"]}>
      {weatherList.map((weatherItem) => {
        return (
          <WeatherCard
            key={weatherItem.id}
            weatherItem={weatherItem}
            showFullDetails={showFullDetails}
          />
        );
      })}
    </div>
  );
};

export default WeatherList;
