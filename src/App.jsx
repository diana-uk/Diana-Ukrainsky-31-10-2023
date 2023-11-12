import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { Fragment } from "react";

import Navbar from "./components/Bars/NavBar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

import classes from "./App";
import Notification from "./components/UI/Notification";
import { Route, Routes } from "react-router-dom";
import { getLocationKeyByLatLng } from "./store/locations-actions";

function App() {
  const dispatch = useDispatch();

  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const setDefaultLocation = async () => {
      try {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            dispatch(getLocationKeyByLatLng(latitude, longitude));
          },
          (error) => {
            console.error("Error getting geolocation:", error);
          }
        );
      } catch (error) {
        console.error("Error setting default location:", error);
      }
    };

    setDefaultLocation();
  }, [dispatch]);
  return (
    <Fragment>
      <Navbar />
      <div className={classes.container}>
        {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )}
        <div className={classes.container}>
          <Routes>
            <Route path="/Diana-Ukrainsky-31-10-2023/" element={<Home />} />
            <Route
              path="/Diana-Ukrainsky-31-10-2023/favorites"
              element={<Favorites />}
            />
          </Routes>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
