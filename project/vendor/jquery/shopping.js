

$(function () {
    $("#login").click(function () {
        location.href = "login.html";
    });
    $("#register").click(function () {
        location.href = "register.html";
    });


    //切换图片
    $('#small').on('click', 'img', function () {

        $('#large').find("img").attr('src', $(this).attr('src'));

        $('.focus').removeClass('focus');

        $(this).addClass('focus');
    });


    //放大镜
   	$("#imgTag-1").click(function () {
        $("#bigBox").css("background-image", "url(./imgs/shop/shop (11).jpg)");
    });
    $("#imgTag-2").click(function () {
        $(".smallpic").css("background-image", "url(./imgs/shop/shop (12).jpg)");
    });
    $("#imgTag-3").click(function () {
        $("#bigBox").css("background-image", "url(./imgs/shop/shop (13).jpg)");
    });
   	$('.smallpic').mouseover(function(){
                $('.fdj').width($('.smallpic').width()*$('.bigpic').width()/$('#img1').width());
                $('.fdj').height($('.smallpic').height()*$('.bigpic').height()/$('#img1').height());
                $('.fdj').css('display','block');
                $('.bigpic').css('display','block');
                $(document).mousemove(event,function(){
                    var l=event.pageX-$('.fdj').width()/2-139;
                    var t=event.pageY-$('.fdj').height()/2-247;
                    if(l<=0){
                        l=0;
                    }else if(l>($('.smallpic').width()-$('.fdj').width())){
                        l=$('.smallpic').width()-$('.fdj').width();
                    }
                    if(t<=0){
                        t=0;
                    }else if(t>($('.smallpic').height()-$('.fdj').height())){
                        t=$('.smallpic').height()-$('.fdj').height();
                    }
                    $('.fdj').offset({
                        left:l+139,
                        top:t+247
                    });
                    var scale=$('#img1').width()/$('.bigpic').width()
                    $('#img1').css('display','block');
                    $('#img1').css('left',-scale*l);
                    $('#img1').css('top',-scale*t);
                    //定位  
                    //console.log(event.clientX-$('.fdj').width()/2);
                })
                $('.smallpic').mouseout(function(){
                    $('.fdj').css('display','none');
                    $('.bigpic').css('display','none');
                })
            })

    var num = $(".inputTag").val().substring(1);
    var shu1 = $(".num-2").val();
    $(".tag-1").click(function () {
        num--;
        if (num < 1) {
            num = 1;
    
        }
        $(".inputTag").val(num);
        $(".num-1").val(num);
        var shu2 = (num * 188.00).toFixed(2);
        $(".num-2").val(shu2);
    });
    $(".tag-2").click(function () {
       	num++;
       	if(num<2){
       		num=2;
       	}
        $(".inputTag").val(num);
        $(".num-1").val(num);
        var shu2 = (num * 188.00).toFixed(2);
        $(".num-2").val(shu2);
    });
    $('.tag-3').click(function () {
        $("#cart-1").css("display", "none");
        $("#rightMenu").find("span").css("display", "none");
        $("#remove").show();
    });
    $('.love').click(function () {
        $("#cart-1").css("display", "block");
        $("#remove").hide();
    });


    var time;
    $("#rightMenu").find(".rightMenu-1").click(function () {
        clearInterval(time);
        $("#cart").css("display", "block");
    });
    $("#cart").mouseover(function () {
        clearInterval(time);
    });
    $("#cart").mouseout(function () {
        time = setInterval(function () {
            $("#cart").css("display", "none");
        }, 100)
    });
    $(".love").click(function () {
        $("#rightMenu").find("span").css("display", "block");
        clearInterval(time);
    });
});
