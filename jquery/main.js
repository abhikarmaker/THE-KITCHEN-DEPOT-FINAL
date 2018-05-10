$(document).ready(function(){
	$("#collapse h3").click(function(){
		$(this).toggleClass("toggle");
		if($(this).attr("class") != "toggle"){
			$(this).next().slideUp(1000, "easeInBounce");
		}
		else{
			$(this).next().slideDown(1000, "easeOutBounce");
		}
	});
});

$('.menu-toggle').click(function() {

  $('ul').toggleClass('opening');
  $(this).toggleClass('open');

});


		
jQuery(document).ready(function() {
	jQuery('.toggle-nav').click(function(e) {
	jQuery(this).toggleClass('active');
	jQuery('.menu ul').toggleClass('active');
	e.preventDefault();
	});
});


$(document).ready(function() {
	$("#faqs h1").animate( { fontSize: "650%", opacity: 1, left: "+=375" }, 1000, "easeInExpo" )  
		         .animate( { fontSize: "300%", left: "-=200" }, 1000, "easeOutExpo" );
});


