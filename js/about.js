var menuClick = false;

$(document).ready(function() {

  spirit.setup();
  spirit.load('animations/animationsv2.json').then(groups => {
    const arrows = spirit.groups.get("arrows");

    arrows.construct().repeat(-1).play();

  });
  hoverArrot($(".rightnav"), $(".back"))


});

function clickMenu() {
  const menu = spirit.groups.get("menu");
  if (!menuClick) {
    menu.construct().play();
    menuClick = true;
  } else {
    menu.construct().reverse(0);
    menuClick = false;
  }
}


function hoverArrow(nav, arrowtext) {

  nav.hover(function(){
    arrowtext.css("text-decoration", "underline");

  }, function(){
    arrowtext.css("text-decoration", "none");
  });


}
