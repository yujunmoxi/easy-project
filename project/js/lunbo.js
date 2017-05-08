(function(){
	window.onload = function () {
    var box=document.getElementById("box");
    var lis=box.getElementsByTagName('li');
    var dian=document.getElementById("dian");
    var num=0;
    var initIndex=0;
    var timer;
    var stop=false;
    lis[0].style.opacity=1;
    box.style.width=lis[0].offsetWidth+"px";
    box.style.height=lis[0].offsetHeight+"px";
    var zIndex=0;
    var aTag=dian.getElementsByTagName("a");
    for (var i = 0; i < aTag.length; i++) {
        aTag[i].index=i;
        aTag[i].onclick=function(){
            initIndex=num;
            num=this.index;
            gundong(num);
        }
    }
    document.getElementById("box").onmouseover=function(){
        clearTimeout(timer);
        stop=true;
    };
    document.getElementById("box").onmouseout=function(){
        stop=false;
        setTimeout(function(){
            go();
        },2000)
    };
    function gundong(inde){
        var aTags=document.getElementsByClassName("aTag");
        aTags[initIndex].className="aTag";
        aTags[num].className="aTag focus";
        clearTimeout(timer);
        if(stop){
            return;
        }
        lis[inde].style.zIndex=++zIndex;
        animation.animate(lis[initIndex],{
            opacity:0
        });
        animation.animate(lis[inde],{
            opacity:100
        },function(){      	
            timer=setTimeout(function(){
                go();
            },2000);
        })
    }
    function go(){
        initIndex=num;
        if(num===lis.length-1){
            num=0;    
        }else{
            num++;
        }
        gundong(num);
    }
    setTimeout(function(){
        go();
    },2000);

//获得屏幕的高度
    var mTag=document.getElementById("aside");
    var height=document.documentElement.clientHeight;
    mTag.style.height=height+"px";


	//回到顶部
			var topBtn=document.getElementsByClassName("gotopIcon")[0];
			topBtn.onclick=function(){
				var timer=null;
				//document.documentElement.scrollTop = document.body.scrollTop=0;
				timer=setInterval(function(){
					if(document.documentElement.scrollTop = document.body.scrollTop>0){
						document.documentElement.scrollTop = document.body.scrollTop-=50;
					}else{
						clearInterval(timer);
						return;
					}
				},20);
			}

    
 
   
    window.onscroll = function(){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop == 0){
            topBtn.style.display="none";
        }else{
            topBtn.style.display="block";
        }
    };
};
})()






