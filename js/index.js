$(document).ready(function() {
  var $e = $("#logo");
  $e.replaceWith($($e[0].contentDocument.documentElement).clone());
});
