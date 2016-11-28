function calculateYearsSince(birthMonth, birthDay, birthYear)
{
	todayDate = new Date();
	todayYear = todayDate.getFullYear();
	todayMonth = todayDate.getMonth();
	todayDay = todayDate.getDate();
	age = todayYear - birthYear; 

	if (todayMonth < birthMonth - 1)
	{
		age--;
	}

	if (birthMonth - 1 == todayMonth && todayDay < birthDay)
	{
		age--;
	}
	return age;
}

$(function(){

	$('#navbar-collapsed-dropdown .navigator-link a').click(function(e){
		e.preventDefault();
		var offset = parseInt($(this).data('offset'));
		if (isNaN(offset)){
			offset = 0;
		}
		$('html, body').animate({scrollTop: $($(this).attr('href')).offset().top + offset}, 1500);
	})

	$('#my_age').text(calculateYearsSince(8,25,1988));
	$('#my_experience').text(calculateYearsSince(4,1,2013));

	var controller = new ScrollMagic.Controller();

	//------------------------------ PRINCIPAL SCENE - Start ---------------------------------------
	var principalScene = new ScrollMagic.Scene({
	    duration: 2500,
	    offset: 0
	})
	.addTo(controller); 
	principalScene.setPin("#intro");
	//------------------------------ PRINCIPAL SCENE -  End  ---------------------------------------
	//-------------------------- PRINCIPAL SCENE TRANSITION1 - Start --------------------------------
	var principalTransitionScene1 = new ScrollMagic.Scene({
	    duration: 1500,
	    offset: 0
	});
	principalTransitionScene1.setTween("#intro h1 .capital-letter", 0.5, {"color": "#000000"});
	principalTransitionScene1.addTo(controller); 
	//-------------------------- PRINCIPAL SCENE TRANSITION1 -  End  --------------------------------
	//-------------------------- PRINCIPAL SCENE TRANSITION2 - Start --------------------------------
	var principalTransitionScene2 = new ScrollMagic.Scene({
	    duration: 1500,
	    offset: 0
	});
	principalTransitionScene2.setTween("#intro p .capital-letter, #intro p .emoji", 0.5, {"color": "#000000"});
	principalTransitionScene2.addTo(controller); 
	//-------------------------- PRINCIPAL SCENE TRANSITION2 -  End  --------------------------------
	//-------------------------- PRINCIPAL SCENE TRANSITION3 - Start --------------------------------
	var principalTransitionScene3 = new ScrollMagic.Scene({
	    duration: 500,
	    offset: 1500
	});
	principalTransitionScene3.setTween("#intro p", 0.5, {"color": "rgba(0,0,0,0)"});
	principalTransitionScene3.on("enter", function (e) {
		$('.navbar-default').removeClass("dark");
	}); 
	principalTransitionScene3.addTo(controller); 
	//-------------------------- PRINCIPAL SCENE TRANSITION3 -  End  --------------------------------
	//-------------------------- PRINCIPAL SCENE TRANSITION4 - Start --------------------------------
	var principalTransitionScene4 = new ScrollMagic.Scene({
	    duration: 1000,
	    offset: 1500
	});
	principalTransitionScene4.setTween("body", 0.5, {"background-color": "rgba(255,255,255,1)"});
	principalTransitionScene4.on("enter", function (e) {
		$('.navbar-default').addClass("dark");
	}); 
	principalTransitionScene4.addTo(controller); 
	//-------------------------- PRINCIPAL SCENE TRANSITION4 -  End  --------------------------------
	//-------------------------- PRINCIPAL SCENE TRANSITION5 - Start --------------------------------
	var principalTransitionScene5 = new ScrollMagic.Scene({
	    duration: 500,
	    offset: 2000
	});
	principalTransitionScene5.setTween("#intro h1,#intro h2", 0.5, {"color": "rgba(0,0,0,0)"});
	principalTransitionScene5.addTo(controller); 
	//-------------------------- PRINCIPAL SCENE TRANSITION5 -  End  --------------------------------
	//-------------------------- PRINCIPAL SCENE TRANSITION6 - Start --------------------------------
	var principalTransitionScene6 = new ScrollMagic.Scene({
	    duration: 500,
	    offset: 2000
	});6
	principalTransitionScene6.setTween("#intro img", 2, {"opacity": "0"});
	principalTransitionScene6.addTo(controller)
	principalTransitionScene6.on("enter", function (e) {
		$('#navbar-collapsed-dropdown ul li.active').removeClass("active");
		$('#navbar-collapsed-dropdown ul li a[href="#intro-container"]').closest('li').addClass("active");
	}); 
	//-------------------------- PRINCIPAL SCENE TRANSITION6 -  End  --------------------------------


	//------------------------------------ BIO SCENE - Start ----------------------------------------
	var bioScene = new ScrollMagic.Scene({
	    duration: $("#bio-container").height(),
	    offset: 1,
	    triggerElement: "#bio-container",
	});
	bioScene.addTo(controller);
	bioScene.on("enter", function (e) {
		$('#navbar-collapsed-dropdown ul li.active').removeClass("active");
		$('#navbar-collapsed-dropdown ul li a[href="#bio-container"]').closest('li').addClass("active");
		$('.navbar-default').addClass("dark");
	}); 
	//------------------------------------ BIO SCENE -  End  ----------------------------------------



	//---------------------------------- EDUCATION SCENE - Start ------------------------------------
	var educationScene = new ScrollMagic.Scene({
	    duration: $("#education-container").height(),
	    triggerElement: "#education-container",
	    triggerHook: 1
	});
	educationScene.addTo(controller); 
	educationScene.on("enter", function (e) {
		$('#navbar-collapsed-dropdown ul li.active').removeClass("active");
		$('#navbar-collapsed-dropdown ul li a[href="#education-container"]').closest('li').addClass("active");
	});
	//---------------------------------- EDUCATION SCENE -  End  ------------------------------------


	//--------------------------------- EXPERIENCE SCENE - Start ------------------------------------
	var experienceScene = new ScrollMagic.Scene({
	    duration: $("#experience-container").height(),
	    triggerElement: "#experience-container",
	    triggerHook: 1
	});
	experienceScene.addTo(controller); 
	experienceScene.on("enter", function (e) {
		$('#navbar-collapsed-dropdown ul li.active').removeClass("active");
		$('#navbar-collapsed-dropdown ul li a[href="#experience-container"]').closest('li').addClass("active");
	});
	//---------------------------------- EDUCATION SCENE -  End  ------------------------------------

	//---------------------------------- HOBBIES SCENE - Start --------------------------------------
	var hobbiesScene = new ScrollMagic.Scene({
	    duration: $("#hobbies-container").height(),
	    triggerElement: "#hobbies-container",
	    triggerHook: 1
	});
	hobbiesScene.addTo(controller); 
	hobbiesScene.on("enter", function (e) {
		$('#navbar-collapsed-dropdown ul li.active').removeClass("active");
		$('#navbar-collapsed-dropdown ul li a[href="#hobbies-container"]').closest('li').addClass("active");
	});
	//----------------------------------- HOBBIES SCENE -  End  --------------------------------------
	
});