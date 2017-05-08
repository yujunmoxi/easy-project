$(function(){
	(function(){
		$('.w_ul_left li').hover(function(){
			$('.w_ul_left li').css('background-color','#fff')
			$('.left_div_hide').css('display','block');
		},function(){
			$('.left_div_hide').css('display','none');
			$('.w_ul_left li').css('background-color','#e3e4e5');
		})
	})();
	
	(function(){
		$('.li_jd').hover(function(){
			$('.li_jd').css('background-color','#fff');
			$('.div_hide').css('display','block');
		},function(){
			$('.li_jd').css('background-color','#e3e4e5');
			$('.div_hide').css('display','none');
		})
	})();
	
	(function(){
		$('.li_server').hover(function(){
			$('.li_server').css('background-color','#fff');
			$('.server_hide').css('display','block');
		},function(){
			$('.li_server').css('background-color','#e3e4e5');
			$('.server_hide').css('display','none');
		})
	})();
	
	(function(){
		$('.li_nav').hover(function(){
			$('.li_nav').css('background-color','#fff');
			$('.nav_hide').css('display','block');
		},function(){
			$('.li_nav').css('background-color','#e3e4e5');
			$('.nav_hide').css('display','none');
		})
	})();
	
	(function(){
		$(window).scroll(function(){
			var scrolltop = $(this).scrollTop();
			if(scrolltop >= 720){
				$('#search_fix').slideDown('500');
			}else{
				$('#search_fix').slideUp('500');
			}
		})
	})();
	
	(function(){
		$('.ding_right em').click(function(){
			var scrollTop = $(window).scrollTop();
			$('html,body').animate({
				scrollTop:0
			},600)
		})	
	})();
	
	(function() {
		$(".download").on("click", function() {
			$(".ai img").css("display", "inline");
			$(".close").on("click", function() {
				$(".ai img").css("display", "none");
			})
		});
	})();
})
