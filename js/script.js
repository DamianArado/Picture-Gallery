$(document).ready(function(){
	$('nav a').on('click', function(){
		// Current class assigniment
		$('nav li.current').removeClass('current');
		$(this).parent().addClass('current');
		
		// Set heading text
		$('h1#heading').text($(this).text());
		
		// Get & filter link text
		var category = $(this).text().toLowerCase().replace(' ','-');
		
		// Remove hidden class if 'all-projects' is selected
		if(category == 'all-projects'){
			$('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
		} else {
			$('ul#gallery li').each(function(){
				if(!$(this).hasClass(category)){
					$(this).hide().addClass('hidden');
				} else {
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}
		// Stop link behaviour
		return false;
	});
	
	// Mouseenter Overlay Effect
	$('ul#gallery li').on('mouseenter',function(){
		// Get data attribute values
		var title = $(this).children().data('title');
		var desc = $(this).children().data('desc');

		if(desc == null){
			desc = 'Click To Enlarge';
		}

		if(title == null){
			title = '';
		}

		// Create an overlay div
		$(this).append('<div class="overlay"></div>');

		// Get the overlay div
		var overlay = $(this).children('.overlay');

		// Add html to overlay
		overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');

		// Fade in overlay
		overlay.fadeIn(800);
	});

	// Mouseleave Overlay Effect
	$('ul#gallery li').on('mouseleave',function(){
		// Create an overlay div
		$(this).append('<div class="overlay"></div>');

		// Get the overlay div
		var overlay = $(this).children('.overlay');

		// Fade out overlay
		overlay.fadeOut(500);
	});
});