$(document).ready(function() {
  spirit.setup();

  spirit.load('animations/animations.json').then(groups => {
    const gears = spirit.groups.get("gears");
    const arrows = spirit.groups.get("arrows");
    const logo = spirit.groups.get("logo");

    gears.construct().repeat(-1).play();
    arrows.construct().repeat(-1).play();
    logo.construct().play();
  });


});

$("#menu").onClick(function(){

  spirit.load('animations/animations.json').then(groups => {
    const menu = spirit.groups.get("menu");

    menu.construct().play();
  });
});
