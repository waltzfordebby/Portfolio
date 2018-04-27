
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
	
	
	

	
	
	