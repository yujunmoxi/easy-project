(function(){
		$.ajax({
	url:'json/cart.json',
	dataType:'json',
	async:false,
	success:function(data){
		//获取数据
		for(var i=0;i<d.length;i++){
			$('.goods_list ul li').eq(i).find('.item_img img').attr('src',d[i].img);
			$('.goods_list ul li').eq(i).find('.item_img img').attr('sid',d[i].sid);
			$('.goods_list ul li').eq(i).find('.item_p a').html(d[i].title);
			$('.goods_list ul li').eq(i).find('.item_price span').html(d[i].price);
		}
		
		//存储cookie的数据
		if(getCookie('cartsid')){
			var s=getCookie('cartsid').split(',');
			var n=getCookie('cartnum').split(',');
			for(var i=0;i<s.length;i++){
				createcart(s[i],n[i]);
			}
		}
	}
});
		
		
		
		var sidarr=[];
		var arrnum=[];
		function cookietoArr(){
			if(getCookie('cartsid')){
				sidarr = getCookie('cartsid').split(',');
			}else{
				sidarr=[];
			}
			if(getCookie('cartnum')){
				arrnum=getCookie('cartnum').split(',');
			}else{
				arrnum=[];
			}
		}
		
		$('.item_btn a').on('click',function(){
			var $id = $(this).parents('.item_img').find('img').attr('sid');
			cookietoArr();
			if($.inArray($id,sidarr)!=-1){
				$('.cart_tbody:visible').each(function(){
					if($id==$(this).find('.p_img').find('img').attr('sid')){
						var $num = $(this).find('.tity_form').find('input').val();
						$num++;
						$(this).find('.tity_form').find('input').val($num);
						var $price_one = parseFloat($(this).find('.p_price').html());
						$(this).find('.p_sum').find('strong').html(($price_one*$num).toFixed(2));
						arrnum[sidarr.indexOf($id)]=$num;
						addCookie('cartnum',arrnum.toString(),7);
					}
				})
			}else{
				sidarr.push($id);
				addCookie('cartsid',sidarr.toString(),7);
				arrnum.push(1);
				addCookie('cartnum',arrnum.toString(),7);
				Create($id,1);
			}
		})
		
		function Create(sid,num){
			$.ajax({
				type:"get",
				url:"js/lib/cart.php",
				async:true
			}).done(function(data){
				var d = JSON.parse(data);
				for(var i=0;i<d.length;i++){
					if(sid==d[i].sid){
						var $clone = $('.cart_tbody:hidden').clone(true);
						$clone.find('.p_img').find('img').attr('src',d[i].img);
						$clone.find('.p_img').find('img').attr('sid',d[i].sid);
						$clone.find('.p_name').find('a').html(d[i].title);
						$clone.find('.p_price').html(d[i].price);
						$clone.find('.tity_form').find('input').val(num);
						var $Cprice = parseFloat(d[i].price);
						$clone.find('.p_sum').find('strong').html(($Cprice*num).toFixed(2));
						$('.cart_list').append($clone);
						$clone.css('display','block');
						$clone.find('.p_img').find('img').css('width',80);
						$clone.find('.p_img').find('img').css('height',80);
						kong();
					}
				}
			})
			
		}
		
		kong();
		
		function kong(){
			if(getCookie('cartsid')){
				$('.cart_kong').css('display','none');
			}else{
				$('.cart_kong').css('display','block');
			}
		}
		
		
		function del(sid,sidarray){
			var arr=[];
			for(var i=0;i<sidarray.length;i++){
				if(sid!=sidarray[i]){
					arr.push(sidarray[i]);
				}
			}
			arrnum.splice(sidarray.indexOf(sid),1);
			sidarr=arr;
			addCookie('cartsid',sidarr.toString(),7);
			addCookie('cartnum',arrnum.toString(),7);
		}
		
		$('.p_ops').find('a').click(function(){
			cookietoArr();
			$(this).parents('.cart_tbody').remove();
			del($(this).parents('.cart_tbody').find('.p_img').find('img').attr('sid'),sidarr);
		})
		
		
		$('.shan2').click(function(){
			$('.cart_tbody:visible').each(function(){
				if($(this).find('.p_checkbox').find('input').is(':checked')){
					$(this).remove();
					del($(this).find('.p_img').find('img').attr('sid'),sidarr);
				}
			})
		})
		Zprice();
		function Zprice(){
			var total = 0;
			$('.cart_tbody:visible').each(function(){
				if($(this).find('.p_checkbox').find('input').is(':checked')){
					total+=parseFloat($(this).find('.p_sum').find('strong').html());
				}
			});
			$('.zong').find('strong').find('b').html(total.toFixed(2));
			$('.z_num').html($('.cart_tbody:visible').find('.p_checkbox').find('input').is(':checked').length);
		}
	})()