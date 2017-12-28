var menuClick = false;

$(document).ready(function() {

  spirit.load('animations/animationsv2.json').then(groups => {
    const gears = spirit.groups.get("gears");
    const arrows = spirit.groups.get("arrows");
    const logo = spirit.groups.get("logo");

    logo.construct().reverse(0);
    logo.construct().pause(0);

    gears.construct().repeat(-1).play();
    arrows.construct().repeat(-1).play();

    setTimeout(function() {
      logo.construct().play();
    }, 1000);

  });

  hoverArrow($(".leftnav"), $("#about"));
  hoverArrow($(".rightnav"), $("#projects"));
  hoverArrow($(".bottomnav"), $("#contact"));
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

function setLogoInPlace() {
  spirit.load('animations/animationsv2.json').then(groups => {

    const logo = spirit.groups.get("logo");
    logo.construct().reverse(0);
    logo.construct().pause(0);

  });
}

function hoverArrow(nav, arrowtext) {

  nav.hover(function(){
    arrowtext.css("text-decoration", "underline");

  }, function(){
    arrowtext.css("text-decoration", "none");
  });


}






/*
$(window).resize(function(){

  checkToggle();

});



function checkToggle(){

  var h = window.innerHeight;
  var w = window.innerWidth;

  console.log(w/h)
  console.log("   ");
  if(w/h >= 2.25 || h/w >= 2.25){
    hide();
  }
  else{
    show();
  }


}

function hide(){
  $("#leftnav").hide();
  $("#rightnav").hide();
  $("#bottomnav").hide();
}

function show(){
  $("#leftnav").show();
  $("#rightnav").show();
  $("#bottomnav").show();
}
*/
