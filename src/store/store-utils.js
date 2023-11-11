import { uiActions } from "./ui-slice";

const apiKey = "HKzPEB55NPMqyCEGzXdHICgayWi3m6FM";

// Common fetchData function to make API requests
export const fetchData = async (url, queries = "", functionName) => {
  const queryString = queries ? `&${queries}` : "";
  const response = await fetch(`${url}?apikey=${apiKey}${queryString}`);

  if (!response.ok) {
    throw new Error(`${functionName}: API request failed`);
  }

  const data = await response.json();
  return data;
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
