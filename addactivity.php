<?php
$servername = "localhost";
$username = "root";
$password = "zhengyuxiao12345";
$database = "user_db";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
mysqli_query($conn,'set names utf8');
$str = $_POST["transition"];
//echo $str;
$obj = json_decode($str,true);
$activity = $obj["activity"];
$author = $obj["author"];
$tel = $obj["tel"];
//echo $activity;
$activitydate = $obj["activitydate"];
$detail = $obj["detail"];
$id = $obj["id"];
$authorid = $obj["authorid"];
$activityid = $obj["activityid"];
 
$sel = mysqli_select_db($conn,$database);
$sql = "insert into user".$id." values (\"".$activity."\", \"".$author."\", \"".$tel."\", \"".$activitydate."\", \"".$detail."\", \"".$authorid."\", \"".$activityid."\")";
$result = $conn->query($sql);
$sql = "update flow set peopleleft = peopleleft + 1 where activityid = \"".$activityid."\"";
$result = $conn->query($sql);
if ($result){
	$database = "acti_db";
	$sel = mysqli_select_db($conn,$database);
	$sql = "insert into activity_".$activityid." values (\"".$id."\")";
	$result = $conn->query($sql);
	if($result){
		echo "success";
	}
	else {
		echo "failed1";
	}	
}
else {
	echo "failed2";
}


?>