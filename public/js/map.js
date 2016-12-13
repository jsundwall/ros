$('.arrow').click(function(){
		$(this).animate({top: '-132px'}, 6000);
		$(".arrow")
			.delay(0)
			.queue(function (next) {
			$(this).addClass('box_rotate box_transition');
			next();
			});		
		$(this).animate({left: '529px'}, 3000);
});

$('.game-icon1').click(function(){
	$(".game-container5, .game2, .game2demo, .game3, .game3demo, .game4, .game4demo").fadeOut(500);
	$(".game1, .game1demo").delay(550).fadeIn(1000);
});
$('.game-icon2').click(function(){
	$(".game-container5, .game1, .game1demo, .game3, .game3demo, .game4, .game4demo").fadeOut(500);
	$(".game2, .game2demo").delay(550).fadeIn(1000);
});
$('.game-icon3').click(function(){
	$(".game-container5, .game1, .game1demo, .game2, .game2demo, .game4, .game4demo").fadeOut(500);
	$(".game3, .game3demo").delay(550).fadeIn(1000);
});
$('.game-icon4').click(function(){
	$(".game-container5, .game1, .game1demo, .game3, .game3demo, .game2, .game2demo").fadeOut(500);
	$(".game4, .game4demo").delay(550).fadeIn(1000);
});
$('.te').click(function(){
	$(".game-container5").fadeIn(1000);
	$(".game4, .game4demo").fadeOut(500);
});