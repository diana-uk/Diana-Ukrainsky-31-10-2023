import DarkModeSVG from "../../assets/button-icons/dark-mode-button.svg?react";

const DarkModeButton = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");
  if (selectedTheme === "dark") {
    setDarkMode();
  }

  const toggleTheme = (event) => {
    if (event.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div>
      <label id="theme-toggle-button">
        <input
          type="checkbox"
          id="toggle"
          onChange={toggleTheme}
          defaultChecked={selectedTheme === "dark"}
        />
        <DarkModeSVG />
      </label>
    </div>
  );
};

export default DarkModeButton;
