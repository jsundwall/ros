// All the menu scripts
$( document ).ready(function() {
$('.login').click(function(){
		$(".bubble_gone, .bubble_gone5, .dealwithit").fadeOut(300);
		$(".bubble_gone8").delay(2000).fadeIn(300);
		$(".gone").fadeOut(1000);
		$(".gone6").delay(999).fadeIn(1000);
		$(".bubble_gone8").delay(2500).fadeOut(300);
});
$('.register').click(function(){
		$(".bubble_gone, .bubble_gone5, .dealwithit").fadeOut(300);
		$(".bubble_gone2").delay(3000).fadeIn(300);
		$(".gone").fadeOut(1000);
		$(".gone2").delay(999).fadeIn(1000);
		$(".bubble_gone2").delay(3000).fadeOut(300);	
});
$('.forgotpass').click(function(){
		$(".bubble_gone").fadeOut(300);
		$(".bubble_gone3").delay(3000).fadeIn(300);
		$(".gone").fadeOut(1000);
		$(".gone3").delay(999).fadeIn(1000);
		$(".bubble_gone3").delay(3000).fadeOut(300);	
});
$('.ok').click(function(){
		$(".bubble_gone2").fadeOut(300);
		$(".bubble_gone1").delay(3000).fadeIn(300);
		$(".gone2").fadeOut(1000);
		$(".gone1").delay(999).fadeIn(1000);
});
$('.cancel').click(function(){
		$(".bubble_gone2").fadeOut(300);
		$(".bubble_gone").delay(3000).fadeIn(300);
		$(".gone2").fadeOut(1000);
		$(".gone").delay(999).fadeIn(1000);
});
$('.ok2').click(function(){
		$(".bubble_gone8").fadeOut(300);
		$(".bubble_gone1").delay(3000).fadeIn(300);
		$(".gone6").fadeOut(1000);
		$(".gone1").delay(999).fadeIn(1000);
});
$('.cancel2').click(function(){
		$(".bubble_gone8").fadeOut(300);
		$(".bubble_gone").delay(3000).fadeIn(300);
		$(".gone6").fadeOut(1000);
		$(".gone").delay(999).fadeIn(1000);
});
$('.ok1').click(function(){
		$(".bubble_gone3").fadeOut(300);
		$(".bubble_gone4").delay(3000).fadeIn(300);
		$(".gone3").fadeOut(1000);
		$(".gone").delay(999).fadeIn(1000);
		$(".bubble_gone4").delay(5000).fadeOut(300);
		$(".bubble_gone5").delay(7000).fadeIn(300);
		$(".dealwithit")
			.delay(7000)
			.queue(function (next) {
			$(this).css("display", "inline");
			$(".dealwithit").animate({ marginTop: '586px' }, 3000);
			next();
			});
		
});
$('.cancel1').click(function(){
		$(".bubble_gone3").fadeOut(300);
		$(".bubble_gone").delay(3000).fadeIn(300);
		$(".gone3").fadeOut(1000);
		$(".gone").delay(999).fadeIn(1000);
});

// Ping pong game
$('#demo').click(function(){
		$(".monkeyhead").animate({top: '525px'}, 2000);
		$(".monkeyhead").animate({top: '140px'}, 2000);
		$(".single_box")
			.delay(3800)
			.queue(function (next) {
			$(this).css("opacity", "0");
			next();
			document.getElementById("p").innerHTML = "Score: 1";
			});		
		$(".monkeyhead").animate({top: '600px'}, 2000);
		$(".user_block")
			.delay(4500)
			.queue(function (next) {
			$(this).css("margin-right", "18");
			next();
			});
		$(".cross").delay(5500).fadeIn(2000);
		
});

// Waterlog game
$('#demo1').click(function(){
		$(".waterlog1").animate({top: '625px'}, 10000);
		$(".waterlog2").animate({top: '525px'}, 9000);
		$(".waterlog3").animate({top: '525px'}, 9000);
		$(".waterlog4").animate({top: '325px'}, 6100);
		$(".waterlog5").animate({top: '105px'}, 3000);
		$(".yellowfish").delay(2000).animate({left: '900px'}, 1000);
		$(".yellowfish").delay(1500).animate({left: '770px'}, 1000);
		$(".yellowfish").delay(1500).animate({top: '-400px'}, 1000);	
});

// Dress game
  $( function() {
    $( ".draggable" ).draggable();
  } );

//Dress up game
$('#done_button').click(function(){
		$("#done_box").fadeIn(1000);

});

// Flappy monkey game
$('#demo2').click(function(){
		$(".spike, .spike2, .spike3, .box_spike, .box_2_spike, .box_spike1, .box_2_spike1").animate({left: '60px'}, 18000);
		$(".fugl").delay(2000).animate({top:'210px'}, 3000);
		$(".fugl").animate({top:'160px'}, 500);
		$(".fugl").animate({top:'170px'}, 500);
		$(".fugl").animate({top:'100px'}, 500);
		$(".fugl").animate({top:'110px'}, 500);
		$(".fugl").animate({top:'40px'}, 500);
		$(".fugl").animate({top:'280px'}, 2000);
		$(".fugl").animate({top:'200px'}, 500);
		$(".fugl").animate({top:'210px'}, 500);
		$(".fugl").animate({top:'140px'}, 500);
		$(".fugl").animate({top:'150px'}, 500);
		$(".fugl").animate({top:'80px'}, 500);
		$(".fugl").animate({top:'70px'}, 500);
		$(".fugl").animate({top:'20px'}, 500);
		$(".fugl").animate({top:'70px'}, 500);
		$(".fugl").animate({top:'20px'}, 500);
		$(".fugl").animate({top:'70px'}, 500);
		$(".fugl").animate({top:'20px'}, 500);
		$(".fugl").animate({top:'70px'}, 500);
		$(".fugl").animate({top:'20px'}, 500);
		//$(".game-container4").delay(18000).css("background-image", "url(assets/img/flappy_dead.png)");
	});
});