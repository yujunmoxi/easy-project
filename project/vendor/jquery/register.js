$(function(){
		var regname=/^1[3|5|7|8|9][0-9]{9}$/;;
		var regpass=/^[\w]{6,16}$/;
		var bstop=true;
		//验证用户名 数据库比对
		$('#username').on('blur',function(){
			var phonename=$('#username').val();
			if(regname.test(phonename)){
				$.ajax({
					type:'post',
					url:'../project/vendor/together/reg.php',
					data:{
						name:phonename
					},
					success:function(data){//成功后的回调
						if(!data){
							$('#username').next('span').css('color','green').html('√');
							bstop=true;
						}else{
							$('#username').next('span').css('color','red').html('该用户名已经存在');
							bstop=false;
						}
					}
				});
			}else{
				$(this).next('span').css('color','red').html('用户名格式错误');
				$('#username').focus();
				bstop=false;
			}
		});
		

		//验证密码
		$("#password").on('blur',function(){
			var password=$('#password').val();
			if(regpass.test(password)){
				var pn=password.length;
				if(pn>6 && pn<17){
					$('#password').next('span').css('color','green').html('√');
					bstop=true;
				}else {
					bstop=false;
				}
			}else{	
					$('#password').next('span').css('color','red').html('密码不符合规范');
					$('#password').focus();	
				}
		})
		
		$("#aTag").click(function () {
        var num = Math.ceil(Math.random() * 1000000 + 1);
        $(".box-14").val(num);
    });
		
		$('form').on('submit',function(){
			if($("#username").val().length=='' || $("#username").val().length=='' || $(".box-13").val().length==''){
				bstop=false;
			}
			if(!bstop){
				return false;
			}
		});
		
		
				
});