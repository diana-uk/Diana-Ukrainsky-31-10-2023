import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchCurrentWeatherData,
  fetchDailyForecastData,
} from "../store/weather-actions";
import TopBar from "../components/Bars/TopBar";
import WeatherList from "../components/Weather/WeatherList";
import WeatherContainer from "../components/Weather/WeatherContainer";

export default function Home() {
  const selectedTerm = useSelector((state) => state.locations.value);
  const currentLocation = useSelector((state) => state.weather.currentWeather);
  const dailyForecasts = useSelector((state) => state.weather.dailyForecasts);

  const cityId = selectedTerm?.id || "215854";
  const cityName = selectedTerm?.name || "Tel Aviv";

  const dispatch = useDispatch();

  useEffect(() => {
    if (cityId && cityName) {
      dispatch(fetchCurrentWeatherData(cityId, cityName));
      dispatch(fetchDailyForecastData(cityId));
    }
  }, [dispatch, cityId, cityName]);

  return (
    <div className="c-container">
      <TopBar />
      <WeatherContainer cityName={cityName} currentLocation={currentLocation} />
      <WeatherList weatherList={dailyForecasts} showFullDetails={false} />
    </div>
  );
}
