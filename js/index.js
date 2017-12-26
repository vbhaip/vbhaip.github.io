import spirit from 'spiritjs'
import { load } from 'spiritjs'

$(document).ready(function() {
  spirit.setup()


  spirit.load('animations.json').then(groups => {
  groups.at(0).construct().play() // play first group
})


});
