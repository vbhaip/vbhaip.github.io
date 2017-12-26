$(document).ready(function() {
  spirit.setup();

  const gears = spirit.groups.get("gears");
  const arrows = spirit.groups.get("arrows");

  const gearstime = gears.construct();
  const arrowstime = arrows.construct();

  gearstime.repeat(-1).play();

  arrowstime.repeat(-1).play();


});
