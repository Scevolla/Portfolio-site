$(document).ready(function() {
	
	function heightDetect() {
		$('.main_head').css('height', $(window).height());
	};

	heightDetect();

	$(window).resize(function() {
		heightDetect();
	});

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function() {
		var menu = $(".top_mnu");
		$(".sandwich").toggleClass("active");
		$(".header_name_container").css('opacity', '1');
		menu.fadeOut(600);
		menu.find('ul li').removeClass('fadeInUp animated');
	});

	$(".toggle_mnu").click(function() {
		var menu = $(".top_mnu");
		if (menu.is(':visible')) {
			$(".header_name_container").css('opacity', '1');
			menu.fadeOut(600);
			menu.find('ul li').removeClass('fadeInUp animated');
		}
		else {
			$(".header_name_container").css('opacity', '0.1');
			menu.fadeIn(600);
			menu.find('ul li').addClass('fadeInUp animated');
		}		
	});
});

$(window).load(function() {
	$('.loader_inner').fadeOut();
	$('.loader').delay(400).fadeOut('slow');
});