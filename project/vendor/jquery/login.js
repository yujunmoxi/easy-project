
$(function () {
    $("#aTag").click(function () {
        var num = Math.ceil(Math.random() * 1000000 + 1);
        $(".box-14").val(num);
    });
    
});