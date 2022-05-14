import 'waypoints/lib/noframework.waypoints.min'

const weSave = document.getElementById("weSave");
let aboutNavbar = document.getElementById("aboutnavbar");

let waypoint = new Waypoint({
    element: weSave,
    handler: function (direction) {
        if (direction === "down") {
            // navBar.classList.toggle("navOnAnimate");
            // mainContent.style.marginTop = navheight + "px";
            // aboutNavbar.classList.add("d-block")
            console.log("this is down")

        }
        if (direction === "up") {
            // navBar.classList.toggle("navOnAnimate");
            // mainContent.style.marginTop = 0 + "px";
            // aboutNavbar.classList.remove("d-block");
            console.log("this is up")

        }
    },offset:'75%'
});
