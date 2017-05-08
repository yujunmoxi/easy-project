//跨域jsonp
/*<script type="text/javascript">*/
    function taobao(data) {
        var oUl = document.getElementById('ul1');
        var d = data.result; 
        if (d.length != 0) {
            var str = '';
            for (var i = 0; i < d.length; i++) {
                str += '<li><a href="https://s.taobao.com/search?q=' + d[i][0] + '">' + d[i][0] + '</a></li>';
            }
            oUl.innerHTML = str;
            oUl.style.display="block";
        }else{
            oUl.style.display="none";
        }
    }

    window.onload = function() {
        var oInput = document.getElementById('onlyone');
        var oUl = document.getElementById('ul1');
        oInput.onkeyup = function() {
            var script1 = document.createElement('script');
            script1.src = 'https://suggest.taobao.com/sug?code=utf-8&q=' + oInput.value + '&_ksTS=1487919561590_340&callback=taobao';
            document.body.appendChild(script1);
        }
    }
/*  </script>*/