$(document).ready(function() {
  spirit.setup();


  spirit.load('animations/animationsv2.json').then(groups => {
    const gears = spirit.groups.get("gears");
    const arrows = spirit.groups.get("arrows");
    const logo = spirit.groups.get("logo");

    gears.construct().repeat(-1).play();
    arrows.construct().repeat(-1).play();

    setTimeout(function(){
      logo.construct().play();
    }, 2000);

  });

});

function clickMenu(){
  spirit.load('animations/animationsv2.json').then(groups => {
    const menu = spirit.groups.get("menu");

    menu.construct().play();
  });
}

function setLogoInPlace(){
  spirit.load('animations/animationsv2.json').then(groups => {

    const logo = spirit.groups.get("logo");

    logo.construct().repeat(1).yoyo(true).play();
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
