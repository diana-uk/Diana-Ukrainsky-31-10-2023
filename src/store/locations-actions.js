import { setValue, setSuggestions } from "./locations-slice";
import { fetchData, handleFetchError, handleNotification } from "./store-utils";
import { AUTOCOMPLETE_API_URL, GEOLOCATION_API_URL } from "../config/config";

export const fetchCitySuggestions = (searchTerm) => {
  const functionName = "fetchCitySuggestions";
  return async (dispatch) => {
    try {
      const suggestions = await fetchData(
        `${AUTOCOMPLETE_API_URL}`,
        `q=${searchTerm}`,
        functionName
      );
      dispatch(setSuggestions(suggestions));
    } catch (error) {
      handleFetchError(dispatch, error, functionName);
    }
  };
};

export const getLocationKeyByLatLng = (lat, lng) => {
  const functionName = "getLocationKeyByLatLng";
  return async (dispatch) => {
    handleNotification(dispatch, {
      status: "pending",
      title: "Fetching...",
      message: "Fetching location data!",
    });

    try {
      const response = await fetchData(
        `${GEOLOCATION_API_URL}`,
        `q=${lat},${lng}`,
        functionName
      );
      dispatch(setValue({ id: response.Key, name: response.LocalizedName }));
      handleNotification(dispatch, {
        status: "success",
        title: "Success!",
        message: "Fetched location data successfully!",
      });
    } catch (error) {
      console.error("Error fetching location key:", error);
      handleFetchError(dispatch, error, functionName);
    }
  };
};
