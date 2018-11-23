$(document).ready(function(){
	$('a[href^="#"]').bind('click.smoothscroll',function (e) {
		e.preventDefault();
		var target = this.hash,
		$target = $(target);
		$('html, body').stop().animate({
		'scrollTop': $target.offset().top
		}, 500, 'swing', function () {
			window.location.hash = target;
		});
	});
});


$('.burger').on('click', function(e){
	e.preventDefault;
	$(this).toggleClass('burger_btn');
	$('.hid').toggleClass('hid_btn');
	});

	$(document).ready(function(){
	$('.collection_slider').slick({
		autoplay: true,
		autoplaySpeed: 10000,
		speed: 1000,
		Arrows: true,
		prevArrow: '<div class="collection_prev"><div></div></div>',
		nextArrow: '<div class="collection_next"><div></div></div>',
	});
});
$(document).ready(function(){
	$('.reviews_slider').slick({
		autoplay: true,
		autoplaySpeed: 10000,
		speed: 1000,
		Arrows: true,
		prevArrow: '<div class="collection_prev"><div></div></div>',
		nextArrow: '<div class="collection_next"><div></div></div>',
		adaptiveWidth: true,
	});
});
$(document).ready(function(){
$('.notebook').on('click', function(e){
	e.preventDefault;
	$(this).toggleClass('notebook_btn');
	$('.radio').toggleClass('radio_btn');
	});
});


$('.st').on('click', function(e){
	e.preventDefault;
	$(".vid").html("Standart");
	});
$('.pro').on('click', function(e){
		e.preventDefault;
		$(".vid").html("Promo+");
		});
$('.pre').on('click', function(e){
			e.preventDefault;
			$(".vid").html("Premium");
			});

$(document).ready(function(){
$('.rad').on('click', function(e){
	e.preventDefault;
	$('.notebook').toggleClass('notebook_btn');
	$('.radio').toggleClass('radio_btn');
	});
});