$(document).ready(function(){

$('.toggle-button').click(function(){
	$('.tog-but').trigger('click');
})


	
	  
	$('.shop-but').waypoint(function(direction) {
	if(direction == "down"){
	$('.feature-circle1').css('opacity','0').delay(1000).animate({opacity:1},500);
	$('.feature-circle5').css('opacity','0').delay(1000).animate({opacity:1},500).fadeIn(function(){
		$('.feature-circle2').css('opacity','0').delay(10).animate({opacity:1},500);
		$('.feature-circle6').css('opacity','0').delay(10).animate({opacity:1},500).fadeIn(function(){
			$('.feature-circle3').css('opacity','0').delay(10).animate({opacity:1},500);
			$('.feature-circle7').css('opacity','0').delay(10).animate({opacity:1},500).fadeIn(function(){
				$('.feature-circle4').css('opacity','0').delay(10).animate({opacity:1},500);
				$('.feature-circle8').css('opacity','0').delay(10).animate({opacity:1},500).fadeIn(function(){
					$(".feature-content1").css('display','block');
					$(".feature-circle1").css( {'background-color': '#78A300','background-position':'0 0'});
					});
				});
			});
		});
		}
	
	},
	{
		triggerOnce: true
	});
	

	$(".feature-circle1").hover(function(){
	$(".content").css('display','none');
    $(".feature-content1").css('display','block');
	$(".featurel").css('background-color','#eee');
	$(".featurer").css('background-color','#eee');
	$(".feature").css( {'background-color': '#eeeeee','background-position':'0 80'});
	$(".feature-circle1").css( {'background-color': '#78A300','background-position':'0 0'});
    },function(){
		$(".content").css('display','none');
    	$(".feature-content1").css('display','block');
		$(".featurel").css('background-color','#eee');
		$(".featurer").css('background-color','#eee');
		$(".feature").css( {'background-color': '#eeeeee','background-position':'0 80'});
		$(".feature-circle1").css( {'background-color': '#78A300','background-position':'0 0'});
	});
	
	$(".feature-circle2").hover(function(){
    $(".content").css('display','none');
	$(".featurel").css('background-color','#eee');
	$(".featurer").css('background-color','#eee');
    $(".feature-content2").css('display','block');
	$(".feature").css( {'background-color': '#eeeeee','background-position':'0 80'});
	$(".feature-circle2").css( {'background-color': '#78A300','background-position':'0 0'});
    },function(){
		$(".content").css('display','none');
		$(".featurel").css('background-color','#eee');
		$(".featurer").css('background-color','#eee');
		$(".feature-content2").css('display','block');
		$(".feature").css( {'background-color': '#eeeeee','background-position':'0 80'});
		$(".feature-circle2").css( {'background-color': '#78A300','background-position':'0 0'});
	});
	
	$(".feature-circle3").hover(function(){
	$(".content").css('display','none');
	$(".featurel").css('background-color','#eee');
	$(".featurer").css('background-color','#eee');
    $(".feature-content3").css('display','block');
	$(".feature").css( {'background-color': '#eeeeee','background-position':'0 80'});
	$(".feature-circle3").css( {'background-color': '#78A300','background-position':'0 0'});
    },function(){
		$(".content").css('display','none');
		$(".featurel").css('background-color','#eee');
		$(".featurer").css('background-color','#eee');
    	$(".feature-content3").css('display','block');
		$(".feature").css( {'background-color': '#eeeeee','background-position':'0 80'});
		$(".feature-circle3").css( {'background-color': '#78A300','background-position':'0 0'});
	});
	
	$(".feature-circle4").hover(function(){
    $(".content").css('display','none');
	$(".featurel").css('background-color','#eee');
	$(".featurer").css('background-color','#eee');
    $(".feature-content4").css('display','block');
	$(".feature").css( {'background-color': '#eeeeee','background-position':'0 80'});
	$(".feature-circle4").css( {'background-color': '#78A300','background-position':'0 0'});
    },function(){
		$(".content").css('display','none');
		$(".featurel").css('background-color','#eee');
		$(".featurer").css('background-color','#eee');
		$(".feature-content4").css('display','block');
		$(".feature").css( {'background-color': '#eeeeee','background-position':'0 80'});
		$(".feature-circle4").css( {'background-color': '#78A300','background-position':'0 0'});
	});
	
	$(".feature-circle5").hover(function(){
	$(".content").css('display','none');
	$(".featurel").css('background-color','#eee');
	$(".featurer").css('background-color','#eee');
    $(".feature-content5").css('display','block');
	$(".feature").css( {'background-color': '#eeeeee','background-position':'0 80'});
	$(".feature-circle5").css( {'background-color': '#78A300','background-position':'0 0'});
    },function(){
		$(".content").css('display','none');
		$(".featurel").css('background-color','#eee');
		$(".featurer").css('background-color','#eee');
    	$(".feature-content5").css('display','block');
		$(".feature").css( {'background-color': '#eeeeee','background-position':'0 80'});
		$(".feature-circle5").css( {'background-color': '#78A300','background-position':'0 0'});
	});
	
	$(".feature-circle6").hover(function(){
    $(".content").css('display','none');
	$(".featurel").css('background-color','#eee');
	$(".featurer").css('background-color','#eee');
    $(".feature-content6").css('display','block');
	$(".feature").css( {'background-color': '#eeeeee','background-position':'0 80'});
	$(".feature-circle6").css( {'background-color': '#78A300','background-position':'0 0'});
    },function(){
		$(".content").css('display','none');
		$(".featurel").css('background-color','#eee');
		$(".featurer").css('background-color','#eee');
		$(".feature-content6").css('display','block');
		$(".feature").css( {'background-color': '#eeeeee','background-position':'0 80'});
		$(".feature-circle6").css( {'background-color': '#78A300','background-position':'0 0'});
	});
	
	$(".feature-circle7").hover(function(){
	$(".content").css('display','none');
	$(".featurel").css('background-color','#eee');
	$(".featurer").css('background-color','#eee');
    $(".feature-content7").css('display','block');
	$(".feature").css( {'background-color': '#eeeeee','background-position':'0 80'});
	$(".feature-circle7").css( {'background-color': '#78A300','background-position':'0 0'});
    },function(){
		$(".content").css('display','none');
		$(".featurel").css('background-color','#eee');
		$(".featurer").css('background-color','#eee');
    	$(".feature-content7").css('display','block');
		$(".feature").css( {'background-color': '#eeeeee','background-position':'0 80'});
		$(".feature-circle7").css( {'background-color': '#78A300','background-position':'0 0'});
	});
	
	$(".feature-circle8").hover(function(){
    $(".content").css('display','none');
	$(".featurel").css('background-color','#eee');
	$(".featurer").css('background-color','#eee');
    $(".feature-content8").css('display','block');
	$(".feature").css( {'background-color': '#eeeeee','background-position':'0 80'});
	$(".feature-circle8").css( {'background-color': '#78A300','background-position':'0 0'});
    },function(){
		$(".content").css('display','none');
		$(".featurel").css('background-color','#eee');
		$(".featurer").css('background-color','#eee');
		$(".feature-content8").css('display','block');
		$(".feature").css( {'background-color': '#eeeeee','background-position':'0 80'});
		$(".feature-circle8").css( {'background-color': '#78A300','background-position':'0 0'});
	});
	
		
  


});

(function($) {

	var $descriptions = $('#carousel-descriptions').children('li'),
		$controls = $('#carousel-controls').find('span'),
		$carousel = $('#carousel')
			.roundabout({childSelector:"img", minOpacity:1, autoplay:false, autoplayDuration:5000, autoplayPauseOnHover:true })
			.on('focus', 'img', function() {
				var slideNum = $carousel.roundabout("getChildInFocus");
				
				$descriptions.add($controls).removeClass('current');
				$($descriptions.get(slideNum)).addClass('current');
				$($controls.get(slideNum)).addClass('current');
			});

	$controls.on('click dblclick', function() {
		var slideNum = -1,
			i = 0, len = $controls.length;

		for (; i<len; i++) {
			if (this === $controls.get(i)) {
				slideNum = i;
				break;
			}
		}
		
		if (slideNum >= 0) {
			$controls.removeClass('current');
			$(this).addClass('current');
			$carousel.roundabout('animateToChild', slideNum);
		}
	});

	$('.section-two').waypoint(function(direction) {
		$('#slides').slidesjs({
        width: 300,
        height: 533,
        navigation: true
      });
	});
	
	}(jQuery));