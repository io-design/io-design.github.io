$(document).ready(function(){
	/*  nav animate */
	$('#main-navbar-collapse ul.to-navigate li a, .navbar-brand').on('click', function () {
        var target = $(this).attr("href");
		if (target == "#home")
			smoothScroll($(target), 0);
		else
			smoothScroll($(target), -50);
    }); 


    /* btn collapse trigger */
	$( function() {
		$('#main-navbar-collapse ul.to-navigate li a').click( function() {
			if($(window).width() < 768) {
				$('button.navbar-toggle').trigger('click');
			}
		});
	});
  

   function smoothScroll(target, offset) {
		if (!offset) offset = 0;
		$('body,html').animate(
			{ 'scrollTop': target.offset().top + offset },
			600
		);
	}


	// Add slideDown animation to Bootstrap dropdown when expanding.
    $('.dropdown').on('show.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(250);
    });

  	// Add slideUp animation to Bootstrap dropdown when collapsing.
    $('.dropdown').on('hide.bs.dropdown', function() {
    	if($(window).width() < 768) {
    		$(this).find('.dropdown-menu').first().stop(true, true).slideUp(10);
    	} else {
    		$(this).find('.dropdown-menu').first().stop(true, true).slideUp(250);
    	}
    });



});


