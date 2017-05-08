<?php

if (!isset($_POST['submit'])) {
	exit('非法访问!');
}

$username = ($_POST['username']);
$password = MD5($_POST['password']);
echo ($username);
include ('conn.php');
//检测用户名及密码是否正确
$check_query = mysql_query("select * from register where phonename='$username' and password='$password' ");
if ($result = mysql_fetch_array($check_query)) {
	header("Location:../../menu.html");

} else {
	exit('登录失败！点击此处 <a href="javascript:history.back(-1);">返回</a> 重试');
}
?>