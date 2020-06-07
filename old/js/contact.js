var menuClick = false;

$(document).ready(function() {

  spirit.setup();
  spirit.load('animations/animationsv2.json').then(groups => {
    const arrows = spirit.groups.get("arrows");

    arrows.construct().repeat(-1).play();

  });


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
