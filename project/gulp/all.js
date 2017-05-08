* {
	margin: 0 auto;
	padding: 0;
}

img {
	border: none;
}

li {
	list-style: none;
}

a:hover {
	color: yellow;
}


/*---------------------------------主页---------------------------------------*/


/*主页*/

#margin {
	width: 1349px;
	position: relative;
}

#ul1 {
	width: 320px;
	font: 12px/24px "";
	color: #666;
	background: #fff;
	border: 1px solid #ddd;
	border-top: none;
	position: absolute;
	left: 463px;
	top: 95px;
	z-index: 502;
}

#ul1 li {
	padding-left: 19px;
	z-index: 502;
}


/*#top*/

#top {
	width: 1349px;
	height: 30px;
	background: #ff5073;
}

#top .top1 {
	background: url(../../imgs/icons/top.png) no-repeat 5px 0px;
	background-position: 0px 13px;
	width: 122px;
	height: 28px;
	line-height: 30px;
	font-size: 12px;
	color: white;
	margin-left: 90px;
	padding-top: 2px;
	float: left;
	padding-left: 15px;
}

#top .top2 {
	background: url(../../imgs/top-2.jpg) no-repeat center left;
	width: 230px;
	height: 30px;
	line-height: 30px;
	font-size: 12px;
	color: white;
	float: left;
	margin-left: 5px;
	padding-left: 20px;
}

#top .top3 {
	width: 350px;
	height: 30px;
	font-size: 12px;
	color: white;
	float: right;
	margin-right: 30px;
}

#top .top3 ul li {
	float: left;
}

#top .top3 ul li a {
	color: #fff;
}

#top .top3 ul li .tp {
	display: block;
	width: 40px;
	margin-top: 6px;
}

#top .top3 ul .img1 {
	background: url(../../imgs/icons/top.png) no-repeat center left;
	background-position: 4px -35px;
	width: 90px;
	margin-left: 20px;
	padding-left: 22px;
	line-height: 30px;
	font-size: 14px;
}

#top .top3 ul .img2 {
	background: url(../../imgs/icons/top.png) no-repeat center left;
	background-position: 0px -56px;
	width: 90px;
	margin-left: 20px;
	padding-left: 22px;
	line-height: 30px;
	font-size: 14px;
}


/*#logo*/

#logo {
	width: 1349px;
	height: 90px;
}

#logo .logo1 {
	width: 240px;
	height: 78px;
	line-height: 90px;
	margin-left: 90px;
	padding-top: 12px;
	float: left;
}

#logo .logo2 {
	width: 590px;
	height: 90px;
	line-height: 90px;
	text-align: center;
	float: left
}

#logo .logo2 input {
	display: inline-block;
	width: 343px;
	height: 38px;
	border: 1px solid #ff5073;
	border-radius: 20px;
	background: url(../../imgs/search.jpg) no-repeat center right;
	text-indent: 15px;
	font-size: 20px;
}

#logo .logo3 {
	width: 340px;
	height: 90px;
	float: left;
}

#logo .logo3 p {
	margin-top: 20px;
	float: left;
	width: 120px;
}

#logo .logo3 p span {
	display: block;
}

#logo .logo3 img {
	display: inline-block;
	width: 140px;
	height: 90px;
	float: left
}


/*#nav*/

#nav {
	width: 1349px;
	height: 45px;
	border-top: 1px solid darkgray;
	border-bottom: 1px solid darkgray;
}

#nav .navLeft {
	width: 160px;
	height: 45px;
	background: #f2f2f2;
	float: left;
	text-align: center;
	margin-left: 90px;
}

#nav .navLeft a {
	display: block;
	color: black;
	margin-top: 18px;
	margin-bottom: 6px;
}

#zhuMenu {
	width: 160px;
	height: 507px;
	float: left;
	background: black;
	position: relative;
	z-index: 500;
	opacity: 0.6;
	filter: alpha(opacity=0);
}

#zhuMenu .zhu li {
	list-style: none;
	height: 40px;
	width: 160px;
	text-align: center;
	line-height: 40px;
	cursor: pointer;
	color: white;
}

#fuMenu {
	width: 160px;
	height: 480px;
	float: left;
	background: white;
	position: absolute;
	z-index: 1000;
	top: 166px;
	left: 235px;
	display: none;
	cursor: pointer;
}

#fuMenu li {
	height: 40px;
	line-height: 40px;
	width: 160px;
	text-align: center;
}

#fuMenu li a {
	color: white;
}

#fuMenu li a:hover {
	background: #FF0302;
	color: white;
}

.prop {
	background: red;
	color: red;
}

#nav .navRight1 {
	width: 1015px;
	height: 22px;
	float: left;
}

#nav .navRight1 .imgNav1 {
	float: left;
	display: block;
	margin-left: 132px;
	margin-top: 5px;
}

#nav .navRight1 .imgNav2 {
	float: left;
	display: block;
	margin-left: 158px;
	margin-top: 5px;
}

#nav .navRight2 {
	width: 1015px;
	height: 23px;
	float: left;
}

#nav .navRight2 .ul .mu {
	float: left;
}

#nav .navRight2 .ul .last {
	margin-left: 15px;
}

#nav .navRight2 .ul li a {
	display: block;
	width: 95px;
	text-align: center;
	color: black;
}

#nav .navRight2 .ul li a:hover {
	color: red;
}

#nav .navRight2 .ul .mu ol {
	border: 1px solid transparent;
	border-top: none;
	text-align: center;
	z-index: 100;
	position: relative;
	background: white;
	display: none;
}

#nav .navRight2 .ul .mu ol a {
	display: block;
	height: 40px;
	line-height: 40px;
}

#nav .navRight2 .ul .mu ol a:hover {
	color: #FF9FD6;
}


/*#box*/

#box {
	overflow: hidden;
	width: 1349px;
	height: 506px;
}

#box ul {
	height: 506px;
	list-style: none;
}

#box ul li {
	position: absolute;
	width: 1349px;
	opacity: 1;
	filter: alpha(opacity=0);
}

#box ul li img {
	display: block;
	width: 1349px;
}

.aTag {
	display: block;
	width: 30px;
	height: 30px;
	background: gray;
	line-height: 30px;
	text-align: center;
	float: left;
	margin: 10px 10px;
	border: 1px solid #999;
	border-radius: 50%;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	behavior: url(project/CSS3 PIE.htc);
}

.aTag.focus {
	background: pink;
	color: gray;
}

#dian {
	position: absolute;
	width: 434px;
	top: 617px;
	left: 460px;
	z-index: 502;
}


/*#short*/

#short {
	width: 1172px;
	position: relative;
}

#short h3 {
	padding-left: 32px;
	margin-top: 40px;
	margin-bottom: 45px;
}

#short span {
	position: absolute;
	left: 160px;
	top: 6px;
	font-size: 14px;
	color: #666;
}


/*#mywrapper*/

#mywrapper {
	width: 1172px;
	height: 360px;
	position: relative;
	overflow: hidden;
}

#mywrapper .swiper_wrapper {
	width: 200%;
	height: 360px;
	position: relative;
}

.swiper_wrapper a {
	width: 80%;
	display: block;
	margin-left: 10%;
}

.swiper_wrapper img {
	width: 100%;
	height: 242px;
	vertical-align: middle;
	max-width: 100%;
	/*border: 1px solid #f0f;*/
	border-radius: 2px;
}

.swiper_wrapper .like_name {
	font-size: 14px;
	margin-top: 15px;
	color: #2d2d2d;
	text-align: center;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	height: 40px;
}

.swiper_wrapper .prices {
	position: absolute;
	width: 10%;
	height: 50px;
	bottom: 0;
	color: #ff5073;
	font-size: 18px;
	text-align: center;
}

.swiper_wrapper .prices .originPrice {
	color: #999;
	margin-left: 5px;
	font-size: 14px;
	text-decoration: line-through;
}

#mywrapper .swiper_wrapper .slide {
	height: 360px;
	width: 291px;
	float: left;
	
}

#mywrapper .decoration {
	width: 100%;
	height: 360px;
	position: relative;
}

#mywrapper .left {
	width: 27px;
	height: 44px;
	background: url(../../imgs/pre-button.png) no-repeat;
	position: absolute;
	z-index: 2;
	left: 0px;
	top: 120px;
	cursor: pointer;
}

#mywrapper .right {
	width: 27px;
	height: 44px;
	background: url(../../imgs/next-button.png) no-repeat;
	z-index: 2;
	position: absolute;
	right: 0px;
	top: 120px;
	cursor: pointer;
}


/*#activity*/

#activity {
	width: 1172px;
	text-align: center;
}

#activity ul {
	width: 100%;
}

#activity ul li {
	width: 566px;
	float: left;
	margin-right: 13px;
	margin-left: 7px;
	position: relative;
	z-index: 1;
}

#activity ul li img {
	border: 0;
	width: 100%;
	height: 300px;
	margin-bottom: 20px;
	vertical-align: middle;
	max-width: 100%;
}

#activity .wa {
	display: none;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 320px;
}

#activity .banner-wrapper {
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
	bottom: 20px;
	opacity: 0.7;
	filter: alpha(opacity=0);
	z-index: 2;
	background: #333;
}

#activity .qr-wrapper {
	position: absolute;
	width: 130px;
	height: 130px;
	left: 50%;
	top: 65px;
	margin-left: -65px;
	z-index: 3;
	background: #fff;
}

#activity .meme-logo {
	background: url(../../imgs/meme.png) 0 0 no-repeat;
	position: absolute;
	width: 36px;
	height: 36px;
	left: 50%;
	top: 112px;
	z-index: 4;
	margin-left: -18px;
}

#activity .qr-title {
	position: absolute;
	top: 215px;
	font-size: 18px;
	color: #fff;
	z-index: 3;
	text-align: center;
	width: 100%;
}

#activity .mamimg {
	position: absolute;
	width: 120px;
	height: 120px;
	left: 50%;
	top: 70px;
	margin-left: -60px;
	vertical-align: middle;
}


/*.shop*/

.shop {
	width: 350px;
	height: 440px;
	float: left;
	margin: 50px 10px 50px 50px;
	/*transition: all 2s;
	    border: 5px solid transparent;*/
}

.shop:hover {
	box-shadow: 0 0 15px gray;
}

.shop dt img {
	display: block;
	width: 350px;
	height: 320px;
	text-align: center;
}

.shop .money {
	width: 350px;
	height: 60px;
	background: #fff5f9;
	margin-top: 10px;
}

.shop .money .mon {
	float: left;
	width: 115px;
	height: 60px;
	line-height: 60px;
	text-align: center;
}

.shop .money span {
	float: left;
	display: block;
	width: 115px;
	height: 60px;
	line-height: 20px;
}

.shop .money .gouwu {
	float: left;
	display: block;
	width: 120px;
	height: 60px;
	text-align: center;
	line-height: 60px;
	background: #fd49ac;
}

.shop dl dd p {
	line-height: 22px;
	font-size: 19px;
	color: #2d2d2d;
	overflow: hidden;
	opacity: 0.8;
	filter: alpha(opacity=0);
	text-align: center;
}


/*#event*/

#event {
	width: 100px;
	height: 40px;
	position: fixed;
	top: 350px;
	right: 40px;
	background: black;
	z-index: 99999;
	text-align: center;
	line-height: 40px;
	opacity: 0;
	filter: alpha(opacity=0);
}

#event a {
	color: white;
}

#event:hover {
	background: red;
	color: white;
}


/*#block*/

#block {
	width: 40px;
	height: 40px;
	position: fixed;
	right: 0;
	top: 350px;
	z-index: 99999;
	text-align: center;
	line-height: 40px;
}

#block:hover {
	background: red;
	color: white;
}


/*----------------------------商品详情页-----------------------------------*/


/*商品详情*/


/*放大镜------------------------开始--------------------------------*/

.moving {
	position: absolute;
	left: 139px;
	top: 247px;
}

.smallpic {
	width: 300px;
	height: 300px;
	border: 1px solid red;
	float: left;
	position: relative;
}

.fdj {
	width: 100px;
	height: 100px;
	background: yellow;
	position: absolute;
	left: 0;
	top: 0px;
	display: none;
	background: #FF00FF;
	opacity: .5;
	filter: alpha(opacity=0);
	border-radius: 50%;
}

.bigpic {
	width: 300px;
	height: 300px;
	overflow: hidden;
	border: 1px solid #ccc;
	float: left;
	margin-left: 10px;
	display: none;
	position: relative;
}

#img1 {
	position: absolute;
	left: 0px;
	top: 0px;
}


/*放大镜------------------------结束--------------------------------*/

#shopLeft {
	width: 500px;
	height: 500px;
	border: 1px solid gainsboro;
	float: left;
	margin-left: 40px;
	margin-top: 40px;
	text-align: center;
}

#large {
	width: 300px;
	height: 300px;
	margin-top: 40px;
	position: absolute;
	float: left;
	left: 140px;
}

#large img {
	display: block;
	width: 300px;
	height: 300px;
}

#small img {
	height: 80px;
	cursor: pointer;
	border: 3px solid transparent;
	margin-top: 380px;
	margin-left: 15px;
}

.focus {
	box-shadow: 0px 0px 15px red;
}

#large #pink {
	position: absolute;
	left: 0;
	top: 0;
	width: 100px;
	height: 100px;
	background: pink;
	opacity: .5;
	filter: alpha(opacity=0);
	border-radius: 50%;
	display: none;
}

#bigBox {
	width: 400px;
	height: 400px;
	background: url(../../imgs/shop/shop (11).jpg) no-repeat 0 0;
	background-size: 1200px 1200px;
	position: absolute;
	top: 300px;
	left: 500px;
	display: none;
}

