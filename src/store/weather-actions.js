import { weatherActions } from "./weather-slice";
import { createLocationObject } from "../utils/locationUtils";
import { getWeatherIcon } from "../utils/weatherUtils";
import { fetchData, handleFetchError, handleNotification } from "./store-utils";
import { CURRENT_WEATHER_API_URL, FORECAST_API_URL } from "../config/config";

export const fetchCurrentWeatherData = (cityId, cityName) => {
  const functionName = "fetchCurrentWeatherData";
  return async (dispatch) => {
    handleNotification(dispatch, {
      status: "pending",
      title: "Fetching...",
      message: "Fetching weather data!",
    });

    try {
      const currentWeather = await fetchData(
        `${CURRENT_WEATHER_API_URL}/${cityId}`,
        "",
        functionName
      );
      dispatch(
        weatherActions.setCurrentWeather(
          createLocationObject(cityId, cityName, currentWeather)
        )
      );
      handleNotification(dispatch, {
        status: "success",
        title: "Success!",
        message: "Fetched weather data successfully!",
      });
    } catch (error) {
      handleFetchError(dispatch, error, "fetchCurrentWeatherData");
    }
  };
};

export const fetchDailyForecastData = (cityId) => {
  const functionName = "fetchDailyForecastData";
  return async (dispatch) => {
    handleNotification(dispatch, {
      status: "pending",
      title: "Fetching...",
      message: "Fetching daily forecast data!",
    });
    try {
      const responseForecasts = await fetchData(
        `${FORECAST_API_URL}/${cityId}`,
        `metric=true&details=true`,
        functionName
      );
      dispatch(
        weatherActions.setDailyForecasts(
          createCustomForecastArray(responseForecasts.DailyForecasts)
        )
      );
      handleNotification(dispatch, {
        status: "success",
        title: "Success!",
        message: "Fetched daily forecast data successfully!",
      });
    } catch (error) {
      handleFetchError(dispatch, error, "fetchDailyForecastData");
    }
  };
};

function createCustomForecastArray(dailyForecasts) {
  const customForecastArray = dailyForecasts.map((forecast, index) => {
    return {
      id: index + 1,
      date: forecast.Date,
      temperature: {
        min: forecast.Temperature.Minimum.Value,
        max: forecast.Temperature.Maximum.Value,
      },
      dayWeather: {
        icon: getWeatherIcon(forecast.Day.Icon),
        iconPhrase: forecast.Day.IconPhrase,
        windSpeed: {
          value: forecast.Day.Wind.Speed.Value,
          unit: forecast.Day.Wind.Speed.Unit,
        },
        rain: {
          value: forecast.Day.Rain.Value,
          unit: forecast.Day.Rain.Unit,
        },
      },
    };
  });

  return customForecastArray;
}
