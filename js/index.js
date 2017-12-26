$(document).ready(function() {
  spirit.setup();

  spirit.load('animations/animations.json').then(groups => {
    const gears = spirit.groups.get("gears");
    const arrows = spirit.groups.get("arrows");

    gears.construct().repeat(-1).play();
    arrows.construct().repeat(-1).play();
  })


});


$("#resume").hover(function(){
  $(this).css("")

})
