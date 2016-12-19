$('.arrow').click(function(){
		$(this).animate({top: '-142'}, 6000);
		$(".arrow")
			.delay(0)
			.queue(function (next) {
			$(this).addClass('box_rotate box_transition');
			next();
			});		
		$(this).animate({left: '70px'}, 3000);
		$(".red_dot").delay(11000).fadeOut(200);
			$(".green_dot").delay(11200).fadeIn(300);
		$("#gamedropinfo")
			.delay(11200)
			.queue(function (next) {
			$('#gamedropinfo').fadeIn(500);
			next();
			});		
});

$('.game-icon1, #dropboxbutton').click(function(){
	$("#whitespace, .fillertag, .h2game, .pgame, .game-container5, .game2, .game2demo, .game3, .game3demo, .game4, .game4demo, .reset2, .h2game2, .pgame2, .h2game3, .pgame3, .h2game4, .pgame4").fadeOut(500);
	$(".game1, .game1demo, .h2game1, .pgame1").delay(550).fadeIn(1000);
});
$('.game-icon2').click(function(){
	$("#whitespace, .fillertag, .h2game, .pgame, .game-container5, .game1, .game1demo, .game3, .game3demo, .game4, .game4demo, .reset2, .h2game1, .pgame1, .h2game3, .pgame3, .h2game4, .pgame4").fadeOut(500);
	$(".game2, .game2demo, .h2game2, .pgame2").delay(550).fadeIn(1000);
});
$('.game-icon3').click(function(){
	$(".fillertag, .h2game, .pgame, .game-container5, .game1, .game1demo, .game2, .game2demo, .game4, .game4demo, .h2game1, .pgame1, .h2game2, .pgame2, .h2game4, .pgame4").fadeOut(500);
	$("#whitespace, .game3, .game3demo, .reset2, .h2game3, .pgame3").delay(550).fadeIn(1000);
});
$('.game-icon4').click(function(){
	$("#whitespace, .fillertag, .h2game, .pgame, .game-container5, .game1, .game1demo, .game3, .game3demo, .game2, .game2demo, .reset2, .h2game1, .pgame1, .h2game2, .pgame2, .h2game3, .pgame3").fadeOut(500);
	$(".game4, .game4demo, .h2game4, .pgame4").delay(550).fadeIn(1000);
});
$('.te').click(function(){
	$(".game4, .game4demo, .h2game4, .pgame4").fadeOut(500);
	$(".game-container5, .h2game, .pgame").delay(550).fadeIn(1000);
});