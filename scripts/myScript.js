
//When you click the button icon adds a .responsive class to .menuLeftside class
function activateMenu() {
	
		var x = document.getElementById("menuLeftSideWrap");
		if (x.className === "menuLeftSide") {
			x.className += " responsive";
		} 		
		
	}
	
	var menuviseStatus;
	
	$(document).ready(function(){	
	
		//If button icon is clicked animate the height of the menus
		 $("#btnMenu").click(function(){
			$("#menuLeftSideUl").animate({
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
				$("#menuLeftSideWrap").attr('class', 'menuLeftSide');
				
			//change  the menuLeftside display:none to display:inline
				$("#menuLeftSideUl").css('display', 'inline');
				
			}else {
			//else if view port is less than 600 .menuLeftside class display is equal to none
				$("#menuLeftSideUl").css('display', 'none');
			
			}

		});		
		
		
		//Determine if you click any part of website
		$('html').click(function() {
			
			var viewportWidth = $(window).width();


			// If view port width is less than or equal to 600 execute the codes below
			if (viewportWidth <= 600){

			//Hide the menu if you click any part of the website
			$("#menuLeftSideUl").animate({
				height: 'hide'

				
			});

			menuviseStatus = $('#menuLeftSideUl').is(':visible');

			if(menuviseStatus == true){

			//If button icon is clicked the button icon rotate in 90 degrees
			$('#btnMenu').toggleClass('rotated');
	

		}
		
		}
	
		});
		
		//Prevent any event from happening on inside the parent event handler
		$('#navigationWrap').click(function(event){
			event.stopPropagation();
		});
		
		
		
		
});
	
	


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
        $('.navigation').removeClass('navDown').addClass('navUp');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.navigation').removeClass('navUp').addClass('navDown');
        }
    }
    
    lastScrollTop = st;
}