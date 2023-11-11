import classes from "./TempToggleButton.module.css";
import { weatherActions } from "../../store/weather-slice";
import { useSelector, useDispatch } from "react-redux";

const TempToggleButton = () => {
  const tempUnit = useSelector((state) => state.weather.currentTempUnit);
  const dispatch = useDispatch();

  const setTempUnitHandler = () => {
    const newTempUnit = tempUnit === "c" ? "f" : "c";
    dispatch(weatherActions.setTempUnit(newTempUnit));
  };

  return (
    <div className={classes["c-temp-toggle-button-container"]}>
      <span>°C</span>

      <div className={classes["checkbox-wrapper-41"]}>
        <input
          type="checkbox"
          defaultChecked={tempUnit === "f"}
          onChange={setTempUnitHandler}
        />
      </div>
      <span>°F</span>
    </div>
  );
};

export default TempToggleButton;
