import { Link, useMatch, useResolvedPath } from "react-router-dom";
import cloudIcon from "../../assets/ic-cloud-outline.svg";
import WaveFlow from "../../assets/wave-flow.svg?react";
import classes from "./NavBar.module.css";
import DarkMode from "../Buttons/DarkModeButton";

const Header = () => {
  return (
    <div>
      <nav className={classes.nav}>
        <Link to="/" className={classes["site-title"]}>
          <h1>abra Weather Task</h1>
          <img src={cloudIcon}></img>
        </Link>
        <ul>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/favorites">Favorites</CustomLink>
        </ul>
        <DarkMode />
      </nav>
      <WaveFlow />
    </div>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? classes.active : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Header;
