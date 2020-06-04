import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Auxiliary from "../../../hoc/Auxiliary";
import Backdrop from "../../UI/Backdrop/Backdrop";
import classes from "./SideDrawer.module.css";

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Auxiliary>
      <Backdrop show={props.open} clicked={props.closed} />
      <div id="mySidenav" className={attachedClasses.join(" ")}>
        <a
          href="javascript:void(0)"
          className={classes.Closebtn}
          onClick={props.closed}
        >
          &times;
        </a>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxiliary>
  );
};

export default sideDrawer;

// <h2>Animated Sidenav Example</h2>
// <p>Click on the element below to open the side navigation menu.</p>
// <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>

// <script>
// function openNav() {
//   document.getElementById("mySidenav").style.width = "250px";
// }

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
// }
// </script>

// <div id="mySidenav" className={classes.SideDrawer}>
//   {/* <Logo /> */}
//   <nav>
//       <NavigationItems />
//   </nav>
// </div>

// <div id="mySidenav" className={classes.SideDrawer}>
//   <a
//     href="javascript:void(0)"
//     className={classes.Closebtn}
//     onclick="closeNav()"
//   >
//     &times;
//   </a>
//   {/* <a href="#">About</a>
//   <a href="#">Services</a>
//   <a href="#">Clients</a>
//   <a href="#">Contact</a> */}
//   <NavigationItems />
// </div>
