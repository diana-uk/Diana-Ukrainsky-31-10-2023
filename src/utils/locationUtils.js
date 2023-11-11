import { getWeatherIcon } from "./weatherUtils";

export function createLocationObject(cityId, cityName, currentWeather) {
  const locationObject = {
    id: cityId,
    name: cityName,
  };

  if (currentWeather && currentWeather.length > 0) {
    locationObject.currentWeather = {
      weatherText: currentWeather[0].WeatherText,
      weatherIcon: getWeatherIcon(currentWeather[0].WeatherIcon),
      temperature: {
        metric: currentWeather[0].Temperature.Metric.Value,
        imperial: currentWeather[0].Temperature.Imperial.Value,
      },
    };
  }

  return locationObject;
}
