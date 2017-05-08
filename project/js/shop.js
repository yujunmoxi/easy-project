/**
 * Created by zhengwaibin on 2016/8/22.
 */
(function(){
	window.onload=function(){
    //获得屏幕的高度
    /*var mTag=document.getElementById("rightMenu");
    var height=document.documentElement.clientHeight;
    mTag.style.Height=height+"px";*/


    //返回顶部
    var topBtn=document.getElementsByClassName("gotopIcon")[0];
    topBtn.onclick = function(){
        if(document.documentElement.scrollTop){
            document.documentElement.scrollTop =0;
        }else{
            document.body.scrollTop =0;
        }
    };
    window.onscroll = function(){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop == 0){
            topBtn.style.display="none";
        }else{
            topBtn.style.display="block";
        }
    };

    var event=document.getElementById("event");
    var block=document.getElementById("block");
    block.onmouseover=function(eve){
        eve=eve ||window.eve;
        event.style.opacity="100";
    };
    block.onmouseout=function(eve){
        eve=eve ||window.eve;
        event.style.opacity="0";
    };
    event.onmouseover=function(eve){
        eve=eve ||window.eve;
        this.style.opacity="100";
    };
    event.onmouseout=function(eve){
        eve=eve ||window.eve;
        this.style.opacity="0";
    };
};
})()

