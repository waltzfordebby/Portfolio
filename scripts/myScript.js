
//When you click the button icon adds a .responsive class to .menuLeftside class
function activateMenu() {
	
		var x = document.getElementById("menuLeftside");
		if (x.className === "menu_leftside") {
			x.className += " responsive";
		} 		
		
	}
	
	var menuviseStatus;
	
	$(document).ready(function(){	
	
		//If button icon is clicked animate the height of the menus
		 $("#btnClick").click(function(){
			$("#menuLeftside_ul").animate({
				height: 'toggle'
			},'slow');

		//If button icon is clicked the button icon rotate in 90 degrees
				$(this).toggleClass('rotated');
				
		

		});
	});
			
			
		
$(document).ready(function(){
	
		//Determine if the view port is being resize
		$(window).resize(function(){
		
		var viewportWidth = $(window).width();
		
		//If viewport width is greater than 600 		
			if(viewportWidth > 600){
				
			//remove the .responsive class in menuLeftside 	
				$("#menuLeftside").attr('class', 'menu_leftside');
				
			//change  the menuLeftside display:none to display:inline
				$("#menuLeftside_ul").css('display', 'inline');
				
			}else {
			//else if view port is less than 600 .menuLeftside class display is equal to none
				$("#menuLeftside_ul").css('display', 'none');
			
			}

		});		
		
		
		//Determine if you click any part of website
		$('html').click(function() {
			
			var viewportWidth = $(window).width();


			// If view port width is less than or equal to 600 execute the codes below
			if (viewportWidth <= 600){

			//Hide the menu if you click any part of the website
			$("#menuLeftside_ul").animate({
				height: 'hide'

				
			});

			menuviseStatus = $('#menuLeftside_ul').is(':visible');

			if(menuviseStatus == true){

			//If button icon is clicked the button icon rotate in 90 degrees
			$('#btnClick').toggleClass('rotated');
	

		}
		
		}
	
		});
		
		//Prevent any event from happening on inside the parent event handler
		$('#wrap_navigation').click(function(event){
			event.stopPropagation();
		});
		
		
		
		
});
	
	
	

/*	
	// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}
	*/
/*
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('navigation').outerHeight();

$(window).scroll(function(event){
	didScroll = true;
});



setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {

	var st = $(this).scrollTop();

	//Make sure they scroll more than delta
	if(Math.abs(lastScrollTop - st) <=delta)
		return;

		// If they scrolled down and are past the navbar, add class .nav-up.
		// This is necessary so you never see what is "behind" the navbar.
	if( st > lastScrollTop && st > navbarHeight){

			//Scroll down
		$('navigation').removeClass('nav-down').addClass('nav-up');
   } else {

   			//Scroll Up
   		if(st + $(window).height() < $(document).height()){
   				$('navigation').removeClass('nav-up').addClass('nav-down');
   		}
   }

   	lastScrollTop = st;
}*/

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.navigation').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.navigation').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.navigation').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}