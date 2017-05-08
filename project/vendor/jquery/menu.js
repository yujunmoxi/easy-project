(function() {
	//box nav 实现
	$("#login").click(function() {
		location.href = "login.html";
	});
	$("#register").click(function() {
		location.href = "register.html";
	});
	$(".shop").click(function() {
		location.href = "shopping.html";
	});
	$("#mu2").mouseover(function() {
		$(".ol").css("display", "block").css("border-color", "pink");
	});
	$("#mu2").mouseout(function() {
		$(".ol").css("display", "none").css("border-color", "transparent");
	});
	$("#mu3").mouseover(function() {
		$(".ol1").css("display", "block");
	});
	$("#mu3").mouseout(function() {
		$(".ol1").css("display", "none");
	});
	$("#mu4").mouseover(function() {
		$(".ol2").css("display", "block");
	});
	$("#mu4").mouseout(function() {
		$(".ol2").css("display", "none");
	});
	$("#mu5").mouseover(function() {
		$(".ol3").css("display", "block");
	});
	$("#mu5").mouseout(function() {
		$(".ol3").css("display", "none");
	});
})();


(function() {
	//轮播侧边
	$(".zhu").on("mouseenter", "li", function() {
		$("#fuMenu").show();
		$(this).addClass("prop");
		$(".buy").css("display", "none");
		$(".buy").eq($(this).index()).css("display", "block");
	});
	$(".zhu").on("mouseleave", "li", function() {
		$("#fuMenu").hide();
		$(this).removeClass("prop");
		$(".buy").eq($(this).index()).css("display", "none");
	});
	$("#fuMenu").on("mouseenter", ".level", function() {
		$("#fuMenu").show();
		$('.buy').eq($(this).index()).show();
		$(".zhu li").eq($(this).index()).addClass("prop");
	});
	$("#fuMenu").on("mouseleave", ".level", function() {
		$("#fuMenu").hide();
		$('.buy').eq($(this).index()).hide();
		$(".zhu li").eq($(this).index()).removeClass("prop");
	});
})();


//szj展现取消
(function() {
	$(".download").on("click", function() {
		$(".ai img").css("display", "inline");
		$(".close").on("click", function() {
			$(".ai img").css("display", "none");
		})
	});
})();

//遮罩
(function(){
	$("#top").find(".top2 a").on("click",function(){
		$(".appwrap").css("display","block");
		$(".appwrap .closeicon").on("click",function(){
			$(".appwrap").css("display","none");
		});
	});
})();

//tap切换
(function() {
	$.ajax({
		type: "get",
		url: "vendor/together/tap.php",
		async: true
	}).done(function(data) {
		var md = JSON.parse(data);
		//var md=data;
		var str = '';
		for (var i = 0; i < 8; i++) {
			str += '<li class="slide"><a href="###"><img src="' + md[i].img + '" /><div class="like_name">' + md[i].name + '</div><div class="prices"><span>' + md[i].price + '</span><del class="originPrice">'+md[i].oldprice+'</del></div></a></li>';
		}
		$('.swiper_wrapper').html(str);
	})
})();

//
(function(){
	var num=0;
	$(".left").on("click",function(){
		num--;
		if(num>=-4){
			//$(".swiper_wrapper").css({left:num*291});
			$(".swiper_wrapper").animate({left:num*291},400);
		}else{
			num=1;
			$(".swiper_wrapper").animate({left:(num-1)*291},400);
		}	
	});
	
	$(".right").on("click",function(){
		if(num<4){
			num++;
			$(".swiper_wrapper").animate({left:num*-291},400);
		}else{
			num=-1;
			$(".swiper_wrapper").animate({left:(num+1)*-291},400);
		}	
	});
	
	/*$(".slide").on("mouseover",function(){
		$(this).find("img").css({border:1px solid gray})
	})*/
	
	var timer = setInterval(function() {
            $('.right').click();
        }, 3000);

        $("#mywrapper").hover(function() {
            clearInterval(timer);
        }, function() {
            timer = setInterval(function() {
                $('.right').click();
            }, 3000);
        })
	
	
})();

(function(){
	//出现二维码
	$("#activity li").on("mouseover",function(){
		$(".wa").eq($(this).index()).css("display","block");
		$(".mamimg").eq($(this).index()).css('zIndex','3');
	})
	$("#activity li").on("mouseout",function(){
		$(".wa").eq($(this).index()).css("display","none");
		$(".mamimg").eq($(this).index()).css('zIndex','-1');
	})
})()

