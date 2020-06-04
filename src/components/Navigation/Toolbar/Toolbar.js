import React from "react";

import Logo from "../../Logo/Logo";
import classes from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = (props) => (
  <header className={classes.Toolbar}>

    <span style={{fontSize: "32px", cursor:"pointer"}} onClick={props.showSideDrawer}>&#9776;</span>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <h3>MyBurger App</h3>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
