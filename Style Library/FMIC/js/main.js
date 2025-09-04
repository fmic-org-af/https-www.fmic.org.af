$(function() {
	
	/* This is Jugar. Should be handled through code */
	var html = "<div class='ldd_submenu' style='display: none;'><div class='menu-wrap clearfix'><ul>";
	var $giving = $('.navitem6 ul');
	var $anc = $giving.find("li");
	
	if($anc !== undefined)
	{
		$anc.each(function(){
			html += "<li class='ldd_heading'>" + $(this).html() + "</li>"
		});
		$giving.replaceWith(html + "</ul></div></div>");
	}
	
	/* Jugar Ends*/

	
	/**
	 * the menu
	 */
	var $menu = $('#ldd_menu');
	
	/**
	 * for each list element,
	 * we show the submenu when hovering and
	 * expand the span element (title) to 510px
	 */
	$menu.children('li').each(function(){
		var $this = $(this);
		var $span = $this.children('span');
		$span.data('width',$span.width());
		
		$this.bind('mouseenter',function(){
			$menu.find('.ldd_submenu').stop(true,true).hide();
			$span.addClass('span_hover');
			$span.stop().animate({},300,function(){
				$this.find('.ldd_submenu').slideDown(300);
			});
		}).bind('mouseleave',function(){
			$this.find('.ldd_submenu').stop(true,true).hide();
			//$span.stop().animate({'width':$span.data('width')+'px'},300);
			$span.removeClass('span_hover');
			
			
		});
	});
});


jQuery(document).ready(function($) {
		
	
		 $( ".accordion" ).accordion({
            collapsible: true,
			icons: null,
			heightStyle: "content",
			header: "dt",
			active: false
        });

		//footer quick btn to slide up the navigation
		$("#btn_quicklink").toggle(function(){
			$("#btn_quicklink").removeClass('btn_quicklinkPlus').addClass('btn_quicklinkMinus');
				$('.quickSlider').slideDown("slow");

				 $("#s4-workspace").animate({ scrollTop: $("#s4-workspace").height() }, 600);
				//$("html, body").animate({ scrollTop: $("html, body").height() }, 600);

			},
		function(){
			$("#btn_quicklink").removeClass('btn_quicklinkMinus').addClass('btn_quicklinkPlus');
			$('.quickSlider').slideUp();
			return false;
		});


            $(window).load(function(){
				
				if ( $('.flexslider').length){
					  $('.flexslider').flexslider({
						animation: "fade",
						slideshowSpeed: 10000,
						animationSpeed: 1300,
						directionNav: false,
						start: function(slider){
						  $('body').removeClass('loading');
						}
					  });
			  	}
					  
					  
				if ( $('.flexslider2').length){
					  $('.flexslider2').flexslider({
						animation: "slide",
						slideshow: false,
						animationLoop: false,
						itemWidth: 220,
						itemMargin: 4,
						minItems: 4,
						maxItems: 4,
						start: function(slider){
						  $('body').removeClass('loading');
						}
					  });
			  	}
				
				if ( $('.flexslider3').length){
					  $('.flexslider3').flexslider({
						animation: "slide",
						slideshow: false,
						animationLoop: false,
						itemWidth: 120,
						itemMargin: 0,
						minItems: 3,
						maxItems: 3,
						start: function(slider){
						  $('body').removeClass('loading');
						}
					  });
			  	}
				
            });
			
			$("li:last-child, dt:last-child, dd:last-child").addClass("last-child");
			
			if ( $('.fancybox-media').length){
				$('.fancybox-media').fancybox({
					openEffect  : 'none',
					closeEffect : 'none',
					helpers : {
						media : {}
					}
				});
			}
			
		/*	if ( $('.fancybox').length){
				$('.fancybox').fancybox();
			}
			
			
			$("a span.search_link").parent().addClass("search_lnk");
			
            $(".search_lnk").click(function(e) {          
				e.preventDefault();
				
                $("fieldset#search_menu").toggle();
				$(".search_lnk").toggleClass("menu-open");
            });
			
			$("fieldset#search_menu").mouseup(function() {
				return false
			});
			$(document).mouseup(function(e) {
				if($(e.target).parent(".search_lnk").length==0) {
					$(".search_lnk").removeClass("menu-open");
					$("fieldset#search_menu").hide();
				}
			});		
			
  

		  
		
		  var heightArray = $(".equalheight .col #text_box").map( function(){
				 return  $(this).height();
			 }).get();
		  var maxHeight = Math.max.apply( Math, heightArray);
		  
		  $(".equalheight .col #text_box").height(maxHeight);
		  
 */ 		  
		

 	


	//$(".whie_bg").corner();
	DD_roundies.addRule('.lt-ie9 .whie_bg', '5px 5px 0 0');
	DD_roundies.addRule('.lt-ie9 .red_btn_med', '2px');		
	DD_roundies.addRule('.lt-ie9 .gray_btn_med', '2px');
	DD_roundies.addRule('.lt-ie9 .flex-control-paging li', '10px');

});