#boxTag {
	width: 1349px;
	height: 560px;
	float: left;
}

#shopRight {
	margin-bottom: 20px;
	width: 660px;
	height: 500px;
	float: left;
	margin-top: 40px;
	margin-left: 20px;
}

#shopRight p {
	width: 660px;
	height: 40px;
	line-height: 40px;
	font-size: 25px;
	margin-top: 20px;
	float: left;
	font-family: "microsoft yahei";
}

#shopRight .span {
	display: block;
	width: 660px;
	height: 20px;
	line-height: 20px;
	margin: 5px 0 10px 0;
	background: url(../../imgs/shop-1.jpg) no-repeat center left;
	font-size: 14px;
	color: #aaa;
	padding-left: 25px;
	float: left;
}

#shopRight .span1 {
	display: block;
	width: 660px;
	height: 20px;
	line-height: 16px;
	margin-bottom: 30px;
	font-size: 14px;
	color: #808080;
	float: left;
}

#shopRight .pic {
	width: 685px;
	height: 100px;
	background: #f5f5f5;
	float: left;
}

#shopRight .pic .pic-1 {
	width: 80px;
	height: 100px;
	text-align: center;
	float: left;
	line-height: 100px;
}

#shopRight .pic .pic-2 {
	width: 480px;
	height: 60px;
	border-bottom: 1px dashed darkgray;
	line-height: 49px;
	float: left;
}

#shopRight .pic .pic-2 p {
	color: #ff5073;
	font-size: 30px;
	width: 480px;
	height: 40px;
}

#shopRight .pic .pic-3 {
	width: 480px;
	height: 39px;
	line-height: 39px;
	float: left;
	font-size: 16px;
	color: darkgray;
}

#shopRight .ping {
	width: 400px;
	height: 40px;
	line-height: 40px;
	float: left;
	color: darkgray;
	font-size: 14px;
	padding-left: 20px;
}

#shopRight .selection {
	width: 400px;
	height: 60px;
	float: left;
	margin-top: 0px;
}

#shopRight .selection p {
	margin-top: 0px;
	font-size: 14px;
	color: darkgray;
}

#shopRight .selection select {
	width: 400px;
	height: 40px;
}

#shopRight #num {
	width: 400px;
	height: 60px;
	float: left;
	line-height: 60px;
	margin-top: 40px;
}

#shopRight #num p {
	float: left;
	width: 60px;
	height: 60px;
	font-size: 18px;
	color: darkgray;
	margin-top: 0;
}

#shopRight #num a {
	display: block;
	width: 30px;
	height: 30px;
	text-align: center;
	line-height: 30px;
	border: 1px solid darkgray;
	float: left;
	background: #f5f5f5;
	color: black;
}

#shopRight #num a:hover {
	background: red;
	color: white;
}

#shopRight #num input {
	display: block;
	width: 60px;
	height: 30px;
	text-align: center;
	line-height: 30px;
	border: 1px solid darkgray;
	float: left;
}

#shopRight #num .bTag {
	float: left;
	width: 140px;
	height: 60px;
	font-size: 18px;
	color: darkgray;
	margin-top: -10px;
	margin-left: 20px;
}

#shopRight #like {
	width: 300px;
	height: 50px;
	line-height: 50px;
	float: left;
}

#shopRight #like a {
	width: 110px;
	height: 45px;
	display: block;
	text-align: center;
	line-height: 45px;
	border-radius: 7px;
	border: 1px solid #ff5073;
	float: left;
	color: red;
	margin-left: 30px;
}

#shopRight #like a:hover {
	background: #ff5073;
	color: white;
}

#cart {
	width: 400px;
	height: 646px;
	position: fixed;
	right: 40px;
	top: 0;
	border: 1px solid gainsboro;
	box-shadow: 0 0 10px gray;
	float: left;
	background: white;
	display: none;
}

#cart p {
	width: 360px;
	height: 45px;
	line-height: 45px;
	font-size: 25px;
	color: red;
	background: #bcbcbc url(../../imgs/menu-1.jpg) no-repeat center left;
	padding-left: 40px;
}

#cart span {
	display: block;
	width: 400px;
	height: 60px;
	line-height: 60px;
	text-align: center;
}

#cart #cart-1 {
	display: none;
}

#cart #cart-1 b {
	width: 360px;
	height: 40px;
	line-height: 40px;
	font-weight: normal;
	margin-left: 20px;
}

#cart #cart-1 .cart-11 {
	width: 360px;
	height: 180px;
	border-bottom: 1px solid gainsboro;
}

#cart #cart-1 .cart-11 img {
	float: left;
	display: inline-block;
	width: 150px;
	height: 150px;
}

#cart #cart-1 .cart-11 .pTag {
	float: left;
	font-size: 16px;
	margin-left: 20px;
	margin-top: 20px;
}

#cart #cart-1 .cart-11 .number {
	width: 160px;
	height: 70px;
	margin-left: 20px;
	text-align: center;
	float: left;
	margin-top: 20px;
}

#cart #cart-1 .cart-11 .number input {
	display: block;
	width: 30px;
	height: 30px;
	border: none;
	text-align: center;
	line-height: 30px;
	font-size: 25px;
	color: red;
	float: left;
}

#cart #cart-1 .cart-11 .number #a1 {
	float: left;
	display: block;
	width: 30px;
	height: 30px;
	text-align: center;
	line-height: 30px;
	border: 1px solid gainsboro;
	border-radius: 50%;
	font-size: 18px;
	color: black;
}

#cart #cart-1 .cart-11 .number #a2 {
	display: block;
	width: 30px;
	height: 30px;
	text-align: center;
	line-height: 30px;
	border: 1px solid gainsboro;
	border-radius: 50%;
	font-size: 18px;
	color: black;
	float: left;
}

#cart #cart-1 .cart-11 .number a:hover {
	background: gainsboro;
	color: red;
}

#cart #cart-1 .cart-11 .number span {
	display: block;
	width: 80px;
	height: 30px;
	margin-left: 0;
	font-size: 20px;
	color: red;
}

#cart #cart-1 .cart-11 .number .tag-3 {
	display: block;
	margin-top: 20px;
	margin-left: 100px;
	text-decoration: underline;
	font-style: italic;
}

#cart #cart-1 #shu {
	width: 360px;
	height: 80px;
	padding-top: 10px;
	border-bottom: 1px dashed gainsboro;
}

#cart #cart-1 #shu .num-1 {
	display: inline;
	width: 40px;
	height: 30px;
	line-height: 30px;
	text-align: center;
	font-size: 20px;
	color: red;
	border: none;
}

#cart #cart-1 #shu .num-2 {
	display: inline;
	width: 80px;
	height: 30px;
	line-height: 30px;
	text-align: center;
	font-size: 20px;
	color: red;
	border: none;
}

#remove {
	width: 380px;
	height: 60px;
	line-height: 60px;
	text-align: center;
}

#cart #cart-1 #result {
	width: 360px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	background: #FF744E;
	margin-top: 20px;
}

#cart #cart-1 #result a {
	display: block;
	width: 360px;
	height: 40px;
	color: black;
	font-size: 18px;
}

#cart #cart-1 #result a:hover {
	background: red;
	color: white;
}

#rightMenu .rightMenu-1 a span input {
	border: none;
	width: 35px;
	height: 35px;
	text-align: center;
	font-size: 25px;
	color: white;
	background: red;
	border-radius: 50%;
	margin-left: -7px;
}


/*#event*/

#event {
	width: 100px;
	height: 40px;
	position: fixed;
	top: 350px;
	right: 40px;
	background: black;
	z-index: 99999;
	text-align: center;
	line-height: 40px;
	opacity: 0;
	filter: alpha(opacity=0);
}

#event a {
	color: white;
}

#event:hover {
	background: red;
	color: white;
}


/*#block*/

#block {
	width: 40px;
	height: 40px;
	position: fixed;
	right: 0;
	top: 350px;
	z-index: 99999;
	text-align: center;
	line-height: 40px;
}

#block:hover {
	background: red;
	color: white;
}

#taplist {
	text-align: center;
}

#taplist img {
	display: block;
	width: 1172px;
}


/*-----------------------------注册页面-----------------------------------*/


/*注册页面*/

#logo-1 {
	width: 1280px;
	height: 90px;
	float: left;
	margin-bottom: 40px;
	position: relative;
}

#logo-1 img {
	display: block;
	margin-top: 30px;
	margin-left: 70px;
	position: absolute;
	left: 12px;
	top: -100px;
}

#big_register {
	margin-top: 120px;
	width: 1349px;
	height: 510px;
	background: url(../../imgs/shop/register.jpg) no-repeat;
	position: relative;
}

#big_register .box {
	position: absolute;
	right: 95px;
	top: 50px;
	width: 410px;
	background: white;
}

#big_register .box a:hover {
	color: red;
}

#big_register .box .box-0 {
	margin-left: 40px;
	cursor: point;
}

#big_register .box input {
	margin-left: 40px;
	margin-top: 10px;
	display: block;
	width: 320px;
	height: 40px;
	line-height: 40px;
	border-radius: 5px;
	border: 1px solid gray;
	font-size: 18px;
}

#big_register .box .box-13 {
	float: left;
	width: 160px;
	height: 40px;
}

#big_register .box .box-14 {
	float: left;
	width: 120px;
	height: 40px;
	margin-left: 39px;
	font-style: oblique;
	text-decoration: line-through;
	background: url(../../imgs/yan.jpg) no-repeat center left;
	font-size: 25px;
}

#big_register .box .p1 {
	margin-top: 20px;
	margin-bottom: 38px;
	float: left;
	width: 180px;
}

#big_register .box .login {
	cursor: pointer;
	float: right;
	width: 85px;
	font-size: 14px;
	margin-top: 20px;
	margin-bottom: 38px;
	margin-right: 40px;
	color: #3d86f4;
}

#big_register .box #error {
	color: red;
	visibility: hidden;
}

#userSpan,
#passSpan,
#yanSpan {
	display: block;
	width: 100px;
	float: right;
	color: red;
}

#big_register .box #aTag {
	float: left;
	display: block;
	width: 120px;
	height: 28px;
	color: #fff;
	background: #ff6dbd;
	line-height: 28px;
	text-align: center;
	margin-top: 10px;
	margin-left: 242px;
	margin-bottom: 10px;
}

#big_register .box .rember {
	width: 140px;
	float: left;
	margin-left: 90px;
	margin-top: 10px;
}

#big_register .box .rember input {
	display: block;
	width: 30px;
	line-height: 40px;
	height: 40px;
	float: left;
	margin-left: 0;
	margin-top: -8px;
}

#big_register #btn {
	margin-top: 15px;
	width: 324px;
	text-align: center;
	background: #ff6dbd;
	border: none;
	font-size: 24px;
	color: white;
	cursor: pointer;
}


/*.box .spansp {
		position: relative;
	}
	.box .spansp .spans {
		position: absolute;
		right: 24px;
		top: 94px;
		text-align: center;
		display: block;
		z-index: 2;
	}*/

#big_register .box .p2 {
	font-size: 14px;
	text-align: center;
	width: auto;
	margin: 7px 0 17px 15px;
}

#big_register .box .p2 span {
	color: #f00;
}

#big_register .box .thirdParty {
	margin-bottom: 5px;
	height: 50px;
	font-size: 14px;
	border-top: 1px solid #dcdcdc;
}

#big_register .box .thirdParty span {
	display: block;
	float: left;
	margin: 15px 40px;
}

#big_register .box .thirdParty #wechat {
	background: url(../../imgs/wechat1.jpg) 0 0 no-repeat;
	display: block;
	height: 24px;
	width: 30px;
	float: left;
	margin-top: 12px;
	margin-right: 40px;
}

#big_register .box .thirdParty #weibo {
	background: url(../../imgs/weibo1.jpg) 0 0 no-repeat;
	display: block;
	height: 24px;
	width: 30px;
	float: left;
	margin-top: 12px;
	margin-right: 40px;
}

#big_register .box .thirdParty #qq {
	background: url(../../imgs/qq1.jpg) 0 0 no-repeat;
	display: block;
	height: 24px;
	width: 30px;
	float: left;
	margin-top: 12px;
	margin-right: 40px;
}


/*-----------------------登录页面-----------------------------*/


/*登录*/

#big_login {
	margin-top: 120px;
	width: 1349px;
	height: 510px;
	background: url(../../imgs/shop/register.jpg) no-repeat;
	position: relative;
}

#big_login .box {
	position: absolute;
	right: 90px;
	top: 54px;
	width: 410px;
	height: 403px;
	background: white;
}

#big_login .box a:hover {
	color: red;
}

#big_login .box .box-0 {
	margin-left: 40px;
}

#big_login .box input {
	margin-left: 40px;
	margin-top: 10px;
	display: block;
	width: 320px;
	height: 40px;
	line-height: 40px;
	border-radius: 5px;
	border: 1px solid gray;
	font-size: 18px;
}

#big_login .box .box-13 {
	float: left;
	width: 120px;
	height: 40px;
}

#big_login .box .box-14 {
	float: left;
	width: 100px;
	height: 40px;
	margin-left: 20px;
	font-style: oblique;
	text-decoration: line-through;
	background: url(../../imgs/yan.jpg) no-repeat center left;
	font-size: 25px;
}

#big_login .box .p1 {
	margin-top: 20px;
	margin-bottom: 38px;
	float: left;
	width: 180px;
}

