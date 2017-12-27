$(document).ready(function() {
  checkToggle();
  spirit.setup();

  spirit.load('animations/animationsv2.json').then(groups => {
    const gears = spirit.groups.get("gears");
    const arrows = spirit.groups.get("arrows");
    const logo = spirit.groups.get("logo");

    gears.construct().repeat(-1).play();
    arrows.construct().repeat(-1).play();
    logo.construct().play();
  });

});

$("#menu").click(function(){

  spirit.load('animations/animationsv2.json').then(groups => {
    const menu = spirit.groups.get("menu");

    menu.construct().play();
  });
});


$(window).resize(function(){

  checkToggle();

});



function checkToggle(){

  var h = $(window).height();
  var w = $(window).width();


  if(w < 680 || h < 580){
    $("#leftnav").hide();
    $("#rightnav").hide();
    $("#bottomnav").hide();
  }
  else{
    $("#leftnav").show();
    $("#rightnav").show();
    $("#bottomnav").show();
  }


}
