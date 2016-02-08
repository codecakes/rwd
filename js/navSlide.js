
(function menuToggle () {
  "use strict";
  
  let navIcon = $("#trigram"),
      navBar = $(".nav__trigram");
  
  navIcon.click(function clickBurger(evt) {
    if ( navBar.css("visibility") === "collapse" ) {
      navBar.css({"visibility":"visible", "transform":"translate(0px, 0px)", "position":"relative"}, 1000);
    } else {
      navBar.css({"visibility":"collapse", "transform":"translate(-300px, 0px)", "position":"absolute"}, 1000);
    }
  });
  
})();