#big_login .box .register {
	cursor: pointer;
	float: right;
	width: 110px;
	font-size: 14px;
	margin-top: 20px;
	margin-bottom: 38px;
	margin-right: 40px;
	color: #3d86f4;
}

#big_login .box #error {
	color: red;
	visibility: hidden;
}

#userSpan,
#passSpan,
#yanSpan {
	display: block;
	width: 100px;
	float: right;
	color: red;
}

#big_login .box #aTag {
	margin-left: 12px;
	vertical-align: middle;
	float: left;
	display: block;
	width: 48px;
	color: #01f;
	background: #fff;
	text-align: center;
	margin-top: 10px;
}

#big_login .box .rember {
	width: 140px;
	float: left;
	margin-left: 90px;
	margin-top: 10px;
}

#big_login .box .rember input {
	display: block;
	width: 30px;
	line-height: 40px;
	height: 40px;
	float: left;
	margin-left: 0;
	margin-top: -8px;
}

#big_login .box #btn {
	margin-top: 25px;
	width: 324px;
	text-align: center;
	background: #ff6dbd;
	border: none;
	font-size: 24px;
	color: white;
	cursor: pointer;
}

#big_login .box .p2 {
	font-size: 14px;
	width: 100px;
	margin: 27px 0 21px 301px;
}

#big_login .box .p2 span {
	color: #f00;
}

#big_login .box .thirdParty {
	height: 50px;
	font-size: 14px;
	border-top: 1px solid #dcdcdc;
}

#big_login .box .thirdParty span {
	display: block;
	float: left;
	margin: 15px 40px;
}

#big_login .box .thirdParty #wechat {
	background: url(../../imgs/wechat1.jpg) 0 0 no-repeat;
	display: block;
	height: 24px;
	width: 30px;
	float: left;
	margin-top: 12px;
	margin-right: 40px;
}

#big_login .box .thirdParty #weibo {
	background: url(../../imgs/weibo1.jpg) 0 0 no-repeat;
	display: block;
	height: 24px;
	width: 30px;
	float: left;
	margin-top: 12px;
	margin-right: 40px;
}

#big_login .box .thirdParty #qq {
	background: url(../../imgs/qq1.jpg) 0 0 no-repeat;
	display: block;
	height: 24px;
	width: 30px;
	float: left;
	margin-top: 12px;
	margin-right: 40px;
}


/*------------------------------购物车-----------------------------------*/


/*购物车*/

#logo .logo1-1 {
	width: 800px;
	height: 90px;
	float: right;
}







/*artical*/

#artical {
	margin: 30px 0;
	text-align: center;
}

#artical img {
	display: block;
	width: 1192px;
	height: 86px;
}


/*--cart1---*/

#cart1 {
	width: 100%;
	overflow: hidden;
	margin-bottom: 10px;
}

#cart1 .w {
	width: 1172px;
	margin: 0 auto;
	font-size: 12px;
}
#cart1 .w .empty-cart{
	height: 98px;
    padding: 80px 0 120px;
    color: #333;
}

#cart1 .w .empty-cart-msg{
	height: 98px;
	line-height: 20px;
	font-size: 14px;
    padding-left: 428px;
    padding-top: 25px;
    /*background: url(../../imgs/icon.gif) 250px 22px no-repeat;*/
}
#cart1 .w .empty-cart-msg a{
	display: block;
	color: #005ea7;
}


#cart1 .w .cart_bar {
	margin-top: 10px;
	overflow: hidden;
}

#cart1 .w .cart_bar .cart_all {
	float: left;
	height: 26px;
	text-align: center;
	font-size: 16px;
	line-height: 26px;
	cursor: pointer;
	padding: 0 0 10px;
	margin: 5px 30px 0 0;
	font-weight: 700;
	border-bottom: 2px solid #e4393c;
}

#cart1 .w .cart_bar .cart_store {
	float: right;
	padding-left: 122px;
	margin-top: 10px;
}

#cart1 .w .cart_bar .cart_store select {
	border: 1px solid #666;
	color: #666;
}

#cart1 .w .cart_wrap {
	margin-bottom: 20px;
	width: 1172px;
	margin: 0 auto;
}

#cart1 .w .cart_wrap .cart_thead {
	height: 32px;
	line-height: 32px;
	display: block;
	margin: 0 0 10px;
	padding: 5px 0;
	background: #f3f3f3;
	border-top: 0;
}

#cart1 .w .cart_wrap .cart_thead .t_checkbox {
	width: 122px;
	height: 18px;
	padding-top: 7px;
	line-height: 18px;
	padding-left: 11px;
	float: left;
}

#cart1 .w .cart_wrap .cart_thead .t_checkbox input {
	margin-top: 3px;
	float: left;
}

#cart1 .w .cart_wrap .cart_thead .t_goods {
	width: 208px;
	height: 32px;
	float: left;
	line-height: 32px;
}

#cart1 .w .cart_wrap .cart_thead .t_props {
	width: 140px;
	height: 32px;
	padding: 0 20px;
	float: left;
}

#cart1 .w .cart_wrap .cart_thead .t_price {
	width: 120px;
	height: 32px;
	padding-right: 40px;
	float: left;
	text-align: right;
}

#cart1 .w .cart_wrap .cart_thead .t_quan {
	width: 80px;
	text-align: center;
	float: left;
}

#cart1 .w .cart_wrap .cart_thead .t_sum {
	width: 100px;
	padding-right: 40px;
	text-align: right;
	float: left;
}

#cart1 .w .cart_wrap .cart_thead .t_action {
	width: 75px;
	float: left;
}

#cart1 .w .cart_wrap .cart_list {
	margin-bottom: 20px;
	width: 1172px;
}

#cart1 .w .cart_wrap .cart_list .cart_tbody {
	width: 1172px;
}

#cart1 .w .cart_wrap .cart_list .cart_tbody .shop1 {
	height: 30px;
	line-height: 30px;
	padding-left: 11px;
	font-weight: 700;
}

#cart1 .w .cart_wrap .cart_list .cart_tbody .shop1 input {
	float: left;
	margin-top: 10px;
}

#cart1 .w .cart_wrap .cart_list .cart_tbody .shop1 .shop_name {
	float: left;
	color: #666;
	padding-left: 10px;
}

#cart1 .w .cart_wrap .cart_list .cart_tbody .shop1 .mian {
	float: right;
	color: #888;
	font-weight: 400;
}

#cart1 .w .cart_wrap .cart_list .cart_tbody .item_list {
	border-width: 2px 1px 1px;
	border-style: solid;
	border-color: #aaa #f1f1f1 #f1f1f1;
	background: #fff;
}

#cart1 .w .cart_wrap .cart_list .cart_tbody .item_list .item_single {
	background: #fff4e8;
	position: relative;
	padding: 0 10px 1px 40px;
	line-height: 20px;
	overflow: hidden;
}

#cart1 .w .cart_wrap .cart_list .cart_tbody .item_list .item_single .item_form .p_checkbox {
	position: absolute;
	left: 10px;
	top: 0;
	width: 30px;
	float: left;
	display: block;
	padding: 15px 0 10px;
}

#cart1 .w .cart_wrap .cart_list .cart_tbody .item_list .item_single .item_form .p_goods {
	float: left;
	width: 300px;
	padding: 15px 0 10px;
}

#cart1 .w .cart_wrap .cart_list .cart_tbody .item_list .item_single .item_form .p_goods .p_img {
	float: left;
}

#cart1 .w .cart_wrap .cart_list .cart_tbody .item_list .item_single .item_form .p_goods .p_name {
	float: left;
	width: 120px;
}

#cart1 .w .cart_wrap .cart_list .cart_tbody .item_list .item_single .item_form .p_goods .p_name .p_title {
	width: 220px;
	float: left;
	color: #333;
	margin-bottom: 10px;
}

#cart1 .w .cart_wrap .cart_list .cart_tbody .item_list .item_single .item_form .p_goods .p_name p {
	color: #6679b3;
}

#cart1 .w .cart_wrap .cart_list .cart_tbody .item_list .item_single .item_form .p_props {
	width: 160px;
	height: 80px;
	line-height: 20px;
	padding: 15px 10px 0;
	overflow: hidden;
	float: left;
}

#cart1 .w .cart_wrap .cart_list .cart_tbody .item_list .item_single .item_form .p_price {
	width: 120px;
	height: 20px;
	line-height: 20px;
	text-align: right;
	padding-right: 40px;
	font-family: verdana;
	padding: 15px 0 10px;
	overflow: hidden;
	float: left;
	padding-right: 40px;
}

#cart1 .w .cart_wrap .cart_list .cart_tbody .item_list .item_single .item_form .p_tity {
	width: 80px;
	float: left;
	padding: 15px 0 10px;
	line-height: 20px;
}

#cart1 .w .cart_wrap .cart_list .cart_tbody .item_list .item_single .item_form .p_tity .tity_form {
	width: 80px;
	height: 22px;
	position: relative;
}

#jian {
	border: 1px solid #cacbcb;
	border-right: 0;
	height: 18px;
	width: 16px;
	text-align: center;
	color: #666;
	margin: 0;
	background: #fff;
	padding: 1px 0;
	line-height: 18px;
	float: left;
}

#cart1 .w .cart_wrap .cart_list .cart_tbody .item_list .item_single .item_form .p_tity .tity_form input {
	float: left;
	border: 1px solid #cacbcb;
	width: 42px;
	height: 18px;
	text-align: center;
	padding: 1px;
	font-size: 12px;
	font-family: verdana;
	color: #333;
}

#jia {
	border: 1px solid #cacbcb;
	border-left: 0;
	height: 18px;
	width: 16px;
	text-align: center;
	color: #666;
	margin: 0;
	background: #fff;
	padding: 1px 0;
	line-height: 18px;
	float: left;
}

#cart1 .w .cart_wrap .cart_list .cart_tbody .item_list .item_single .item_form .p_sum {
	width: 100px;
	padding-right: 40px;
	text-align: right;
	font-family: verdana;
	float: left;
	padding: 15px 0 10px;
	padding-right: 40px;
}

#cart1 .w .cart_wrap .cart_list .cart_tbody .item_list .item_single .item_form .p_ops {
	width: 75px;
	float: left;
	padding: 15px 0 10px;
}

#cart1 .w .cart_wrap .options_box {
	position: relative;
	height: 50px;
}

#cart1 .w .cart_wrap .options_box .select_all {
	height: 18px;
	line-height: 18px;
	padding: 16px 0 16px 9px;
	float: left;
	white-space: nowrap;
}

#cart1 .w .cart_wrap .options_box .select_all input {
	float: left;
	margin-top: 3px;
}

#cart1 .w .cart_wrap .options_box .shanchu {
	float: left;
	line-height: 50px;
	color: #666;
	padding-left: 50px;
}

#cart1 .w .cart_wrap .options_box .sum {
	height: 44px;
	float: left;
	line-height: 44px;
	margin-left: 413px;
}

#cart1 .w .cart_wrap .options_box .sum span {
	color: red;
	font-weight: 700;
}

#cart1 .w .cart_wrap .options_box .zong {
	white-space: nowrap;
	float: left;
	height: 44px;
	line-height: 55px;
	margin-left: 50px;
}

#cart1 .w .cart_wrap .options_box .zong strong {
	color: #e4393c;
	font-size: 18px;
}

#cart1 .w .cart_wrap .options_box .cart_btn {
	width: 96px;
	height: 52px;
	background: #e4393c;
	line-height: 52px;
	text-align: center;
	float: right;
}

#cart1 .w .cart_wrap .options_box .cart_btn a {
	color: white;
	font-size: 16px;
	font-weight: 700;
}


/*-m1-*/

#m1 {
	width: 1172px;
	height: 359px;
	margin: 0 auto;
}

#m1 .extra_l {
	height: 23px;
	line-height: 23px;
	margin: 15px 0;
}

#m1 .extra_l .sui a {
	color: #666;
	font-size: 14px;
	padding: 10px 0;
	border-bottom: 2px solid #e4393c;
	margin-left: 20px;
}

#m1 .extra_l .sui a:hover {
	color: #e4393c;
}

#m1 .goods_list {
	width: 1172px;
	height: 305px;
	overflow: hidden;
}

#m1 .goods_list ul li {
	text-align: center;
	float: left;
	width: 264px;
	height: 305px;
	margin: 0 1%;
}

#m1 .goods_list ul li .item {
	padding: 19px;
	background: #fff;
	border: 1px dashed #cacaca;
	width: 206px;
	position: relative;
	height: 264px;
}

#m1 .goods_list ul li .item .item_img {
	width: 160px;
	margin: 0 auto;
}

#m1 .goods_list ul li .item .item_p {
	height: 36px;
	line-height: 18px;
	margin: 5px 0;
	overflow: hidden;
}

#m1 .goods_list ul li .item .item_p a {
	color: #333;
}

#m1 .goods_list ul li .item .item_price {
	width: 100%;
	text-align: center;
	margin: 5px 0 ;
	color: red;
	font-size: 12px;
}

#m1 .goods_list ul li .item .item_btn {
	margin: 15px 0 0;

	width: 122px;
	margin: 0 auto;
}

#m1 .goods_list ul li .item .item_btn a {
	display: inline-block;
	height: 28px;
	line-height: 28px;
	text-align: center;
	padding: 0 20px;
	border: 1px solid #999;
	border-radius: 3px;
	color: #666;
}

#m1 .goods_list ul li .item .item_btn a:hover {
	color: red;
}


/*---toolbar----*/

#toolbar .toolbar_wrap {
	width: 0;
	height: 100%;
	z-index: 9990;
	position: fixed;
	right: 0;
	top: 0;
}

