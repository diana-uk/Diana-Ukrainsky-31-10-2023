import { uiActions } from "./ui-slice";
import { ACCUWEATHER_API_KEY } from "../config/config";

// Common fetchData function to make API requests for the weather, forecast,
// autocomplete data and search by geolocation
export const fetchData = async (url, queries = "", functionName) => {
  const queryString = queries ? `&${queries}` : "";
  const fullUrl = `${url}?apikey=${ACCUWEATHER_API_KEY}${queryString}`;
  const middlewareUrl = "https://api.allorigins.win/get?url=";

  try {
    const response = await fetch(
      `${middlewareUrl}${encodeURIComponent(fullUrl)}`
    );

    if (!response.ok) {
      throw new Error(`${functionName}: API request failed`);
    }

    const responseData = await response.json();
    const data = JSON.parse(responseData.contents);

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`${functionName}: Unable to fetch data`);
  }
};

export const handleFetchError = (dispatch, error, actionName) => {
  dispatch(
    uiActions.showNotification({
      status: "error",
      title: "Error!",
      message: `${actionName}: Could not fetch weather data! error: ${error.message}`,
    })
  );
};

export const handleNotification = (dispatch, { status, title, message }) => {
  dispatch(
    uiActions.showNotification({
      status,
      title,
      message,
    })
  );

  if (status === "success") {
    setTimeout(() => {
      dispatch(uiActions.clearNotification());
    }, 3000);
  }
};

export const handleCleanNotification = (dispatch) => {
  dispatch(uiActions.showNotification(null));
};
