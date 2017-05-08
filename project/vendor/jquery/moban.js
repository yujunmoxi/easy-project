
$(document).ready(function () {
//用模板引擎来做，
//1. 定义模板(在script标签中，并且type设置为text/html)
//2. 取出模板中的内容
    function processData() {
        var data = [
            {
                "src": "./imgs/shop/shop (1).jpg",
                "name1": "MISBDSA",
                "name2": "润肤精华油 90ml",
                "price": "￥106.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (2).jpg",
                "name1": "MMEEBOX",
                "name2": "洁面膏 60ml",
                "price": "￥99.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
                
            },
            {
                "src": "./imgs/shop/shop (3).jpg",
                "name1": "LK-BDSA",
                "name2": "精品面膜 10片",
                "price": "￥123.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (4).jpg",
                "name1": "SASABDSA",
                "name2": "瘦身片 10片",
                "price": "￥126.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (5).jpg",
                "name1": "MIGFSSBDSA",
                "name2": "精品面膜 10片",
                "price": "￥106.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (6).jpg",
                "name1": "AW-MISBDSA",
                "name2": "力士洗发露 500ml",
                "price": "￥66.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (7).jpg",
                "name1": "MISBDS-A",
                "name2": "精品面膜 10片",
                "price": "￥167.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (8).jpg",
                "name1": "SWWBDSA",
                "name2": "精品瘦身片 10片",
                "price": "￥136.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (9).jpg",
                "name1": "BBYSA",
                "name2": "精品面膜 10片",
                "price": "￥106.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (10).jpg",
                "name1": "MIS-BDSA",
                "name2": "指甲贴 NEW",
                "price": "￥96.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (11).jpg",
                "name1": "GHG-MISBDSA",
                "name2": "眼线笔 ",
                "price": "￥96.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (12).jpg",
                "name1": "MISBDSA",
                "name2": "口红 10ml",
                "price": "￥104.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (13).jpg",
                "name1": "MITYSA",
                "name2": "再生修复洗发水 ",
                "price": "￥143.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (14).jpg",
                "name1": "ASSBDSA",
                "name2": "洁面膏",
                "price": "￥136.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (15).jpg",
                "name1": "SASBDSA",
                "name2": "大宝SODM",
                "price": "￥102.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (16).jpg",
                "name1": "ASMISBDSA",
                "name2": "精华素",
                "price": "￥106.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (17).jpg",
                "name1": "SBDSA",
                "name2": "胭脂粉",
                "price": "￥86.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (18).jpg",
                "name1": "MISBDSA",
                "name2": "ASJNADSM-ATY",
                "price": "￥86.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (19).jpg",
                "name1": "SBDSA",
                "name2": "ALt",
                "price": "￥99.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (20).jpg",
                "name1": "MISBDSA",
                "name2": "ASJNADSM-ATY",
                "price": "￥86.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (21).jpg",
                "name1": "MISBDSA",
                "name2": "润肤精华油 90ml",
                "price": "￥106.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (22).jpg",
                "name1": "MMEEBOX",
                "name2": "洁面膏 60ml",
                "price": "￥99.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
                
            },
            {
                "src": "./imgs/shop/shop (23).jpg",
                "name1": "LK-BDSA",
                "name2": "精品面膜 10片",
                "price": "￥123.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (24).jpg",
                "name1": "SASABDSA",
                "name2": "瘦身片 10片",
                "price": "￥126.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (25).jpg",
                "name1": "MIGFSSBDSA",
                "name2": "精品面膜 10片",
                "price": "￥106.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (26).jpg",
                "name1": "AW-MISBDSA",
                "name2": "力士洗发露 500ml",
                "price": "￥66.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (27).jpg",
                "name1": "MISBDS-A",
                "name2": "精品面膜 10片",
                "price": "￥167.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (28).jpg",
                "name1": "SWWBDSA",
                "name2": "精品瘦身片 10片",
                "price": "￥136.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (29).jpg",
                "name1": "BBYSA",
                "name2": "精品面膜 10片",
                "price": "￥106.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (30).jpg",
                "name1": "MIS-BDSA",
                "name2": "指甲贴 NEW",
                "price": "￥96.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (31).jpg",
                "name1": "GHG-MISBDSA",
                "name2": "眼线笔 ",
                "price": "￥96.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (32).jpg",
                "name1": "MISBDSA",
                "name2": "口红 10ml",
                "price": "￥104.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (33).jpg",
                "name1": "MITYSA",
                "name2": "再生修复洗发水 ",
                "price": "￥143.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (34).jpg",
                "name1": "ASSBDSA",
                "name2": "洁面膏",
                "price": "￥136.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (35).jpg",
                "name1": "SASBDSA",
                "name2": "大宝SODM",
                "price": "￥102.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (36).jpg",
                "name1": "ASMISBDSA",
                "name2": "精华素",
                "price": "￥106.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (37).jpg",
                "name1": "SBDSA",
                "name2": "胭脂粉",
                "price": "￥66.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (38).jpg",
                "name1": "MISBDSA",
                "name2": "ASJNADSM-ATY",
                "price": "￥86.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (39).jpg",
                "name1": "SBDSA",
                "name2": "胭脂粉",
                "price": "￥75.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (40).jpg",
                "name1": "MISBDSA",
                "name2": "ASJNADSM-ATY",
                "price": "￥86.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (41).jpg",
                "name1": "MISBDSA",
                "name2": "润肤精华油 90ml",
                "price": "￥106.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (42).jpg",
                "name1": "MMEEBOX",
                "name2": "洁面膏 60ml",
                "price": "￥99.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
                
            },
            {
                "src": "./imgs/shop/shop (43).jpg",
                "name1": "LK-BDSA",
                "name2": "精品面膜 10片",
                "price": "￥123.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (44).jpg",
                "name1": "SASABDSA",
                "name2": "瘦身片 10片",
                "price": "￥126.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (45).jpg",
                "name1": "MIGFSSBDSA",
                "name2": "精品面膜 10片",
                "price": "￥106.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (46).jpg",
                "name1": "AW-MISBDSA",
                "name2": "力士洗发露 500ml",
                "price": "￥66.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (47).jpg",
                "name1": "MISBDS-A",
                "name2": "精品面膜 10片",
                "price": "￥167.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (48).jpg",
                "name1": "SWWBDSA",
                "name2": "精品瘦身片 10片",
                "price": "￥136.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (49).jpg",
                "name1": "BBYSA",
                "name2": "精品面膜 10片",
                "price": "￥106.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (50).jpg",
                "name1": "MIS-BDSA",
                "name2": "指甲贴 NEW",
                "price": "￥96.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (51).jpg",
                "name1": "GHG-MISBDSA",
                "name2": "眼线笔 ",
                "price": "￥96.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (52).jpg",
                "name1": "MISBDSA",
                "name2": "口红 10ml",
                "price": "￥104.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (53).jpg",
                "name1": "MITYSA",
                "name2": "再生修复洗发水 ",
                "price": "￥143.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (54).jpg",
                "name1": "ASSBDSA",
                "name2": "洁面膏",
                "price": "￥136.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (55).jpg",
                "name1": "SASBDSA",
                "name2": "大宝SODM",
                "price": "￥102.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (56).jpg",
                "name1": "ASMISBDSA",
                "name2": "精华素",
                "price": "￥106.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (57).jpg",
                "name1": "SBDSA",
                "name2": "胭脂粉",
                "price": "￥86.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥20.00"
            },
            {
                "src": "./imgs/shop/shop (58).jpg",
                "name1": "MISBDSA",
                "name2": "ASJNADSM-ATY",
                "price": "￥86.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥20.00"
            },
            {
                "src": "./imgs/shop/shop (59).jpg",
                "name1": "SBDSA",
                "name2": "ALt",
                "price": "￥99.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥33.00"
            },
            {
                "src": "./imgs/shop/shop (60).jpg",
                "name1": "MISBDSA",
                "name2": "ASJNADSM-ATY",
                "price": "￥86.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥32.00"
            },
            {
                "src": "./imgs/shop/shop (61).jpg",
                "name1": "MISBDSA",
                "name2": "润肤精华油 90ml",
                "price": "￥106.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥34.00"
            },
            {
                "src": "./imgs/shop/shop (62).jpg",
                "name1": "MMEEBOX",
                "name2": "洁面膏 60ml",
                "price": "￥99.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
                
            },
            {
                "src": "./imgs/shop/shop (63).jpg",
                "name1": "LK-BDSA",
                "name2": "精品面膜 10片",
                "price": "￥123.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (64).jpg",
                "name1": "SASABDSA",
                "name2": "瘦身片 10片",
                "price": "￥126.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥23.00"
            },
            {
                "src": "./imgs/shop/shop (65).jpg",
                "name1": "MIGFSSBDSA",
                "name2": "精品面膜 10片",
                "price": "￥106.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (66).jpg",
                "name1": "AW-MISBDSA",
                "name2": "力士洗发露 500ml",
                "price": "￥66.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (67).jpg",
                "name1": "MISBDS-A",
                "name2": "精品面膜 10片",
                "price": "￥167.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (68).jpg",
                "name1": "SWWBDSA",
                "name2": "精品瘦身片 10片",
                "price": "￥136.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥34.00"
            },
            {
                "src": "./imgs/shop/shop (69).jpg",
                "name1": "BBYSA",
                "name2": "精品面膜 10片",
                "price": "￥106.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥40.00"
            },
            {
                "src": "./imgs/shop/shop (60).jpg",
                "name1": "MIS-BDSA",
                "name2": "指甲贴 NEW",
                "price": "￥96.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (71).jpg",
                "name1": "GHG-MISBDSA",
                "name2": "眼线笔 ",
                "price": "￥96.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥20.00"
            },
            {
                "src": "./imgs/shop/shop (72).jpg",
                "name1": "MISBDSA",
                "name2": "口红 10ml",
                "price": "￥86.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (73).jpg",
                "name1": "MITYSA",
                "name2": "再生修复洗发水 ",
                "price": "￥143.00",
                "oldprice": "￥176.00",
                "cutprice": "立减￥33.00"
            },
            {
                "src": "./imgs/shop/shop (74).jpg",
                "name1": "ASSBDSA",
                "name2": "洁面膏",
                "price": "￥136.00",
                "oldprice": "￥116.00",
                "cutprice": "立增￥20.00"
            },
            {
                "src": "./imgs/shop/shop (75).jpg",
                "name1": "SASBDSA",
                "name2": "大宝SODM",
                "price": "￥102.00",
                "oldprice": "￥136.00",
                "cutprice": "立减￥32.00"
            },
            {
                "src": "./imgs/shop/shop (76).jpg",
                "name1": "ASMISBDSA",
                "name2": "精华素",
                "price": "￥106.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥10.00"
            },
            {
                "src": "./imgs/shop/shop (77).jpg",
                "name1": "SBDSA",
                "name2": "胭脂粉",
                "price": "￥86.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (78).jpg",
                "name1": "MISBDSA",
                "name2": "ASJNADSM-ATY",
                "price": "￥86.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (1).jpg",
                "name1": "SBDSA",
                "name2": "胭脂粉",
                "price": "￥86.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (35).jpg",
                "name1": "MISBDSA",
                "name2": "ASJNADSM-ATY",
                "price": "￥86.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            },
            {
                "src": "./imgs/shop/shop (60).jpg",
                "name1": "MISBDSA",
                "name2": "ASJNADSM-ATY",
                "price": "￥86.00",
                "oldprice": "￥116.00",
                "cutprice": "立减￥30.00"
            }
            
        ];
        var len = data.length;
        for (var i = 0; i < len; i++) {
            createLi(data[i]);
        }
        function createLi(data) {
            var tpl = $('#script').html();
            var htmlStr = tpl.replace("{{src}}", data.src)
                .replace("{{name1}}", data.name1)
                .replace("{{name2}}", data.name2)
                .replace("{{price}}", data.price)
                .replace("{{oldprice}}",data.oldprice)
                .replace("{{cutprice}}",data.cutprice);
            var $goods = $(htmlStr);
            $('#container').append($goods);
        }
    }

    processData();
});