#toolbar .toolbar_wrap .wrap_right {
	position: absolute;
	right: 0;
	top: 0;
	width: 0;
	height: 100%;
	border-right: 6px solid #7a6e6e;
	transition: right .3s ease-in-out 0s;
}

#toolbar .toolbar_wrap .wrap_right .toolbar_tab {
	width: 35px;
	position: absolute;
	top: 50%;
	left: -29px;
	margin-top: -61px;
}

#toolbar .toolbar_wrap .wrap_right .toolbar_tab div {
	width: 35px;
	height: 35px;
	background: #7a6e6e;
	border-bottom: 1px solid white;
	cursor: pointer;
	position: relative;
	border-radius: 3px 0 0 3px;
	cursor: pointer;
}

#toolbar .toolbar_wrap .wrap_right .toolbar_tab div img {
	width: 19px;
	height: 19px;
	position: absolute;
	left: 8px;
	top: 8px;
}

#toolbar .toolbar_wrap .wrap_right .toolbar_tab div em {
	width: 62px;
	height: 35px;
	cursor: pointer;
	color: white;
	background: #7a6e6e;
	z-index: 1;
	line-height: 35px;
	position: absolute;
	left: 35px;
	top: 0;
	text-align: center;
	border-radius: 3px 0 0 3px;
	font-size: 12px;
	font-family: "微软雅黑";
	-webkit-transition: left .3s ease-in-out .1s;
}

#toolbar .toolbar_wrap .wrap_right .toolbar_tab div:hover {
	background: #b61d1d;
}

#toolbar .toolbar_wrap .wrap_right .toolbar_tab div:hover em {
	position: absolute;
	left: -62px;
	background: #b61d1d;
}
* {
    margin: 0 auto;
    padding: 0;
}

img {
    border: none;
}

ul, ol, li{
    list-style: none;
}

a {
    text-decoration: none;
}

a:hover {
    color: yellow;
}
.clear{zoom:1;}
.clear:after{content:"";display:block;clear:both;}


-webkit-transition: all 2s;
-moz-transition: all 2s;
-ms-transition: all 2s;
-o-transition: all 2s;

#margin{
		width:1349px;
		position: relative;
	}
/*--------------------------左下送终鸡-----------------------------*/
	/*.szj*/
		.ai {
			position: absolute;
			left: 130px;
			top:-130px;
		}
		.ai img {
			vertical-align: middle;
			border: 0;
			width: 181px;
			height: 173px;
			z-index: 501;
			
		}
		.ai .close {
			width:30px;
			height:30px;
			position: absolute;
			right: 0px;
			bottom: 0px;
			z-index: 502;
		}
		.szj{
			position:fixed;
			left: 20px;
			bottom:20px;
			z-index: 501;
		}
		.szj .download{
			position: absolute;
			bottom: 0;
			width: 149px;
			height: 40px;
			left: 17px;
			color: #000;
			z-index: 501;
		}
/*------------------------------------签到遮罩------------------------------------*/
		.appwrap {
			position: fixed;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			background: rgba(29,29,29,0.5);
			z-index: 3000;
		}
		.signme {
			width: 560px;
			height: 400px;
			background: #fff;
			z-index: 9999;
			position: relative;
			margin: 0 auto;
			top: 150px;
			border-radius: 18px;
		}
		.downapp {
			text-align: center;
			padding-top: 38px;
			font-family: "microsoft yahei";
			font-size: 24px;
			color: #666;
			z-index: 3000;
		}
		.signme .closeapp {
			width: 40px;
			height: 48px;
			background: url(../../imgs/trangle@1x.png) 0 0 no-repeat;
			display: inline-block;
			z-index: 9999;
			position: absolute;
			top: 0;
			right: 0;
			border-top-right-radius: 18px;
		}
		.signme .closeicon {
			width: 40px;
			height: 48px;
			background: url(../../imgs/closeicon@1x.png) 0 0 no-repeat;
			display: inline-block;
			z-index: 9999;
			position: absolute;
			top: 0;
			right: 0;
			margin: 10px -17px;
		}
		.signme .qrcode {
			width: 200px;
			height: 203px;
			background: url(../../imgs/qrcode@1x.jpg) 0 0 no-repeat;
			display: inline-block;
			position: relative;
			top: 36px;
			left: 180px;
			background-size: 100%;
		}
		.signme p {
			font-family: "microsoft yahei";
			font-size: 18px;
			position: relative;
			text-align: center;
			top: 50px;
			height: 19px;
		}
		.MErule {
			z-index: 9999;
			position: relative;
			top: 80px;
		}

    
/*----------------------------网页底部----------------------------*/
	#select {
	    width: 1349px;
	    height: 190px;
	    text-align: center;
	    
	    
	}
	
	#select dl {
		background-color: #f3f1f2;
	    float: left;
	    padding-left: 15px;
	    width: 322px;
	    height: 190px;
	}
	
	#select dl dt img {
	    display: block;
	    margin-top: 40px;
	}
	
	#select dl dd a {
		text-align: center;
	    display: block;
	    margin-top: 10px;
	    font-size: 20px;
	    font-weight: bold;
	    color: black;
	    position: relative;
	}
	
	
	#select dl dd a:hover {
	    color: red;
	}
	
	#bottom {
	    float: left;
	    width: 1349px;
	    height: 325px;
	    border-bottom: 1px solid gainsboro;
	}
	
	#bottom .bottom-1 {
	    width: 400px;
	    float: left;
	    height: 325px;
	    text-align: center;
	}
	
	#bottom .bottom-2 {
	    width: 872px;
	    float: left;
	    height: 325px;
	    text-align: center;
	}
	
	#bottom .bottom-2 dl {
	    width: 214px;
	    float: left;
	    text-align: center;
	    margin-top: 40px;
	}
	
	#bottom .bottom-2 .dl-1 {
	    height: 150px;
	    border-left: 1px solid gainsboro;
	}
	
	#bottom .bottom-2 .dl-2 {
	    height: 250px;
	    border-left: 1px solid gainsboro;
	}
	
	#bottom .bottom-2 .dl-3 {
	    height: 111px;
	    border-left: 1px solid gainsboro;
	}
	
	#bottom .bottom-2 .dl-4 {
	    height: 145px;
	    border-left: 1px solid gainsboro;
	}
	
	#bottom .bottom-2 dl dt a {
	    font-size: 20px;
	    color: black;
	    font-weight: bold;
	}
	
	#bottom .bottom-2 dl dd a {
	    display: block;
	    font-size: 16px;
	    color: black;
	    line-height: 35px;
	    margin-top: 10px;
	}
	
	#bottom .bottom-2 dl a:hover {
	    color: red;
	}
	
	#phone {
	    width: 1349px;
	    height: 80px;
	    float: left;
	    text-align: center;
	    border-bottom: 1px solid gainsboro;
	}
	
	#phone p {
	    margin-top: 15px;
	    font-size: 16px;
	    color: black;
	    font-weight: bold;
	    line-height: 30px;
	}
	
	#phone span {
	    margin-left: 30px;
	}
	
	#copy {
	    width: 1349px;
	    height: 52px;
	    float: left;
	}
	
	#copy .copy-1 {
	    float: left;
	    width: 580px;
	    line-height: 52px;
	    height: 52px;
	    text-align: center;
	}
	
	#copy .copy-2 {
	    padding-left: 52px;
	    float: left;
	    width: 640px;
	    line-height: 52px;
	    height: 52px;
	    background: url(../../imgs/icon.gif) no-repeat center left;
	}
	
	#copy p {
	    font-size: 12px;
	}
	
	
/*---------------------------侧边栏-------------------------------*/
/*aside*/	
		#aside{
			position:fixed;
			width:40px;
			height:100%;
			opacity: 0.8;
			background:#b7abab;
			right:0;
			top:0;
			display:block;
			z-index: 400;
		}
		#aside .cart {
		position: absolute;
		width: 40px;
		height: 100%;
		background: rgba(3,3,3,0.5);
		z-index: 400;
	}
	
	#aside .cart ul li:hover {
		background: #ed145b;
	}
	
	#aside .cart ul .me-cart {
		height: 110px;
		padding-bottom: 20px;
		position: relative;
		display: block;
		top: 120px;
	}
	
	#aside .cart ul .me-cart .me-smallIcon {
		position: absolute;
		width: 38px;
		height: 26px;
		background: url("../../imgs/carts.png") no-repeat 6px 4px;
		display: inline-block;
		top: 22px;
		left: 1px;
	}
	
	#aside .cart ul .me-cart .buy {
		position: absolute;
		top: 16px;
		width: 16px;
		display: block;
		height: 48px;
		margin: 38px 0 0 14px;
		cursor: pointer;
		color: #fff;
	}
	
	#aside .cart ul .me-cart .cart-num {
		position: absolute;
		top: 106px;
		width: 21px;
		height: 21px;
		display: block;
		border-radius: 50%;
		background: #f0f;
		text-align: center;
		line-height: 21px;
		margin: 9px 0px 0px 10px;
		cursor: pointer;
		color: #fff;
		visibility: hidden;
	}
	
	#aside .cart ul .me-login {
		position: relative;
		display: block;
		height: 40px;
		padding-bottom: 6px;
		z-index: 1;
	}
	
	#aside .cart ul .me-login {
		position: relative;
		display: block;
		top: 150px;
		height: 40px;
	}
	
	#aside .cart ul .me-login .userIcon {
		position: absolute;
		width: 34px;
		height: 22px;
		background: url("../../imgs/carts.png") no-repeat -25px 1px;
		display: inline-block;
		top: 12px;
		left: 2px;
	}
	
	#aside .cart ul .me-favorite {
		position: relative;
		display: block;
		top: 160px;
		height: 40px;
		margin-top: 6px;
	}
	
	#aside .cart ul .me-favorite .favoriteIcon {
		position: absolute;
		width: 34px;
		height: 22px;
		background: url("../../imgs/carts.png") no-repeat -52px 1px;
		display: inline-block;
		top: 10px;
		left: 2px;
	}
	
	#aside .cart ul .mbar-center {
		position: relative;
		display: block;
		top: 170px;
		height: 40px;
		margin-top: 6px;
	}
	
	#aside .cart ul .mbar-center .assetIcon {
		position: absolute;
		width: 32px;
		height: 24px;
		background: url("../../imgs/carts.png") no-repeat -79px 1px;
		display: inline-block;
		top: 8px;
		left: 3px;
	}
	
	#aside .cart ul .me-support {
		position: relative;
		display: block;
		top: 250px;
		height: 40px;
		margin-top: 6px;
	}
	
	#aside .cart ul .me-support .supportIcon {
		position: absolute;
		width: 32px;
		height: 24px;
		background: url("../../imgs/carts.png") no-repeat -106px 1px;
		display: inline-block;
		top: 8px;
		left: 2px;
	}
	
	#aside .cart ul .me-gotop {
		position: relative;
		display: block;
		top: 260px;
		height: 40px;
		margin-top: 6px;
	}
	
	#aside .cart ul .me-gotop .gotopIcon {
		position: absolute;
		width: 32px;
		height: 28px;
		background: url("../../imgs/carts.png") no-repeat 3px -29px;
		display: inline-block;
		top: 8px;
		left: 3px;
	}



