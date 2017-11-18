
var random_result;
var lost = 0;
var win = 0;
var previous = 0;


var resetAndStart = function () {

	$(".crystals").empty();

	var images = [
		'https://scstylecaster.files.wordpress.com/2016/05/crystal-healing-lepidolite_02.jpg?w=712&h=712',
		'https://i5.walmartimages.com/asr/08d1a8bf-7c92-496a-9f1f-48cef1c48661_1.dc9905afd34d5954e33b79f3c1911df5.jpeg',
		'https://scstylecaster.files.wordpress.com/2016/05/crystal-healing-amethyst.jpg?w=712&h=712',
		'http://mediacdn.shopatron.com/media/mfg/174/product_image/thm/t700_76cd34ed29fd11cf749b40e79d36d59d.jpg?1400799839']

	random_result = Math.floor(Math.random() * 101 ) + 19;

	console.log(random_result)

	$("#result").html('Target Amount: ' + random_result);

	for(var i = 0; i < 4; i++) {

		var random = Math.floor(Math.random() * 11) + 1;
		//console.log(random);


		var crystal = $("<div>");
			crystal.attr({
				"class": 'crystal', 
				"data-random": random
				});

			crystal.css({
				"background-image":"url('" + images[i] + "')",
				"background-size": "cover"
			})
		$(".crystals").append(crystal);

	}

	$("#previous").html("Total Guessed: " + previous);

	$("#win").html("Wins: " + win);

	$("#lost").html("Losses: " + lost);
}



resetAndStart();


$(document).on('click', ".crystal", function() {
	// console.log($(this).attr('data-random'));


	var num = parseInt($(this).attr('data-random'));

	previous += num;

	$("#previous").html("Total guessed: " + previous);

	console.log(previous);

	if(previous > random_result){
		
		lost++;

		previous = 0;
		
		$("#lost").html("Losses: " + lost);

		resetAndStart();

	}
	else if(previous === random_result){
		
		win++;

		previous = 0;

		$("#win").html("Wins: " + win);

		resetAndStart();
	}
});

