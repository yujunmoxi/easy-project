

$(function () {
    $(".remove").click(function () {
        $("#boxtag").css("display", "none");
        $("#jiSuan").css("display", "none");
        $("#yin").css("display", "block")
    });
    var num = $(".inputTag").val();
    var shu1 = $(".num-2").val();
    $(".tag-1").click(function () {
        num--;
        if (num < 1) {
            num = 1;
            alert("数量不能为 0 ");
        }
        $(".inputTag").val(num);
        var shu2 = parseInt((num * 188.00)).toFixed(2);
        $(".num-2").val(shu2);
        $(".num-1").val(shu2);
    });
    $('.tag-2').click(function () {
        num++;
        $(".inputTag").val(num);
        var shu2 = parseInt((num * 188.00)).toFixed(2);
        $(".num-2").val(shu2);
        $(".num-1").val(shu2);
    });

});