@charset "utf-8";
/* CSS Document */
body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select,td,figure{margin:0;padding:0;}
body{font:12px  "微软雅黑"; word-wrap:break-word;}
a,u,s{color:#666;text-decoration:none}
fieldset ,a img,.bor0 {border:0;}
i,em,b{font-style:normal;font-weight:100;}
li{list-style:none;}
img{vertical-align:middle}
table{border-collapse:collapse;}
.ind2{text-indent:2em}
input,textarea{outline:none;}
.cu{cursor:pointer;}


.over{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
.vcenter{vertical-align:middle;width:0;height:100%;display:inline-block;}
.clear{zoom:1;}
.clear:after{content:"";clear:both;display:block;height:0;overflow:hidden; visibility:hidden;}
.l{float:left;}
.r{float:right;}



.margin{margin:0 auto;width:990px;}








@charset "utf-8";
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td{margin:0;padding:0;}
h1,h2,h3,h4,h5,h6{ font-weight: normal;}
li { list-style: none; }
i{font-style: normal;}
input,
select,
textarea { outline: none; border: none; background: none; border-radius: 0;
  -webkit-border-radius: 0;
  background-image: -webkit-linear-gradient(transparent, transparent);
  background-image: linear-gradient(transparent, transparent);
  font-family:"Helvetica", "Arial";
}
textarea { resize: none; }
article， aside， details， figcaption， figure， footer， header， hgroup， menu， nav， section { display: block; }
/*img { display: block;  height:auto; vertical-align:top; }*/
.video embed， .video object， .video iframe { width: 100%; height: auto; }
a { border:0; text-decoration: none; outline: none;}
a,button,input{-webkit-tap-highlight-color:rgba(255,0,0,0);}
em{ font-style: normal;}
body{font:12px/150% Arial,Verdana,"\5b8b\4f53";color:#666;background:#fff;-webkit-font-smoothing:antialiased}

a{color: #666; }
i{cursor: default;}
.redcolor{
	color:#c81623 !important;
}

.w{
	width: 1172px;
	margin: 0 auto;
}
.header{
	padding: 15px 0 10px 0;
	overflow: hidden;
}

.header .logo{
	width: 270px;
	padding-left: 5px;
	position: relative;
	float: left;
}
.header .logo .link1{
	display: block;
}

.header .logo .link2{
	position: absolute;
	right: 0;
	top: 10px;
	background: white;
}

.link2 b{
	display: block;
	width: 100px;
	height: 40px;
	
}

.cart-search{
	float: right;
	border: 2px solid #c91623;
	
	height: 24px;
	margin-top: 20px;
	overflow: hidden;
}

.cart-search #search{
	width: 260px;
	height: 18px;
	padding: 3px 5px;
	color: rgb(153, 153, 153);
	float: left;
}

.cart-search #btn{
	width: 48px;
	height: 24px;
	float: left;
	background: #c91623;
	color: white;
	text-align: center;
	font-weight: 700;
}

.empty-cart{
	height: 98px;
    padding: 80px 0 120px;
    color: #333;
}

.empty-cart-msg{
	height: 98px;
	line-height: 20px;
	font-size: 14px;
    padding-left: 341px;
    padding-top: 25px;

}
.empty-cart-msg a{
	display: block;
	color: #005ea7;
}



.cart-top{
	margin-top: 10px;
}

.cart-top-left{
	height: 26px;
	font-size: 16px;
	line-height: 36px;
	float: left;
	font-weight: 700;
}

.cart-top-left a{
	color: #e4393c;
}

.cart-top-left a em{
	margin-right: 5px;
}

.cart-top-right{
	float: right;
	margin-bottom: 10px;
}
.cart-top-right span{
	height: 26px;
	line-height: 26px;
	float: left;
}

.cart-top-right .jdarea{
	height: 26px;
	float: left;
}

.jdarea .areawrap{
	float: left;
	position: relative;
	top: 0;
	height: 23px;
	background: #fff;
	border: 1px solid #CECBCE;
	padding: 0 20px 0 4px;
	line-height: 23px;
	overflow: hidden;
	
}

.areawrap b{
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	width: 17px;
	height: 24px;

	background-position: 0 0;
	overflow: hidden;
}

.cart-top .footline{
	clear: both;
	height: 1px;
	background: #e0e0e0;
	position: relative;
}

.cart-wrap{
	background: #fff;
	margin-bottom: 20px;
}

.cart-thead{
	height: 34px;
	line-height: 34px;
	margin: 0 0 20px;
	padding: 6px 0;
	background: #f3f3f3;
	border: 1px solid #e9e9e9;
	border-top: 0;
}

.cart-col{
	float: left;
}
.t-checkbox{
	height: 18px;
	line-height: 18px;
	padding-top: 7px;
	width: 122px;
	padding-left: 11px;
}

.cart-checkbox input{
	background: #FD49AC;
	margin-right: 35px;
}
.t-goods{
	width: 64px;
	margin-left: 413px;
}

.t-prices{
	width: 112px;
	padding-right: 40px;
	text-align: right;
	height: 32px;
}

.t-quantity{
	text-align: center;
	width:170px;
}

.t-sum{
	width: 68px;
	padding-right: 111px;
	text-align: right;
}

.cart-item-list{
	margin-bottom: 20px;
}

.cart-item-list .shop{
	height: 30px;
	line-height: 30px;
	padding-left: 11px;
	font-weight: 700;
}
.shop1 .cart-checkbox{
	margin-left: 11px;
	float: left;
}

.shop1 .shop-info{
	float: left;
	width: 538px;
}

.shop1 .shop-ex {
	margin: 5px 0;
}
.shop1 .shop-ex .radioIcon {
		background: url(../../imgs/mbar-smallICon.png) no-repeat 3px -60px;
		width: 20px;
		height: 24px;
		display: inline-block;
		margin-right: 5px;
		vertical-align: middle;
}
.shop1 .shop-ex .local-store {
		color: #6699ff;
		padding: 0 5px;
		font-size: 20px;
		line-height: 20px;
}
.shop1 .shop-ex .local-tips {
		color: #6699ff;
		padding: 0 5px;
		font-size: 14px;
}



.item-list{
	border-width: 2px 1px 1px;
	border-color: #aaa #f1f1f1 #f1f1f1;
	background: #fff;
	margin-top: 21px;
}


.item-head .header-left{
	width: 750px;
	line-height: 26px;
	float: left;
}

.header-left-p1{
	color: #666;
}
.header-left-p1 span{
	margin: 0 10px 0 5px;
	padding: 1px 10px;
	border: 1px solid #f48719;
	background: #f48719;
	color: white;
	position: relative;
}

.header-left-p1 span b{
	position: absolute;
	display: block;
	width: 5px;
	height: 6px;
	left: -1px;
	bottom: -5px;

}

.header-left-p2{
	margin-left: 20px;
	padding: 0 5px;
	border-radius: 2px;
	background: #e74649;
	color: white;
	display: inline-block;
	height: 19px;
	line-height: 19px;
}

.header-price{
	width: 100px;
	float: left;
	text-align: right;
}

.goods-item{
	padding: 0 10px 0 40px;
	
	position: relative;
}

.goods-item-sele{
	border: 1px solid #e5e5e5;
}

.goods-info{
	border-top: 1px solid #f1f1f1;
	overflow: hidden;
}

.cell{
	float: left;
}

.b-checkbox{
	position: absolute;
	left: 10px;
	width: 30px;
	height: 20px;
	padding: 15px 0 10px 0;
	
}

.goods-item .cart-checkbox input{
	position: absolute;
	top: 45px;
	left: 0px;
	z-index: 2;
}
.operation {
	width: 80px;
	height: 18px;
}
 .operation .sIcon {
	display: inline-block;
	vertical-align: middle;
	background: url(../../imgs/mbar-smallICon.png) no-repeat 0px 0px ;
	height: 18px;
}

.cart-checkbox .line-circle{
	position: absolute;
	left: 2px;
	top: -5px;
	display: block;
	width: 7px;
	height: 29px;

}
.shop-ex {
	margin-left: 11px;
	width: 1164px;
}

.goods-item .b-goods{
	width: 300px;
	padding: 15px 0 10px 0;
}

.b-goods .goods-name .goods-pic{
	width: 82px;
	height: 82px;
	margin-right: 10px;
	border: 1px solid #eee;
	float: left;
}
.b-goods .goods-name .goods-pic img{
	width: 80px;
	height: 80px;
}
.goods-d-info{
	height: 40px;
	line-height: 20px;
	overflow: hidden;
}

.goods-ex{
	margin-top: 2px;
}

.goods-ex .promise{
	margin: 0 10px 0 0;
	display: block;
	min-height: 18px;
	line-height: 18px;
	margin-bottom: 2px;
}

.promise i{
	display: inline-block;
	width: 17px;
	height: 16px;

	vertical-align: middle;
}

.promise a{
	display: inline-block;
	padding: 1px 4px 0 7px;
	height: 15px;
	line-height: 15px;
	vertical-align: middle;
	
}

.b-props{
	height: 80px;
	padding: 15px 10px 0 10px;
	overflow: hidden;
}

.b-props .prop-text{
	margin-left: 180px;
	margin-top: 20px;
	width: 60px;
}

.b-price{
	width: 120px;
	margin-top: 20px;
	padding: 15px 40px 10px 0;
	overflow: hidden;
	text-align: right;
}

.b-price .sales-promotion{
	display: block;
	margin-top: 20px;
	width: 53px;
	border: 1px solid #f9d2d3;
	color: #e4393c;
	height: 18px;
	text-align: left;
	line-height: 17px;
	padding: 0 15px 0 8px;
	cursor: pointer;
	background: #fff;
	text-decoration: none;
	float: right;
	overflow: hidden;
	position: relative;
}

.sales-promotion b{
	display: inline-block;
	width: 7px;
	height: 4px;
	position: absolute;
	right: 8px;
	top: 8px;

}

.b-quantity{
	width: 80px;
	padding: 15px 0 10px;
}

.b-quantity .quantity-form{
	margin-top: 20px;
	position: relative;
	overflow: hidden;
	height: 20px;
	border: 1px solid #cacbcb;
}

.quantity-form a{
	display: inline-block;
	height: 18px;
	line-height: 18px;
	padding: 1px 0;
	width: 16px;
	text-align: center;
	color: #666;
	margin: 0;
	background: #fff;
	float: left;
}
.quantity-form .quantity-down{
	border-right: 1px solid #cacbcb;
}

.quantity-form .quantity-add{
	border-left: 1px solid #cacbcb;
}


.quantity-form input{
	width: 44px;
	height: 22px;
	float: left;
	text-align: center;
	background: white;
}

.quantity-text{
	text-align: center;
	height: 20px;
	line-height: 20px;
}

.b-sum{
	margin-top: 20px;
	margin-right: 37px;
	color: #f00;
	width: 100px;
	height: 20px;
	padding: 15px 0 15px 80px;
	text-align: right;
}
.b-sum strong{
	color: #f00;
	font-weight: 700;
	font-size: 14px;

}

.b-action{
	margin-left: 55px;
	margin-top: 20px;
	padding: 15px 0 10px 0;
}

.b-action a{
	display: block;
	width: 26px;
	height: 20px;
}

#cart-floatbar{
	width: 1172px;
	height: 50px;
	border: 1px solid #e5e5e5 ;
	background: #f5f5f5;
	position: relative;
}

.select-all{
	float: left;
	height: 18px;
	line-height: 18px;
	padding: 16px 0 16px 9px;
}

.operation{
	float: left;
	height: 50px;
	width: 310px;
	line-height: 50px;
}

.operation a{
	margin-left: 20px;
	display: inline-block;
	height: 50px;
}

.toolbar-right{
	overflow: hidden;
}

.toolbar-right .btn-area{
	float: right;
	
}

.btn-area a{
	display: block;	
	width: 96px;
	height: 52px;

	
}

.price-sum{
	float: right;
	height: 43px;
	line-height: 20px;
	margin: 16px 20px 0 10px;
	color: #666;
	width: 220px;
}

.price-sum span{
	display: inline-block;
	width: 110px;
	height: 20px;
	float: left;
	text-align: left;
}

.price-sum .txt{
	text-align: right;
}

.price-sum .totalprice{
	font-size: 18px;
	color: #e4393c;
	font-weight: 700;
}

.amount-sum{
	float: right;
	color: #999;
	height: 44px;
	line-height: 20px;
	margin: 16px 0 0;
	cursor: pointer;
}

.amount-sum em{
	color: #e4393c;
	font-family: verdana;
	font-weight: 700;
	margin: 0 3px;
}

.amount-sum b{
	display: inline-block;
	width: 9px;
	height: 5px;
	vertical-align: middle;

}
.go-sum {
	float: right;
	width: 100px;
	height: 50px;
	text-align: center;
	line-height: 50px;
	font-size: 18px ;
	background: #ff5073;
	color: #fff;
}

.tab .mt{
	margin-bottom: 10px;
	height: 23px;
	line-height: 23px;
}

.mt .tab-item{
	display: inline-block;
	height: 18px;
	margin-right: 35px;
	padding-bottom: 3px;
	border-bottom: 2px solid #fff;
		
}
.mt .curr{
	color: #e4393c;
	font-weight: 700;
	border-color: #e4393c;
}




.mc{
	height: 326px;
	position: relative;
}

.mc .guess-products{
	position: absolute;
	width: 100%;
	height: 100%;
}

.mc .guess-products .goods-list-tab{
	position: absolute;
	right: 0;
	top: -26px;
	width: 60px;
}

.goods-list-tab .s-item{
	display: inline-block;
	width: 8px;
	height: 8px;
	margin-left: 3px;
	overflow: hidden;
	background: #aaa;
	border-radius: 4px;
}
/*
.s-item:hover{
		width: 26px;
	background: #e4393c;
}*/

.goods-list-tab .tab-selected{
	width: 26px;
	background: #e4393c;
}

.guess-products .panel-main{
		width: 100%;
	height: 100%;
}


.guess-products .panel-main .goods-list{
	width: 100%;
	height: 100%;
	position: absolute;
}

.goods-list ul{
	width: 100%;
	height: 100%;
	overflow: visible;
}

.goods-list ul li{
	float: left;
}

.goods-list ul li .goodsinfo{
	position: relative;
	width: 238px;
	padding: 27px;
	margin-bottom: 20px;
	background: #fff;
	margin: -1px 0 0 -1px;
	border: 1px dashed #cacaca;
	overflow: hidden;
}

.goods-list ul li .goodsinfo:hover{
	z-index: 2;
	border: 1px solid #E4393C;
}

.p-img{
	width: 160px;
	margin: 0 auto;
}
.goodsinfo .p-img img{
	vertical-align: middle;
	width: 160px;
	height: 160px;
	
}

.p-name{
	height: 36px;
	line-height: 18px;
	margin: 5px 0;
	overflow: hidden;
}

.p-price{
	width: 100%;
	margin: 5px 0 2px;
	overflow: hidden;
	text-align: center;
}
.p-price strong{
	font-size: 14px;
	color: #d91f20;
	font-family: verdana;
	font-weight: 400;
}

.p-btn{
	margin: 10px 0 0;
	text-align: center;
}

.p-btn a{
	display: inline-block;

	height: 28px;
	line-height: 28px;
	padding: 0 20px;
	border: 1px solid #999;
	color: #666;
	text-align: center;

	border-radius: 3px;
}

.p-btn a:hover{
	border: 1px solid #E4393C;
	background: #E4393C;
	color: white;
}

.p-btn a:hover b{

}
.p-btn b{
	display: inline-block;
	height: 18px;
	width: 18px;
	margin-right: 5px;

	overflow: hidden;
	vertical-align: middle;
}

.favorite-products{
	position: absolute;
	width: 100%;
	height: 100%;
	display: none;
}

.favorite-products .favorite-products-main{
	margin-top: 10px;
	text-align: center;
	line-height: 326px;
}

.history-products{
	position: absolute;
	width: 100%;
	height: 100%;
	display: none;
}


.slider-page-btn{
	display: none;
}
.slider-page-btn a{
	position: absolute;
	display: block;
    top: 50%;
    margin-top: -31px;
    z-index: 3;
    display: block;
    width: 28px;
    height: 62px;
    line-height: 62px;
    background: gray;
    background: rgba(0,0,0,.2);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#32000000, endColorstr=#32000000);
    color: #fff;
    text-align: center;
    font-size: 22px;
    font-weight: 400;
    font-family: simsun;
}

.left-btn{
	left: 0;
}
.right-btn{
	right: 0;
}
@charset "UTF-8";
/*
* @Author: Marte
* @Date:   2017-03-08 10:32:17
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-15 15:45:05
*/
#header {
  background: #eeeeee;
  width: 100%;
  height: 24px;
  border-bottom: 1px solid #e5e5e5; }
  #header .special {
    color: #ff6600;
    margin-right: 16px;
    margin-left: 0px; }
  #header ul {
    margin-left: 222px; }
  #header i {
    margin-left: 8px; }
  #header li {
    float: left;
    border-left: 1px solid #e2e2e2;
    border-right: 1px solid #e2e2e2;
    height: 16px;
    margin-top: 2px; }
    #header li a {
      margin-left: 15px; }
    #header li .qq {
      display: inline-block;
      width: 17px;
      height: 18px;
      background: url(../img/head_2013_v2.png) no-repeat -12px -35px;
      float: left;
      margin-left: 15px; }
  #header .first {
    width: 180px;
    border-left: 0; }
  #header .child_2 {
    width: 100px; }
  #header .child_3 {
    background: url(../img/head_2013_v2.png) no-repeat -366px 1px;
    width: 100px;
    margin-left: 15px; }
  #header .child_4 {
    width: 90px; }
  #header .child_5 {
    width: 110px; }
    #header .child_5 a {
      margin-left: 6px; }
  #header .child_6 {
    width: 154px;
    background: url(../img/201403041003.png) no-repeat 15px; }

