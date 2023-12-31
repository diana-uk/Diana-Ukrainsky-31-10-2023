const WEATHER_ICONS = {
  SUNNY: "ic-clear",
  CLOUDY: "ic-cloud",
  DRIZZLE: "ic-drizzle",
  RAIN: "ic-rain",
  SNOW: "ic-snow",
  MOON: "ic-moon",
};

const weatherIcons = {
  1: WEATHER_ICONS.SUNNY,
  2: WEATHER_ICONS.SUNNY,
  3: WEATHER_ICONS.SUNNY,
  4: WEATHER_ICONS.SUNNY,
  5: WEATHER_ICONS.SUNNY,
  6: WEATHER_ICONS.CLOUDY,
  7: WEATHER_ICONS.CLOUDY,
  8: WEATHER_ICONS.CLOUDY,
  11: WEATHER_ICONS.CLOUDY,
  12: WEATHER_ICONS.RAIN,
  13: WEATHER_ICONS.DRIZZLE,
  14: WEATHER_ICONS.DRIZZLE,
  15: WEATHER_ICONS.RAIN,
  16: WEATHER_ICONS.DRIZZLE,
  17: WEATHER_ICONS.DRIZZLE,
  18: WEATHER_ICONS.RAIN,
  19: WEATHER_ICONS.CLOUDY,
  20: WEATHER_ICONS.DRIZZLE,
  21: WEATHER_ICONS.DRIZZLE,
  22: WEATHER_ICONS.SNOW,
  23: WEATHER_ICONS.DRIZZLE,
  24: WEATHER_ICONS.SNOW,
  25: WEATHER_ICONS.SNOW,
  26: WEATHER_ICONS.RAIN,
  29: WEATHER_ICONS.SNOW,
  30: WEATHER_ICONS.SUNNY,
  31: WEATHER_ICONS.CLOUDY,
  32: WEATHER_ICONS.CLOUDY,
};

// Function to get the icon based on the weather code
export const getWeatherIcon = (weatherCode) => {
  return weatherIcons[weatherCode] || WEATHER_ICONS.MOON;
};
