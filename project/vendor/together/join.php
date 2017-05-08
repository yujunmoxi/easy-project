<?php
	header('Content-Type:text/html;charset="utf-8"');
	$conn=mysql_connect('localhost','root','123456');
	mysql_select_db('myproject');
	mysql_query('SET NAMES UTF8');
	
	
	$query="select * from index";
	$result=mysql_query($query);
	
	$note;$i=0;
	while($info=mysql_fetch_array($result)){
		$note["img"]=$info['img'];
		$note["name1"]=$info['name1'];
		$note["name1"]=$info['name1'];
		$note["price"]=$info['price'];
		$note["oldprice"]=$info['oldprice'];
		$note["cutprice"]=$info['cutprice'];
		$notes[$i++]=$note;
	}
     echo json_encode($notes );
?>