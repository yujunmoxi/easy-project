<?php
//包含数据库连接文件
include ('conn.php');

//直接预览此页面，输出非法访问
if (isset($_REQUEST['name'])||isset($_POST['submit'])) {
	$name1 = @$_REQUEST['name'];
}else{
	exit('非法访问!');
}


//检测用户名是否已经存在
$check_query = mysql_query("select * from register where phonename='$name1' ");
if (mysql_fetch_array($check_query)) {
	echo true;
}else{
	echo false;
}

if(isset($_POST['submit']) && $_POST['submit']=="注册"){
	$phonename = $_REQUEST['username'];
	$password = MD5($_REQUEST['password']);

	$query = "INSERT INTO register(phonename,password)VALUES('$phonename','$password')";
	
	if (mysql_query($query)) {
	   header("Location:../../login.html");
	}
}

?>