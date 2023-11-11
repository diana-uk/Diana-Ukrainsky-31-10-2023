export const getDayOfWeek = (dateString) =>
  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
    new Date(dateString).getDay()
  ];

export const convertTemperature = (temperature, targetUnit) => {
  if (targetUnit === "c") {
    return temperature;
  } else if (targetUnit === "f") {
    return ((temperature * 9) / 5 + 32).toFixed(1);
  }
  return temperature;
};
