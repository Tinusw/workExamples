//  Code that tells JS to wait until the whole DOM is loaded
$(document).ready(function(){

//
// Work Section
//

// work.js is good to go console message
console.log(works);

//looping through works array and adding images with borders using modulus operators
for(var i = 0; i < works.length; i++ ){
  $("#workRow").append("\
  	<div class= 'col-xs-12 col-sm-6 col-lg-3'>\
  	  <a href='#' class='work-img'>\
	      <img class='img-responsive' src='" + works[i].pic + "'>\
	      <span class='info'><p class='proj-title'>Title:</p> " + works[i].title + "</span>\
	    </a>\
    </div>\
  ");
  $("#workRow").css("text-align", "center");
  var images = $("#workRow img");
  if(i%2 === 0) {
  	$(images[i]).css("border", "2px solid DodgerBlue");
  } else {
  	$(images[i]).css("border", "2px solid Salmon");
  };

};

//mouse-enter effect for titles to pop up on hover
$(".work-img").mouseenter( function() {
	$(".info", this).show();
});

$(".work-img").mouseleave( function() {
  $(".info", this).hide();
});

