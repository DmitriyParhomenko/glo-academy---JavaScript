$(document).ready(function() {
		// maska
  $("#phone").mask("+375(99) 999-99-99");

  // slaider
  (function ($) {
  var hwSlideSpeed = 0;
  var hwTimeOut = 0;
  var hwNeedLinks = true;

  $(document).ready(function(e) {
  	$('.slide').css(
  		{"position":'static', "top":'0', "left": '0'}).hide().eq(0).show();
  	var slideNum = 0;
  	var slideTime;
  	slideCount = $("#slider .slide").size();
  	var animSlide = function(arrow){
  		clearTimeout(slideTime);
  		$('.slide').eq(slideNum).fadeOut(hwSlideSpeed);
  		if(arrow == "next"){
  			if(slideNum == (slideCount-1)){slideNum=0;}
  			else{slideNum++}
  			}
  		else if(arrow == "prew")
  		{
  			if(slideNum == 0){slideNum=slideCount-1;}
  			else{slideNum-=1}
  		}
  		else{
  			slideNum = arrow;
  			}
  		$('.slide').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
  		$(".control-slide.active").removeClass("active");
  		$('.control-slide').eq(slideNum).addClass('active');
  		}
  if(hwNeedLinks){
  var $linkArrow = $('<a id="prewbutton" href="#">&lt;</a><a id="nextbutton" href="#">&gt;</a>')
  	.prependTo('#slider');		
  	$('#nextbutton').click(function(){
  		animSlide("next");
  		return false;
  		})
  	$('#prewbutton').click(function(){
  		animSlide("prew");
  		return false;
  		})
  }
  	var $adderSpan = '';
  	$('.slide').each(function(index) {
  			$adderSpan += '<span class = "control-slide">' + index + '</span>';
  		});
  	$('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('#slider-wrap');
  	$(".control-slide:first").addClass("active");
  	$('.control-slide').click(function(){
  	var goToNum = parseFloat($(this).text());
  	animSlide(goToNum);
  	});
  	var pause = true;
  	var rotator = function(){
  			if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
  			}
  	$('#slider-wrap').hover(	
  		function(){clearTimeout(slideTime); pause = true;},
  		function(){pause = true; rotator();
  		});
  	rotator();
  });
  })(jQuery);

  // tab
  var tabItems = $('.cd-tabs-navigation a'),
		tabContentWrapper = $('.cd-tabs-content');

	tabItems.on('click', function(event){
		event.preventDefault();
		var selectedItem = $(this);
		if( !selectedItem.hasClass('selected') ) {
			var selectedTab = selectedItem.data('content'),
				selectedContent = tabContentWrapper.find('li[data-content="'+selectedTab+'"]'),
				slectedContentHeight = selectedContent.innerHeight();
			
			tabItems.removeClass('selected');
			selectedItem.addClass('selected');
			selectedContent.addClass('selected').siblings('li').removeClass('selected');
			//animate tabContentWrapper height when content changes 
			tabContentWrapper.animate({
				'min-height': slectedContentHeight
			}, 500);
		}
	});

	//hide the .cd-tabs::after element when tabbed navigation has scrolled to the end (mobile version)
	checkScrolling($('.cd-tabs nav'));
	$(window).on('resize', function(){
		checkScrolling($('.cd-tabs nav'));
		tabContentWrapper.css('height', 'auto');
	});
	$('.cd-tabs nav').on('scroll', function(){ 
		checkScrolling($(this));
	});

	function checkScrolling(tabs){
		var totalTabWidth = parseInt(tabs.children('.cd-tabs-navigation').width()),
		 	tabsViewport = parseInt(tabs.width());
		if( tabs.scrollLeft() >= totalTabWidth - tabsViewport) {
			tabs.parent('.cd-tabs').addClass('is-ended');
		} else {
			tabs.parent('.cd-tabs').removeClass('is-ended');
		}
	}

	// mobile nav
	$('.btn-menu').on('click', function () {
  $(".header-top").addClass("header-top__active")
  $("#btn-menu").addClass("hidden")
  $(".btn-menu__close").removeClass("hidden")
});

$('.btn-menu__close').on('click', function () {
   $(".header-top").removeClass("header-top__active")
   $("#btn-menu").removeClass("hidden")
   $(".btn-menu__close").addClass("hidden")
});

/* select style */
	var params = {
		changedEl: "#select1",
		visRows: 6,
		scrollArrows: true
	}
	cuSel(params);

	var params = {
		changedEl: "#select2",
		visRows: 6,
		scrollArrows: true
	}
	cuSel(params);

	var params = {
		changedEl: "#select3",
		visRows: 6,
		scrollArrows: true
	}
	cuSel(params);

	var params = {
		changedEl: "#select4",
		visRows: 6,
		scrollArrows: true
	}
	cuSel(params);

		var params = {
		changedEl: "#select5",
		visRows: 6,
		scrollArrows: true
	}
	cuSel(params);

		var params = {
		changedEl: "#select6",
		visRows: 6,
		scrollArrows: true
	}
	cuSel(params);

		var params = {
		changedEl: "#select7",
		visRows: 6,
		scrollArrows: true
	}
	cuSel(params);

		var params = {
		changedEl: "#select8",
		visRows: 6,
		scrollArrows: true
	}
	cuSel(params);

		var params = {
		changedEl: "#select9",
		visRows: 6,
		scrollArrows: true
	}
	cuSel(params);


});