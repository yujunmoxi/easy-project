//获取数据
$.ajax({
	url:'json/cart.json',
	dataType:'json',
	async:false,
	success:function(data){
		for(var i=0;i<data.piclist.length;i++){
			$('.goodsinfo').eq(i).find('.loadimg').attr('src',data.piclist[i].img);
			$('.goodsinfo').eq(i).find('.loadimg').attr('sid',data.piclist[i].sid);
			$('.goodsinfo').eq(i).find('.loadt').html(data.piclist[i].title);
			$('.goodsinfo').eq(i).find('.loadpcp').html(data.piclist[i].price);
		}
		
	}
});
//购物车
var sidarr=[];//编号
var numarr=[];//数量

function cookieToArray(){//取出cookie转换成数组
	if(getCookie('cartsid')){
		sidarr=getCookie('cartsid').split(',');
	}else{
		sidarr=[];
	}
	
	if(getCookie('cartnum')){
		numarr=getCookie('cartnum').split(',');
	}else{
		numarr=[];
	}
}

$('.love').last().on('click',function(){
	var $sid='5';
	var $s=$(".inputTag").val();
	cookieToArray();
	if($.inArray($sid,sidarr)!=-1){
		//alert(numarr[sidarr.indexOf($sid)]);
		numarr[sidarr.indexOf($sid)]=parseInt(numarr[sidarr.indexOf($sid)])+parseInt($s);
		addCookie('cartnum',numarr.toString(),7);
	}else{//不存在，创建
		sidarr.push($sid);
		addCookie('cartsid',sidarr.toString(),7);
		numarr.push(parseInt($s));
		addCookie('cartnum',numarr.toString(),7);
	}
});

//改变数量++
$('.quantity-add').on('click',function(){
	var $count=$(this).parents('.goods-item').find('.quantity-form input').val();
	$count++;
	if($count>=99){
		$count=99;
	}
	$(this).parents('.goods-item').find('.quantity-form input').val($count);
	$(this).parents('.goods-item').find('.b-sum').find('strong').html(singlegoodsprice($(this)));
	totalprice();
	setcookie($(this));
	
});


//改变数量--
$('.quantity-down').on('click',function(){
	var $count=$(this).parents('.goods-item').find('.quantity-form input').val();
	$count--;
	if($count<=1){
		$count=1;
	}
	$(this).parents('.goods-item').find('.quantity-form input').val($count);
	$(this).parents('.goods-item').find('.b-sum').find('strong').html(singlegoodsprice($(this)));
	totalprice();
	setcookie($(this));
});

$('.quantity-form input').on('input',function(){
	var $reg=/^\d+$/g;//只能输入数字
	var $value=$(this).val();
	if($reg.test($value)){
		if($value>=99){
			$(this).val(99);
		}else if($value<=1){
			$(this).val(1);
		}else{
			$(this).val($value);
		}
	}else{
		$(this).val(1);
	}
	$(this).parents('.goods-item').find('.b-sum').find('strong').html(singlegoodsprice($(this)));
	totalprice();
	setcookie($(this));
});

(function() {
	$(".download").on("click", function() {
		$(".ai img").css("display", "inline");
		$(".close").on("click", function() {
			$(".ai img").css("display", "none");
		})
	});
})()