#search {
  height: 78px; }
  #search .sub {
    overflow: hidden;
    float: left; }
    #search .sub .sub_input {
      float: left;
      margin: 16px 0 0 32px; }
      #search .sub .sub_input .top .src {
        width: 267px;
        height: 26px;
        border: 0;
        border: 2px solid #d5d5d5;
        padding-left: 5px; }
      #search .sub .sub_input .top .btn {
        width: 64px;
        height: 30px;
        background: #444444;
        color: #fff;
        border: 0;
        cursor: pointer;
        margin-left: -5px; }
      #search .sub .sub_input .bottom {
        margin-top: 8px; }
        #search .sub .sub_input .bottom a {
          margin-left: 8px; }
        #search .sub .sub_input .bottom span {
          color: #ccd9e0; }
    #search .sub .shopping {
      float: left;
      width: 126px;
      height: 34px;
      margin: 20px 0 0 70px;
      background: url(../img/head_cart_bg.gif) no-repeat; }
      #search .sub .shopping a {
        margin: 10px 0 0 46px;
        display: inline-block;
        color: #666679; }
        #search .sub .shopping a i {
          color: #cc0000; }
    #search .sub .shopping:hover {
      float: left;
      width: 126px;
      height: 34px;
      margin: 20px 0 0 70px;
      background: url(../img/head_cart_bg.gif) no-repeat 0 -34px; }
      #search .sub .shopping:hover span {
        margin: 10px 0 0 46px;
        display: inline-block;
        color: #fff; }
        #search .sub .shopping:hover span i {
          color: #cc0000; }
  #search .logo {
    float: left; }

#nav {
  height: 34px;
  width: 100%;
  background: #a21f25;
  overflow: hidden; }
  #nav .nav_first {
    width: 188px;
    height: 34px;
    background: #b9363d;
    color: #fff;
    text-align: center;
    line-height: 32px;
    float: left;
    cursor: pointer; }
  #nav .nav_second {
    float: left; }
    #nav .nav_second a {
      display: block;
      float: left;
      font-size: 14px;
      padding: 0 18px;
      line-height: 34px;
      height: 34px;
      text-decoration: none;
      color: #FFF;
      background: url(../img/line.png) no-repeat 0 center;
      cursor: pointer; }
    #nav .nav_second a:hover {
      background: #444444; }
    #nav .nav_second .hover {
      background: #444444; }
  #nav .nav_last {
    float: right; }
    #nav .nav_last a {
      font-size: 12px;
      padding: 0 10px;
      color: #f6e9ea;
      border-right: 1px solid #d18f92;
      height: 14px;
      line-height: 14px;
      margin-top: 11px;
      float: left; }
    #nav .nav_last .yellow {
      color: #ffcc00; }

#nav_menu {
  width: 190px;
  height: 385px;
  background: #000;
  position: absolute;
  top: 137px;
  left: 180px;
  display: none; }
  #nav_menu li {
    height: 43px; }
    #nav_menu li a {
      color: #fff;
      line-height: 43px;
      margin-left: 5px; }
    #nav_menu li i {
      display: inline-block;
      width: 33px;
      height: 43px;
      margin-right: 5px;
      text-align: right;
      text-decoration: none;
      font-size: 16px;
      float: left; }
    #nav_menu li .menu_1 {
      background: url(../img/navcats_icon.png) no-repeat 12px -50px; }
    #nav_menu li .menu_2 {
      background: url(../img/navcats_icon.png) no-repeat 12px -95px; }
    #nav_menu li .menu_3 {
      background: url(../img/navcats_icon.png) no-repeat 12px -140px; }
    #nav_menu li .menu_4 {
      background: url(../img/navcats_icon.png) no-repeat 12px -190px; }
    #nav_menu li .menu_5 {
      background: url(../img/navcats_icon.png) no-repeat 12px -235px; }
    #nav_menu li .menu_6 {
      background: url(../img/navcats_icon.png) no-repeat 12px -280px; }
    #nav_menu li .menu_7 {
      background: url(../img/navcats_icon.png) no-repeat 12px -330px; }
    #nav_menu li .menu_8 {
      background: url(../img/navcats_icon.png) no-repeat 12px -465px; }
    #nav_menu li .menu_9 {
      background: url(../img/navcats_icon.png) no-repeat 12px -425px; }

#banner {
  height: 1020px;
  background: url(../img/TB2WjiohhtmpuFjSZFqXXbHFpXa-156043745.jpg) no-repeat center; }
  #banner #back {
    height: 1020px;
    position: relative; }
    #banner #back .sign {
      width: 1191px;
      height: 190px;
      background: #ddd;
      position: absolute;
      bottom: 30px;
      left: -100px; }
      #banner #back .sign a {
        display: inline-block;
        float: left;
        width: 169px;
        height: 93px;
        border: 1px solid #DFDFDF;
        margin: 0 -1px -1px 0;
        overflow: hidden; }
      #banner #back .sign a:hover img {
        transform: translateY(-93px); }
    #banner #back .king {
      position: absolute;
      bottom: 180px;
      left: -140px; }
    #banner #back .xing {
      position: absolute;
      bottom: -5px;
      right: -145px; }

#classify {
  height: 716px;
  background: url(../img/TB2D7zff84lpuFjy1zjXXcAKpXa-156043745.jpg) no-repeat center; }
  #classify .sify_top {
    width: 1210px;
    height: 267px;
    background: #fff;
    margin: 0 auto;
    position: relative;
    margin-top: 0px; }
    #classify .sify_top .sify_left {
      float: left;
      border-right: 1px solid #e2e2e2; }
      #classify .sify_top .sify_left img {
        float: left;
        margin-top: -18px;
        left: 0px; }
      #classify .sify_top .sify_left .v_nav {
        width: 130px;
        height: 190px;
        float: left; }
        #classify .sify_top .sify_left .v_nav .nav1 {
          margin-top: 26px;
          width: 100%;
          height: 100%;
          cursor: pointer;
          width: 122px;
          height: 52px;
          background: url(../img/55fb74c7N22721289.png) no-repeat; }
        #classify .sify_top .sify_left .v_nav .nav2 {
          width: 100%;
          height: 100%;
          cursor: pointer;
          width: 122px;
          height: 52px;
          background: url(../img/55fb74dcN25fc100b.png) no-repeat; }
      #classify .sify_top .sify_left .menu {
        float: left;
        width: 161px;
        height: 265px; }
        #classify .sify_top .sify_left .menu ul {
          float: left;
          width: 60px;
          padding: 20px 0 0 10px; }
          #classify .sify_top .sify_left .menu ul h4 {
            font-size: 16px;
            line-height: 24px;
            color: #575757; }
          #classify .sify_top .sify_left .menu ul li a {
            display: inline-block;
            position: relative;
            font-size: 14px;
            line-height: 26px;
            outline: none;
            color: #575757;
            vertical-align: bottom;
            text-decoration: none;
            white-space: nowrap; }
          #classify .sify_top .sify_left .menu ul li a:hover {
            color: red; }
        #classify .sify_top .sify_left .menu .act {
          border-right: 1px solid #e2e2e2; }
    #classify .sify_top .sify_center {
      float: left;
      border-right: 1px solid #e2e2e2;
      margin-left: 5px;
      border-left: 1px solid #e2e2e2; }
      #classify .sify_top .sify_center img {
        float: left;
        margin-top: -18px;
        left: 0px; }
      #classify .sify_top .sify_center .v_nav {
        width: 130px;
        height: 190px;
        float: left; }
        #classify .sify_top .sify_center .v_nav .nav1 {
          margin-top: 26px;
          width: 100%;
          height: 100%;
          cursor: pointer;
          width: 122px;
          height: 52px;
          background: url(../img/55fb74c7N22721289.png) no-repeat; }
        #classify .sify_top .sify_center .v_nav .nav2 {
          width: 100%;
          height: 100%;
          cursor: pointer;
          width: 122px;
          height: 52px;
          background: url(../img/55fb74dcN25fc100b.png) no-repeat; }
      #classify .sify_top .sify_center .menu {
        float: left;
        width: 161px;
        height: 265px; }
        #classify .sify_top .sify_center .menu ul {
          float: left;
          width: 60px;
          padding: 20px 0 0 10px; }
          #classify .sify_top .sify_center .menu ul h4 {
            font-size: 16px;
            line-height: 24px;
            color: #575757; }
          #classify .sify_top .sify_center .menu ul li a {
            display: inline-block;
            position: relative;
            font-size: 14px;
            line-height: 26px;
            outline: none;
            color: #575757;
            vertical-align: bottom;
            text-decoration: none;
            white-space: nowrap; }
          #classify .sify_top .sify_center .menu ul li a:hover {
            color: red; }
        #classify .sify_top .sify_center .menu .act {
          border-right: 1px solid #e2e2e2; }
      #classify .sify_top .sify_center .on2 {
        display: none; }
    #classify .sify_top .sify_right {
      float: left;
      margin-left: 5px;
      border-left: 1px solid #e2e2e2; }
      #classify .sify_top .sify_right img {
        float: left;
        margin-top: -18px;
        left: 0px; }
      #classify .sify_top .sify_right .v_nav {
        width: 130px;
        height: 190px;
        float: left; }
        #classify .sify_top .sify_right .v_nav .nav1 {
          margin-top: 26px;
          width: 100%;
          height: 100%;
          cursor: pointer;
          width: 122px;
          height: 52px;
          background: url(../img/55fb74c7N22721289.png) no-repeat; }
        #classify .sify_top .sify_right .v_nav .nav2 {
          width: 100%;
          height: 100%;
          cursor: pointer;
          width: 122px;
          height: 52px;
          background: url(../img/55fb74dcN25fc100b.png) no-repeat; }
      #classify .sify_top .sify_right .menu {
        float: left;
        width: 161px;
        height: 265px; }
        #classify .sify_top .sify_right .menu ul {
          float: left;
          width: 60px;
          padding: 20px 0 0 10px; }
          #classify .sify_top .sify_right .menu ul h4 {
            font-size: 16px;
            line-height: 24px;
            color: #575757; }
          #classify .sify_top .sify_right .menu ul li a {
            display: inline-block;
            position: relative;
            font-size: 14px;
            line-height: 26px;
            outline: none;
            color: #575757;
            vertical-align: bottom;
            text-decoration: none;
            white-space: nowrap; }
          #classify .sify_top .sify_right .menu ul li a:hover {
            color: red; }
        #classify .sify_top .sify_right .menu .act {
          border-right: 1px solid #e2e2e2; }
  #classify .sify_bottom {
    margin: 0 auto;
    width: 1186px;
    height: 364px;
    margin-top: 20px; }
    #classify .sify_bottom .te {
      margin-right: 0px; }
    #classify .sify_bottom li {
      float: left;
      margin-right: 10px;
      position: relative; }
      #classify .sify_bottom li .lucency {
        width: 100%;
        height: 100%;
        display: block;
        background: rgba(0, 0, 0, 0.7);
        width: 100%;
        height: 364px;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0; }
    #classify .sify_bottom .text {
      width: 216px;
      height: 88px;
      background: rgba(0, 0, 0, 0.7);
      padding-top: 10px;
      position: absolute;
      bottom: 20px;
      left: 36px;
      z-index: 2; }
      #classify .sify_bottom .text p {
        font-size: 24px;
        margin: 5px auto;
        font-weight: bold;
        text-align: center;
        color: #fff; }
      #classify .sify_bottom .text .f_2 {
        font-size: 14px;
        font-weight: normal; }

#exhibit {
  width: 1920px;
  margin: 0 auto; }
  #exhibit img {
    margin-left: -290px; }

