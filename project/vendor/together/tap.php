<?php
	header('Content-Type:text/html;charset="utf-8"');
	$conn=mysql_connect('localhost','root','');
	mysql_select_db('myproject');
	mysql_query('SET NAMES UTF8');
	
	
	$query="select * from lunbo";
	$result=mysql_query($query);
	
	$note;$i=0;
	while($info=mysql_fetch_array($result)){
		$note["img"]=$info['img'];
		$note["name"]=$info['name'];
		$note["price"]=$info['price'];
		$note["oldprice"]=$info['oldprice'];
		$notes[$i++]=$note;
	}
     echo json_encode($notes );
?>