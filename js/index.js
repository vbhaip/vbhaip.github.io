
$(document).ready(function() {
  spirit.setup();


  spirit.load('animations/animations.json').then(groups => {
    groups.get("gears").construct().play();
  })


});
