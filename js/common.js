$(document).ready(function() {
	
	var button_menu = $(".button_menu"),
		sandwich = button_menu.find(".sandwich"),
		main_menu = $(".main_menu"),
		main_menu_links = main_menu.find("ul a"),
		header_title_container = $(".header_title_container"),		
		portfolio_control_items = $(".portfolio_control_item");

	$('.header').css('background', 'none');

	button_menu.on('click', function() {
		if (main_menu.is(':visible')) {
			hideMainMenu();
		}
		else {
			showMainMenu();
		}	
	});

	main_menu_links.on('click', function() {
		hideMainMenu();
	});

	main_menu_links.mPageScroll2id();

	header_title_container.find('.header_title_name').animated("fadeInDown", "fadeOutUp");
	header_title_container.find('.header_title_descr').animated("fadeInUp", "fadeOutDown");
	
	$(".section_header").animated("fadeInUp", "fadeOutDown");

	$(".section_about_center_col").animated("flipInY", "fadeOutDown");
	$(".section_about_left_col").animated("fadeInLeft", "fadeOutDown");
	$(".section_about_right_col").animated("fadeInRight", "fadeOutDown");

	$(".resume_content_col_left .resume_content_item").animated("fadeInLeft", "fadeOutDown");
	$(".resume_content_col_right .resume_content_item").animated("fadeInRight", "fadeOutDown");

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});

	$("#portfolio_grid").mixItUp();
	portfolio_control_items.click(function() {
		portfolio_control_items.removeClass("active");
		$(this).addClass("active");
	});

	$("input, select, textarea").jqBootstrapValidation();	

	function showMainMenu() {
		sandwich.toggleClass("active");
		header_title_container.css('opacity', '0.1');
		main_menu.fadeIn(600);
		main_menu_links.addClass('fadeInUp animated');
	}

	function hideMainMenu() {
		sandwich.toggleClass("active");
		header_title_container.css('opacity', '1');
		main_menu.fadeOut(600);
		main_menu_links.removeClass('fadeInUp animated');
	}
});

$(window).load(function() {
	$('.loader_inner').fadeOut();
	$('.loader').delay(400).fadeOut('slow');
});
