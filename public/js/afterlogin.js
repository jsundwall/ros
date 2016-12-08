$( document ).ready(function() {
	$(".menu_fade").fadeIn(500);
	$(".bubble_gone1").delay(1500).fadeIn(500);
});
$('.achievement_button').click(function(){
		$(".bubble_gone1").fadeOut(300);
		$(".bubble_gone6").delay(3000).fadeIn(300);
		$(".gone1").fadeOut(1000);
		$(".gone4").delay(999).fadeIn(1000);
});
$('.settings').click(function(){
		$(".bubble_gone1, .bubble_gone5, .dealwithit").fadeOut(300);
		$(".bubble_gone7").delay(3000).fadeIn(300);
		$(".gone1").fadeOut(1000);
		$(".gone5").delay(999).fadeIn(1000);
});
$('.bubble_gone6, .bubble_gone7').click(function(){
		$(".bubble_gone6, .bubble_gone7").fadeOut(300);
});
$('.backarrow').click(function(){
		$(".bubble_gone6, .bubble_gone7").fadeOut(300);
		$(".bubble_gone1").delay(3000).fadeIn(300);
		$(".gone4, .gone5").fadeOut(1000);
		$(".gone1").delay(999).fadeIn(1000);
});