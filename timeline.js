"use strict";
// import ScrollReveal from "scrollreveal";

import ScrollReveal from "scrollreveal";

const timelineContent = {
  distance: "50px",
  origin: "right",
  duration: 1000,
  interval: 200,
  delay: 100,
  cleanup: true,
};

// const slideDownHeader = {
//   distance: "50px",
//   origin: "bottom",
//   duration: 1000,
//   interval: 200,
//   cleanup: true,
// };

ScrollReveal().reveal(".timelineSlide", timelineContent);

// const slide = document.querySelector(".container");
// const container = document.querySelector(".containers");
// const waypoint = new Waypoint({
//   element: slide,
//   handler: function (direction) {
//     console.log(direction);
//     if (direction === "down") {
//       console.log("hello");
//       container.style.setProperty(
//         "--animate--",
//         "fadeInDown 2s ease-in-out 2s"
//       );
//     }
//     if (direction === "up") {
//       container.style.setProperty("--animate--", "none");
//     }
//   },
// });

// const slideDownHeadertime = {
//   distance: "50px",
//   origin: "bottom",
//   duration: 1000,
//   interval: 200,
//   cleanup: true,
// };
//
// ScrollReveal().reveal(".headerContenttime", slideDownHeadertime);
