import { Link, Outlet } from "react-router-dom";
import classes from "./App.module.scss";

export const App = () => {
  return (
    <div>
      <Link to={"/about"}>about</Link>
      <br />
      <Link to={"/shop"}>shop</Link>
      <button className={classes.button}>
        <span>Press</span>
      </button>
      <Outlet />
    </div>
  );
};
