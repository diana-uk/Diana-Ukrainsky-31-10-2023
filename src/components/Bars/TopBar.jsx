import classes from "./TopBar.module.css";
import SearchBar from "./SearchBar";
import TempToggleButton from "../Buttons/TempToggleButton";

const TopBar = () => {
  return (
    <div>
      <div className={classes["c-top-bar"]}>
        <SearchBar />
        <TempToggleButton />
      </div>
    </div>
  );
};

export default TopBar;
