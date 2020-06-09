const image = document.getElementById('pfp');
new simpleParallax(image, {
	orientation: 'right',
	scale: 2.00,
	overflow: true,
});
$(document).ready(function(){
    $('#introtext').fadeIn();
});




const options = {delay: 0,
duration: 2000,
delay: 0,
reset: false};

const scroll_delay = 200;

var options_temp = {...options};

for(let i=0; i<$('#timeline li').length; i++){
	ScrollReveal().reveal($('#timeline li:' + 'nth-child(' + (i+1).toString() + ')'), options_temp);
	options_temp['delay'] = options_temp['delay'] + scroll_delay;
}
ScrollReveal().reveal($('#experience-bottom'), options_temp);

options_temp = {...options};

ScrollReveal().reveal($('#projects-header'), options_temp);
options_temp['delay'] = scroll_delay;

for(let i=0; i<$('.project-shape').length; i++){
	ScrollReveal().reveal($('.project-shape:' + 'eq(' + (i+0).toString() + ')'), options_temp);
	options_temp['delay'] = options_temp['delay'] + scroll_delay;
}

options_temp = {...options};

ScrollReveal().reveal($('#contact_header_message'), options_temp);
options_temp['delay'] = scroll_delay;
ScrollReveal().reveal($('#contactform'), options_temp);
