import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addLocationToFavorites,
  removeLocationFromFavorites,
} from "../../store/locations-slice";
import classes from "./FavoritesButton.module.css";

import buttonIcon from "../../assets/button-icons/favorite-button-icon.svg"; // Import the button icon SVG as an image

const FavoritesButton = ({ isFavorite, toggleFavorite }) => {
  return (
    <div>
      <button
        className={classes["c-favorite-button"]}
        styles={{
          backgroundColor: isFavorite ? "red" : "#e8e8e8",
          padding: "10px 20px",
        }}
        onClick={toggleFavorite}
      >
        <svg
          height="32"
          width="32"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H24V24H0z" fill="none"></path>
          <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path>
        </svg>
        <span style={{ marginLeft: "8px" }}>
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </span>
      </button>
    </div>
  );
};

export default FavoritesButton;