#m_background {
  margin: 0 auto;
  padding: 5px;
  background: url(../img/TB2tG.NbKtTMeFjSZFOXXaTiVXa-156043745.jpg) repeat-y -500px;
  width: 1412px; }
  #m_background .commodity_1 {
    width: 990px;
    margin: 0 auto; }
  #m_background .commodity_top {
    width: 990px;
    height: 280px;
    position: relative; }
    #m_background .commodity_top .background {
      background: #f3f3f3;
      width: 990px;
      height: 280px; }
    #m_background .commodity_top .title {
      width: 257px;
      height: 84px;
      padding: 10px;
      position: absolute;
      bottom: 20px;
      left: 360px;
      cursor: pointer; }
      #m_background .commodity_top .title .title_1 {
        color: #000000;
        border-bottom: 1px dashed #000;
        text-shadow: 0 0 20px #666;
        font-weight: bold;
        font-size: 24px;
        line-height: 44px;
        text-align: center;
        display: block; }
      #m_background .commodity_top .title .title_2 {
        color: #fd2462;
        font-size: 20px;
        margin-top: 7px;
        padding: 0 10px 0 15px;
        display: inline-block;
        margin-left: 76px; }
    #m_background .commodity_top .read {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: block;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0; }
    #m_background .commodity_top .peple {
      top: 150px;
      left: 778px;
      position: absolute; }
  #m_background .commodity_bot {
    background: #fff;
    width: 990px;
    height: 488px; }
    #m_background .commodity_bot li {
      width: 360px;
      float: left;
      text-align: center;
      margin: 20px auto;
      cursor: pointer; }
      #m_background .commodity_bot li .tit_1 {
        font-size: 16px;
        font-weight: bold;
        color: #000; }
      #m_background .commodity_bot li .tit_2 {
        font-size: 14px;
        color: #8f8f8f; }
    #m_background .commodity_bot li:hover p {
      color: red;
      text-decoration: underline; }
  #m_background .commodity_main {
    background: #f3f3f3;
    width: 990px;
    display: inline-block; }
    #m_background .commodity_main .cur {
      display: block;
      width: 65px;
      height: 18px;
      line-height: 18px;
      text-align: center;
      color: #fff;
      background: #000;
      position: absolute;
      right: 3px;
      bottom: -8px; }
    #m_background .commodity_main div {
      background: #fff;
      width: 237px;
      cursor: pointer;
      float: left;
      margin: 10px 5px;
      position: relative; }
    #m_background .commodity_main .r1 {
      height: 36px;
      line-height: 18px;
      padding: 4px; }
    #m_background .commodity_main .r2 {
      height: 22px;
      line-height: 22px;
      padding-left: 3px;
      position: relative; }
      #m_background .commodity_main .r2 .i1 {
        padding-right: .3rem;
        font-size: 18px;
        font-weight: 700;
        color: #f00; }
      #m_background .commodity_main .r2 .i2 {
        color: #000;
        text-decoration: line-through; }
      #m_background .commodity_main .r2 .i3 {
        display: block;
        width: 65px;
        height: 18px;
        line-height: 18px;
        text-align: center;
        color: #fff;
        background: #000;
        position: absolute;
        right: 3px;
        bottom: 2px; }

#lattice {
  width: 991px;
  background: #fff;
  overflow: hidden;
  padding-bottom: 1px;
  margin: 0 auto;
  height: 471px; }
  #lattice .lattice_1 {
    margin-top: 10px;
    height: 142px; }
    #lattice .lattice_1 a {
      border: 1px solid #DFDFDF;
      display: block;
      float: left;
      height: 70px;
      margin: 0 -1px -1px 0;
      overflow: hidden;
      position: relative;
      text-indent: -999px;
      width: 98px;
      background: url(../img/default_brandwall_bg11.png) no-repeat 0 0; }
  #lattice .lattice_2 {
    height: 36px;
    width: 990px;
    margin: 0 auto 28px;
    clear: both;
    border-bottom: 1px solid #ccc;
    position: relative; }
    #lattice .lattice_2 h3 {
      font-size: 18px;
      position: absolute;
      left: 50%;
      margin: 12px 0 0 -60px;
      background: #fff;
      padding: 10px 20px;
      font-weight: 100; }
  #lattice .lattice_3 {
    width: 990px;
    margin: 0 auto 15px;
    overflow: hidden; }
    #lattice .lattice_3 dl {
      width: 245px;
      float: left;
      padding-right: 2px; }
      #lattice .lattice_3 dl a:hover {
        color: red;
        text-decoration: underline; }
      #lattice .lattice_3 dl s {
        font-size: 20px;
        color: #c00;
        font-weight: 700; }
      #lattice .lattice_3 dl dt {
        text-align: center; }
        #lattice .lattice_3 dl dt a {
          color: #222; }
        #lattice .lattice_3 dl dt s {
          text-align: center;
          display: block;
          font-size: 14px;
          font-weight: 700;
          font-style: normal;
          color: #222; }
        #lattice .lattice_3 dl dt s:hover {
          color: red; }
      #lattice .lattice_3 dl dd {
        border-right: 1px dotted #ccc;
        height: 85px;
        overflow: hidden;
        padding: 0 10px 0 15px; }
        #lattice .lattice_3 dl dd a {
          color: #555;
          display: block;
          float: left;
          margin-bottom: 10px;
          white-space: nowrap;
          width: 54px;
          font-size: 12px;
          text-decoration: none; }

#footer {
  border-top: 2px solid #ce3c3b;
  background: #f8f8f8; }
  #footer .row1 {
    margin: 0 auto;
    width: 1226px;
    padding: 15px;
    background: #f5f5f5;
    height: 226px; }
    #footer .row1 .left {
      width: 230px;
      margin-left: 15px;
      border-right: 1px solid #dedede;
      float: left; }
    #footer .row1 .right {
      padding-left: 50px;
      border-left: 1px solid #fff;
      height: 195px;
      padding-left: 40px;
      float: left;
      line-height: 1.6em; }
      #footer .row1 .right li {
        width: 225px;
        float: left; }
        #footer .row1 .right li img {
          display: block;
          height: 36px;
          margin: 5px 0 25px; }
        #footer .row1 .right li h5 {
          display: block;
          margin: 0 0 6px;
          font-size: 14px;
          color: #666;
          font-family: '瀹嬩綋'; }
        #footer .row1 .right li a {
          color: #999;
          display: block; }
  #footer .row2 {
    margin: 0 auto;
    width: 1226px;
    text-align: center;
    padding: 20px 0;
    color: #777; }
    #footer .row2 a {
      margin: 0 15px 0 15px; }
    #footer .row2 a:hover {
      color: red;
      text-decoration: underline; }
    #footer .row2 s {
      font-size: 20px;
      color: #c00;
      font-weight: 700; }
  #footer .row3 {
    margin: 0 auto;
    width: 640px; }
    #footer .row3 a {
      margin: 0 3px; }

#head {
  padding: 20px 0 0;
  margin: 0 auto;
  width: 990px;
  margin-bottom: 1px; }

#register .backindex {
  margin: 0 auto;
  width: 780px;
  line-height: 30px;
  text-align: right;
  padding-right: 10px; }
#register .reg_main {
  margin: 0 auto;
  height: 440px;
  padding: 0;
  border: 1px solid #efefef;
  border-radius: 2px;
  box-shadow: 0 0 8px #E5E5E5;
  width: 780px;
  margin-bottom: 40px;
  margin-top: 10px; }
  #register .reg_main .title {
    font-size: 16px;
    font-family: microsoft yahei;
    color: #888;
    background: #f8f8f8;
    padding: 4px 10px;
    border-bottom: 1px solid #efefef;
    text-shadow: 1px 1px #fff;
    font-weight: 700; }
  #register .reg_main .list .list_l {
    padding: 35px 0 80px 80px;
    float: left;
    width: 337px; }
    #register .reg_main .list .list_l .fault {
      padding: 0px 0px 3px 23px;
      height: 35px; }
      #register .reg_main .list .list_l .fault span {
        border: 1px solid #E6594E;
        white-space: nowrap;
        text-align: center;
        color: #E6594E;
        margin-left: 105px;
        background: #ddd;
        display: none;
        line-height: 20px;
        padding: 0 10px 0 10px; }
    #register .reg_main .list .list_l span {
      text-align: right;
      color: #666;
      width: 75px;
      display: inline-block;
      width: 100px;
      font-size: 14px; }
    #register .reg_main .list .list_l input {
      width: 220px;
      border: 1px solid #ccc;
      padding: 3px 5px;
      color: #aaa;
      height: 22px;
      margin: 15px 0 0 5px; }
    #register .reg_main .list .list_l .b {
      position: relative;
      margin: 30px 0 0 123px; }
    #register .reg_main .list .list_l .sign {
      width: 15px;
      position: absolute;
      bottom: -4px;
      left: -24px; }
    #register .reg_main .list .list_l a {
      color: #3366dd;
      text-decoration: underline;
      margin-left: 5px; }
    #register .reg_main .list .list_l .button {
      background: url(../img/scn04.png) no-repeat 0 -198px;
      width: 89px;
      height: 38px;
      text-indent: 0;
      color: #fff;
      font-weight: bold;
      border: 0;
      cursor: pointer;
      margin-left: 106px; }
  #register .reg_main .list .list_r {
    float: left;
    border-left: 1px dashed #ccc;
    height: 300px;
    width: 272px;
    margin: 58px 0 0 90px; }
    #register .reg_main .list .list_r b {
      font-weight: bold;
      margin: 60px 0 0 88px;
      display: inline-block; }
    #register .reg_main .list .list_r a {
      margin: 14px 0 0 88px;
      background: url(../img/loginbg.png) no-repeat;
      display: block;
      width: 91px;
      height: 32px;
      line-height: 30px;
      text-align: center;
      color: #c66;
      font-size: 14px;
      font-weight: 700; }
    #register .reg_main .list .list_r img {
      margin: 44px 0 0 60px; }

.ran {
  width: 60px;
  height: 19px;
  display: inline-block;
  border: 1px solid #ddd;
  margin-top: 10px;
  text-align: center;
  line-height: 19px; }

#login {
  width: 990px;
  margin: 0 auto;
  margin-bottom: 40px;
  margin-top: 30px; }
  #login .shu {
    margin-top: -210px; }
  #login .login_r {
    display: inline-block;
    margin-left: 72px; }
    #login .login_r .bot {
      background: #fafafa;
      border: 1px solid #eee;
      box-shadow: 3px 3px #F5F5F5;
      width: 348px;
      height: 251px;
      padding: 38px 0 0 38px; }
      #login .login_r .bot a:hover {
        color: red;
        text-decoration: underline; }
      #login .login_r .bot span {
        text-align: right;
        color: #666;
        display: inline-block;
        width: 48px;
        font-size: 14px; }
      #login .login_r .bot .sign {
        width: 48px;
        margin-right: 10px; }
      #login .login_r .bot .a1 {
        margin-left: 5px; }
      #login .login_r .bot .btn {
        background: url(../img/scn04.png) no-repeat 0 -198px;
        width: 89px;
        height: 38px;
        text-indent: 0;
        color: #fff;
        font-weight: bold;
        margin-left: 54px;
        cursor: pointer; }
      #login .login_r .bot input {
        width: 220px;
        border: 1px solid #ccc;
        padding: 3px 5px;
        height: 22px;
        margin: 15px 0 0 5px; }
      #login .login_r .bot .vip {
        margin: 20px 0 0 45px; }

#cart_head {
  position: relative;
  padding-top: 5px;
  height: 24px;
  background: #eee; }
  #cart_head .head_l {
    float: left; }
    #cart_head .head_l span a {
      color: #f60; }
    #cart_head .head_l span a:hover {
      text-decoration: underline; }
  #cart_head .head_r {
    float: right; }
    #cart_head .head_r li {
      float: left;
      padding: 0 15px;
      border-right: 1px solid #d5d5d5;
      height: 16px;
      line-height: 16px;
      font-family: '瀹嬩綋'; }
      #cart_head .head_r li a {
        color: #666; }
      #cart_head .head_r li a:hover {
        text-decoration: underline;
        color: red; }
      #cart_head .head_r li img {
        margin-left: 3px; }

#logo {
  width: 990px;
  margin: 0 auto; }
  #logo .logo_l {
    float: left; }
  #logo .logo_r {
    float: left;
    background: url(../img/head.png) no-repeat 0 -62px;
    margin: 30px 0 0 139px; }
    #logo .logo_r a {
      width: 105px;
      margin-right: 28px;
      height: 32px;
      float: left;
      line-height: 10em;
      overflow: hidden; }
  #logo .server {
    width: 202px;
    height: 60px;
    float: left;
    background: url(../img/head.png) no-repeat;
    margin-top: 10px; }
    #logo .server .panel {
      height: 32px;
      margin: 25px 6px 0 10px;
      background: #fff; }
      #logo .server .panel .kf {
        float: left;
        width: 50px;
        line-height: 1.6em;
        padding: 8px 0 0 26px;
        position: relative;
        z-index: 9998;
        margin-left: 5px;
        width: 60px; }
        #logo .server .panel .kf i {
          width: 17px;
          height: 19px;
          display: block;
          overflow: hidden;
          background: url(../img/head.png) no-repeat -12px -34px;
          position: absolute;
          left: 5px;
          top: 8px; }
      #logo .server .panel .history {
        float: left;
        padding: 8px 20px 0 10px;
        margin-left: 5px;
        line-height: 1.6em;
        position: relative; }

#wrap {
  width: 990px;
  margin: 0 auto; }

