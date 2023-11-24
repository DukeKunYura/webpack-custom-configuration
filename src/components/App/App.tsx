import { Link, Outlet } from "react-router-dom";
import classes from "./App.module.scss";

export const App = () => {

  // if (__PLATFORM__ === "desktop") {
  //   return <div>desktop</div>
  // }

  // if (__PLATFORM__ === "mobile") {
  //   return <div>mobile</div>
  // }


  return (
    <div>
      <div>PLATFORM={__PLATFORM__}</div>
      <Link to={"/about"}>about</Link>
      <br />
      <Link to={"/shop"}>shop</Link>
      <br />
      <Link to={"/testform"}>test</Link>
      <button className={classes.button}>
        <span>Press</span>
      </button>
      <Outlet />
    </div>
  );
};
