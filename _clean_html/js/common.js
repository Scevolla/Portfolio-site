$(document).ready(function() {
	
	$("#portfolio_grid").mixItUp();

	$(".portfolio_control_item").click(function() {
		$(".portfolio_control_item").removeClass("active");
		$(this).addClass("active");
	});

	function heightDetect() {
		$('.main_head').css('height', $(window).height());
	};

	heightDetect();

	$(window).resize(function() {
		heightDetect();
	});

	$(".popup").magnificPopup({type:"image"});

	$(".section_header").animated("fadeInUp", "fadeOutDown");

	$(".section_about_center_col").animated("flipInY", "fadeOutDown");
	$(".section_about_left_col").animated("fadeInLeft", "fadeOutDown");
	$(".section_about_right_col").animated("fadeInRight", "fadeOutDown");

	$(".resume_content_col_left .resume_content_item").animated("fadeInLeft", "fadeOutDown");
	$(".resume_content_col_right .resume_content_item").animated("fadeInRight", "fadeOutDown");

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

	$("input, select, textarea").jqBootstrapValidation();

	$(".top_mnu ul a").mPageScroll2id();
});

$(window).load(function() {
	$('.loader_inner').fadeOut();
	$('.loader').delay(400).fadeOut('slow');

	$(".header_name_container h1").animated("fadeInDown", "fadeOutUp");
	$(".header_name_container p").animated("fadeInUp", "fadeOutDown");
});