#cart_main {
  border: 1px solid #ddd;
  padding: 20px 30px;
  width: 930px;
  margin: 0 auto;
  margin-top: 30px;
  display: none;
  margin-bottom: 50px; }
  #cart_main .cart_empty {
    padding: 40px 0 40px 200px;
    font-size: 14px; }
    #cart_main .cart_empty img {
      display: inline-block;
      vertical-align: middle;
      margin-right: 30px; }

#detail {
  width: 990px;
  margin: 0 auto;
  height: 550px; }
  #detail .charu {
    padding: 10px 0;
    font-family: '瀹嬩綋';
    color: #999; }
    #detail .charu a {
      color: #999;
      margin-right: 5px; }
  #detail .box .box_l {
    float: left; }
    #detail .box .box_l .big {
      border: 1px solid #f0f0f0;
      margin: 0 15px 7px 0;
      width: 430px;
      height: 430px; }
      #detail .box .box_l .big .fdj {
        width: 215px;
        height: 215px;
        background: yellow;
        opacity: 0.3;
        position: absolute;
        left: 0px;
        top: 0px;
        display: none; }
    #detail .box .box_l .small {
      width: 435px;
      overflow: hidden;
      height: 44px; }
      #detail .box .box_l .small img {
        border: 1px #e9e9e9 solid;
        background: #fff;
        margin-right: 5px;
        cursor: pointer; }
      #detail .box .box_l .small .class {
        border: 2px solid #d90; }
  #detail .box .box_r {
    float: left;
    position: relative; }
    #detail .box .box_r .mirror {
      width: 430px;
      height: 430px;
      border: 1px solid #ddd;
      position: absolute;
      left: 10;
      top: 0;
      z-index: 1;
      overflow: hidden;
      display: none; }
      #detail .box .box_r .mirror img {
        position: absolute;
        top: 0;
        left: 0; }
    #detail .box .box_r .r_1 {
      border-bottom: 1px dotted #200;
      margin-bottom: -4px;
      line-height: 1.8em span;
        line-height-font-size: 12px;
        line-height-font-weight: normal;
        line-height-float: right;
        line-height-display: block;
        line-height-color: #999;
        line-height-cursor: pointer; }
    #detail .box .box_r li {
      margin-top: 8px; }
    #detail .box .box_r .se {
      color: #d00;
      font-size: 18px;
      font-weight: 700;
      font-family: verdana; }
    #detail .box .box_r .rt {
      float: right;
      color: #999; }
    #detail .box .box_r h1 {
      font-size: 14px;
      width: 435px; }
    #detail .box .box_r .xing {
      display: inline-block;
      width: 60px;
      height: 11px;
      overflow: hidden;
      background: url(../img/pro_detial_icon1.png) no-repeat -99px -190px; }
    #detail .box .box_r .r_3 {
      padding: 10px 0 5px;
      font-family: '瀹嬩綋';
      clear: both;
      color: #999;
      background: url(../img/pro_detial_icon1.png) repeat-x 0 -65px;
      height: 20px;
      line-height: 20px; }
      #detail .box .box_r .r_3 .t {
        height: 20px;
        padding: 0 5px;
        text-align: center;
        border-right: 2px solid #fff;
        float: left;
        color: #fff;
        background: #ff9090; }
      #detail .box .box_r .r_3 .scon {
        padding: 0 5px;
        height: 20px;
        color: #fe6464;
        float: left;
        white-space: nowrap;
        background: #ffe9e9; }
    #detail .box .box_r .r_4 {
      margin-top: 5px;
      position: relative; }
      #detail .box .box_r .r_4 .sp {
        margin: 5px 0;
        height: 1px;
        overflow: hidden;
        clear: both;
        background: url(../img/pro_detial_icon1.png) repeat-x; }
      #detail .box .box_r .r_4 .hightbox {
        background: #f5f5f5;
        padding: 7px 2px; }
      #detail .box .box_r .r_4 .box_1 {
        margin: 10px 0;
        position: relative; }
        #detail .box .box_r .r_4 .box_1 i {
          display: block;
          background: url(../img/item_sel.gif) no-repeat 0 0;
          height: 12px;
          overflow: hidden;
          width: 12px;
          position: absolute;
          bottom: -4px;
          left: 188px; }
      #detail .box .box_r .r_4 .box_2 {
        position: relative; }
        #detail .box .box_r .r_4 .box_2 i {
          display: block;
          background: url(../img/item_sel.gif) no-repeat 0 0;
          height: 12px;
          overflow: hidden;
          width: 12px;
          position: absolute;
          bottom: 4px;
          left: 107px; }
      #detail .box .box_r .r_4 .box_3 {
        margin: 5px 0;
        position: relative; }
      #detail .box .box_r .r_4 span {
        width: 75px;
        display: inline-block;
        text-align: right; }
      #detail .box .box_r .r_4 a {
        margin: 3px;
        color: #333;
        border: 2px solid #f90;
        padding: 3px; }
      #detail .box .box_r .r_4 .t1 {
        width: 34px;
        height: 34px;
        border: 2px solid #f90;
        margin: 3px; }
      #detail .box .box_r .r_4 s {
        display: inline-block;
        height: 15px;
        width: 15px;
        overflow: hidden;
        cursor: pointer;
        text-align: center;
        border: 1px solid #ddd;
        background: #fff;
        margin: -4px 3px;
        line-height: 15px; }
      #detail .box .box_r .r_4 input {
        border: 1px solid #e0e0e0;
        height: 16px;
        width: 26px;
        line-height: 16px;
        text-align: center;
        margin: 3px;
        font-family: arial;
        color: #555;
        font-size: 12px; }
      #detail .box .box_r .r_4 .ru {
        width: 28px;
        height: 72px;
        position: absolute;
        top: -5px;
        right: 5px;
        cursor: pointer; }
      #detail .box .box_r .r_4 .collect {
        display: block;
        width: 95px;
        height: 25px;
        overflow: hidden;
        background: url(../img/pro_detial_icon1.png) no-repeat 0 -207px;
        cursor: pointer;
        text-align: center;
        line-height: 25px;
        border: 0;
        padding: 0;
        position: absolute;
        bottom: 158px;
        right: 15px; }
      #detail .box .box_r .r_4 .btn {
        height: 58px;
        margin-top: 10px; }
        #detail .box .box_r .r_4 .btn span {
          width: 200px;
          text-align: left; }
          #detail .box .box_r .r_4 .btn span b {
            padding: 0 3px;
            color: #C00;
            font-weight: 700;
            font-family: '瀹嬩綋'; }
        #detail .box .box_r .r_4 .btn .btn_1 {
          width: 133px;
          height: 43px;
          background: url(../img/pro_detial_icon1.png) no-repeat -3px -449px;
          cursor: pointer; }
        #detail .box .box_r .r_4 .btn .btn_2 {
          width: 169px;
          height: 43px;
          background: url(../img/pro_detial_icon1.png) no-repeat -3px -126px;
          float: right;
          cursor: pointer; }

#tab {
  width: 990px;
  margin: 0 auto; }
  #tab .det_tit {
    height: 38px;
    margin: 30px 0 0 0;
    padding-left: 5px;
    overflow: visible;
    background: url(../img/tabsepbg.gif) repeat-x scroll 0 5px; }
    #tab .det_tit .act {
      background: #fff none;
      border-bottom: 0;
      width: auto;
      border-top-width: 3px;
      padding: 4px 15px 3px 15px;
      color: #333; }
    #tab .det_tit div {
      background: url(../img/scn_p_tab_bg.gif) repeat-x;
      height: 21px;
      padding: 7px 15px 0 15px;
      width: 80px;
      border: 1px solid #c0c0c0;
      margin: 0 3px;
      cursor: pointer;
      color: #666;
      display: block;
      float: left;
      border-bottom: 0;
      text-align: center; }

#wicket {
  position: absolute;
  top: 18%;
  left: 30%;
  width: 570px;
  height: auto;
  zoom: 1;
  opacity: 1;
  border: 5px solid #f60;
  background: #fafafa;
  z-index: 999;
  display: none; }
  #wicket .list p {
    float: left;
    margin: 5px 15px 0;
    font-size: 14px;
    font-weight: 700; }
  #wicket .list span {
    float: right;
    margin-right: 12px;
    cursor: pointer;
    float: right;
    font-family: "Arial Black";
    font-weight: 700;
    font-size: 20px;
    color: #bbb; }

.tab {
  width: 660px;
  height: 300px;
  position: absolute;
  bottom: 250px;
  left: -100px;
  border: 1px solid #ddd;
  overflow: hidden; }
  .tab .image {
    width: 2640px;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0; }
  .tab img {
    width: 660px;
    height: 100%;
    float: left; }
  .tab ul {
    position: absolute;
    bottom: 20px;
    left: 294px; }
    .tab ul li {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #d5d5d5;
      float: left;
      margin-right: 10px;
      cursor: pointer; }
    .tab ul .active {
      background: #f22; }

#loutinav {
  width: 35px;
  position: fixed;
  top: 100px;
  left: 50px;
  border: 1px solid #ddd;
  display: none; }
  #loutinav li {
    width: 35px;
    height: 32px;
    border-bottom: 1px dotted #DDDDDD;
    list-style: none;
    font-size: 12px;
    text-align: center;
    position: relative;
    cursor: pointer;
    padding: 10px 0;
    background: #918888;
    color: #fff; }
    #loutinav li span {
      width: 35px;
      height: 32px;
      padding: 10px 0;
      position: absolute;
      top: 0;
      left: 0; }
  #loutinav li:hover span {
    background: #c00;
    color: #fff;
    display: block; }
  #loutinav .last {
    background: #5e4a4a;
    color: #fff;
    border-bottom: 1px solid #ddd; }
  #loutinav .active span {
    background: #c00;
    color: #fff;
    display: block; }

form {
  width: 990px;
  margin: 0 auto;
  padding: 10px 0; }
  form .mycart {
    line-height: 30px;
    color: #555;
    font-size: 14px;
    font-weight: 700;
    clear: both;
    margin-bottom: 5px; }
  form .my_tit {
    border: 1px solid #e3e3e3;
    background: #fafafa;
    height: 30px;
    line-height: 30px;
    padding: 0 20px; }
    form .my_tit li {
      float: left;
      width: 90px;
      height: 30px;
      text-align: center; }
    form .my_tit .fst {
      width: 398px; }
  form .my_mian {
    border: 1px solid #f0f0f0;
    border-top: 0;
    padding: 0 0 38px 15px; }
    form .my_mian ul {
      padding-bottom: 70px;
      display: none; }
    form .my_mian li {
      width: 90px;
      line-height: 1.4em;
      height: 54px;
      float: left;
      text-align: center;
      padding-top: 26px; }
    form .my_mian .one {
      width: 75px;
      width: 75px;
      padding-top: 14px;
      height: 66px; }
    form .my_mian .tow {
      width: 328px;
      padding-top: 18px;
      text-align: left;
      height: 62px; }
      form .my_mian .tow i {
        display: block;
        color: #bbb; }
    form .my_mian .box_3 {
      margin: 2px 0;
      position: relative; }
    form .my_mian a {
      display: block; }
    form .my_mian span {
      width: 75px;
      display: inline-block;
      text-align: right; }
    form .my_mian s {
      display: inline-block;
      height: 15px;
      width: 15px;
      overflow: hidden;
      cursor: pointer;
      text-align: center;
      border: 1px solid #ddd;
      background: #fff;
      margin: -4px -4px;
      line-height: 15px; }
    form .my_mian input {
      border: 1px solid #e0e0e0;
      height: 16px;
      width: 26px;
      line-height: 16px;
      text-align: center;
      margin: 3px;
      font-family: arial;
      color: #555;
      font-size: 12px; }
  form .price {
    border-bottom: 1px dotted #ccc;
    line-height: 1.8em;
    text-align: right;
    padding: 20px 0 10px;
    color: #333; }
    form .price .word {
      width: 100px;
      height: 20px;
      display: inline-block; }
      form .price .word i {
        color: #c00;
        font-weight: 700; }
    form .price .prc {
      margin-left: 5px;
      font-size: 22px;
      color: #C00; }
  form .jiesuan {
    line-height: 1.8em;
    text-align: right;
    padding: 20px 0 10px;
    color: #333;
    height: 40px; }
    form .jiesuan input {
      width: 171px;
      height: 37px;
      line-height: 36px;
      border: 0;
      display: block;
      background: url("../img/cart.png") no-repeat 0 -120px;
      color: #fff;
      font-size: 14px;
      font-weight: 700;
      text-align: center;
      border-radius: 2px;
      cursor: pointer;
      float: right; }

#like {
  width: 990px;
  margin: 0 auto;
  height: 340px; }
  #like .cur {
    display: block;
    width: 65px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    color: #fff;
    background: #000;
    position: absolute;
    right: 20px;
    bottom: -8px; }
  #like div {
    background: #fff;
    width: 237px;
    cursor: pointer;
    float: left;
    margin: 10px 5px;
    position: relative; }
  #like .r1 {
    height: 36px;
    line-height: 18px;
    padding: 4px; }
  #like .r2 {
    height: 22px;
    line-height: 22px;
    padding-left: 3px;
    position: relative; }
    #like .r2 .i1 {
      padding-right: .3rem;
      font-size: 18px;
      font-weight: 700;
      color: #f00; }
    #like .r2 .i2 {
      color: #000;
      text-decoration: line-through; }
    #like .r2 .i3 {
      display: block;
      width: 65px;
      height: 18px;
      line-height: 18px;
      text-align: center;
      color: #fff;
      background: #000;
      position: absolute;
      right: 3px;
      bottom: 2px; }

/*# sourceMappingURL=style.css.map */
