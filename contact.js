"use strict";
import 'waypoints/lib/noframework.waypoints.min'

// navSticky

// const mainContent = document.querySelector(".navSticky");
const mainContent = document.getElementById("secondWaypoint")
const navBar = document.querySelector(".mySticky");
const navheight = navBar.getBoundingClientRect().height;
let waypoint = new Waypoint({
  element: mainContent,
  handler: function (direction) {
    if (direction === "down") {
      navBar.classList.toggle("navOnAnimate");
      mainContent.style.marginTop = navheight + "px";
    }
    if (direction === "up") {
      navBar.classList.toggle("navOnAnimate");
      mainContent.style.marginTop = 0 + "px";
    }
  },
});
